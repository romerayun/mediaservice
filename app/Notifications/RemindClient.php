<?php

namespace App\Notifications;

use App\Models\Client;
use Carbon\Carbon;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class RemindClient extends Notification
{
    use Queueable;
    private $client;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct(Client $client)
    {
        $this->client = $client;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        return (new MailMessage)
            ->subject('MediaService - напоминание')
            ->line('С клиентом - ' . $this->client->name . ' нет взамиодействия больше 90 дней')
            ->line("Дата последнего взаимодействия: " . Carbon::parse($this->client->created_at)->format('d.m.Y в H:i'))
            ->action('Перейти к клиенту', 'http://mediaservice/clients/'.$this->client->id);
    }

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            //
        ];
    }
}
