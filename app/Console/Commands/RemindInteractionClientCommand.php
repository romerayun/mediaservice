<?php

namespace App\Console\Commands;

use App\Models\Client;
use App\Notifications\RemindClient;
use Illuminate\Console\Command;

class RemindInteractionClientCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'client:interaction';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Reminder if there was no interaction with clients for 3 months';

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
        $clients = Client::all();
        foreach ($clients as $client) {
            if ($client->histories->first()->created_at) {
                $lastDate = \Carbon\Carbon::make($client->histories->first()->created_at);
                $diffDays = $lastDate->diff(now())->days;
                if ($diffDays > 90) {
                    if ($client->user_id) {
                        if ($client->interactionsRemind == 0) {
                            $client->user->notify(new RemindClient($client));
                            $client->interactionsRemind = 1;
                            $client->save();
                        }
                    }
                } else {
                    $client->interactionsRemind = 0;
                    $client->save();
                }
            }

        }

        return 0;
    }
}
