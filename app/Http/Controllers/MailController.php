<?php

namespace App\Http\Controllers;

use App\Mail\TestMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class MailController extends Controller
{

    public function sendMail()
    {
        Mail::to('romerayun@gmail.com')->send(new TestMail());
        return view('mail.test');
    }

}
