<?php

namespace App\Console\Commands;

use App\Models\Claim;
use App\Models\HistoryPayment;
use App\Models\StatusPayment;
use Illuminate\Console\Command;
use Illuminate\Support\Carbon;

class DebtClaimsCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'claims:debt';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Sets the debt status claim';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {

        $start = date('Y-m-00') . ' 00:00:00';
        $end = date('Y-m-32') . ' 00:00:00';

        $date = Carbon::now()->toDateString();
        $lastDayMonth = Carbon::now()->endOfMonth()->toDateString();

        if ($date == $lastDayMonth) {
            $claims = Claim::with('historiesPayment')
                ->whereHas('historiesPayment', function ($q) use ($start, $end) {
                    $q->with('status')
                        ->whereDoesntHave('status', function ($w) {
                            $w->where('name', "Оплачен");
                        });
                })
                ->get();

            $statusPayment = StatusPayment::where('name', 'Долг')->get();

            foreach ($claims as $claim) {
                HistoryPayment::create([
                    'user_id' => $claim->creator,
                    'status_id' => $statusPayment->first()->id,
                    'comment' => 'Переведена в статус "Долг" по истечению месяца - Создано автоматически',
                    'claim_id' => $claim->id,
                ]);
            }


        }

        return 0;
    }
}
