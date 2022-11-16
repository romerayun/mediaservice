@extends('layout.layout')
@section('page-heading')
    <div class="row">
        <div class="col-12 col-md-6">
            <h3>Клиент №{{$client->id}} - {{$client->name}}</h3>
        </div>
        <div class="col-12 col-md-6 text-end">
            <a href="{{route('clients.index')}}" class="btn btn-sm btn-primary">Назад</a>
        </div>
    </div>
@endsection


@section('content')
    <section class="row">
        <div class="col-12 col-lg-9">

        </div>
        <div class="col-12 col-lg-3">
            <div class="card">
                <div class="card-body py-4 px-4">
                    <div class="d-flex align-items-center">
                        <div class="avatar avatar-xl">
                            @if(empty($client->logo))
                                <img src="{{asset('images/faces/2.jpg')}}" alt="Логотип отсутствует" srcset="">
                            @else
                                <img src="{{asset('storage').'/'.$client->logo}}" alt="Логотип организации">
                            @endif
                        </div>
                        <div class="ms-3 name">
                            <h5 class="font-bold">{{$client->name}}</h5>
                        </div>
                    </div>
                    <p class="mb-1 mt-4"><b>Адрес: </b>@if($client->address){{$client->address}} @else <span class="text-danger">Не заполнено</span> @endif</p>
                    <p class="mb-1"><b>Телефон: </b><a href="tel:{{$client->phone}}">{{$client->phone}}</a></p>
                    <p class="mb-1"><b>E-Mail: </b>@if($client->address)<a href="mailto:{{$client->email}}">{{$client->email}}</a> @else <span class="text-danger">Не заполнено</span> @endif</p>
                    <p class="mb-1"><b>Сайт: </b>@if($client->website)<a target="_blank" href="{{$client->website}}">{{$client->website}}</a>@else <span class="text-danger">Не заполнено</span> @endif</p>
                    <p class="mb-1"><b>День рождения компании: </b>@if($client->date_of_birth){{$client->getUntilBirthday()}} @else <span class="text-danger">Не заполнено</span> @endif</p>
                </div>
            </div>
            <div class="card">
                <div class="card-header">
                    <h4>ЛПР</h4>
                </div>
                <div class="card-content pb-4">
                    @if($client->lprs->isEmpty())
                        Информации не найдено 😢
                    @else
                        @foreach($client->lprs as $lpr)
                            <div class="recent-message px-4 mb-3">
                                <div class="name">
                                    <h5 class="mb-1">{{$lpr->getFullName()}}</h5>
                                    <h6 class="text-muted mb-3">{{$lpr->post}}</h6>
                                </div>
                                <p class="mb-1"><b>Телефон: </b><a href="tel:{{$lpr->phone}}">{{$lpr->phone}}</a></p>
                                <p class="mb-1"><b>День рождения: </b>@if($lpr->date_of_birth){{$lpr->getUntilBirthday()}} @else <span class="text-danger">Не заполнено</span> @endif</p>
                                <p class="mb-1"><b>Дополнительная информация: </b>{{$lpr->getComment($lpr->comment)}}</p>
                            </div>

                            <hr>
                        @endforeach
                    @endif

                </div>
            </div>
            <div class="card">
                <div class="card-header">
                    <h4>Visitors Profile</h4>
                </div>
                <div class="card-body">
                    <div id="chart-visitors-profile"></div>
                </div>
            </div>
        </div>
    </section>
@endsection
