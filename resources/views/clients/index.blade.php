@extends('layout.layout')
@section('page-heading')
    <div class="row">
        <div class="col-12 col-md-6">
            <h3>Клиенты</h3>
        </div>
        <div class="col-12 col-md-6 text-end">
            <a href="{{route('clients.createFast')}}" class="btn btn-sm btn-success">Добавление</a>
{{--            <a href="{{route('clients.create')}}" class="btn btn-sm btn-secondary">Полное добавление</a>--}}
        </div>
    </div>
@endsection

@section('content')
    <div class="row">

        @if($clients->isEmpty())
            <h5 class="text-gray-500">К сожалению, клиентов не найдено 😢</h5>
        @else

        @foreach($clients as $client)
            <div class="col-md-4">
                <div class="card">
                    <div class="card-header">
                        <div class="avatar avatar-lg me-3 align-items-center">
                            @if(empty($client->logo))
                                <img src="{{asset('images/faces/2.jpg')}}" alt="Логотип отсутствует" srcset="">
                            @else
                                <img src="{{asset('storage').'/'.$client->logo}}" alt="Логотип организации">

                            @endif
                            <h4 class="ms-lg-3 mb-0">{{$client->name}}</h4>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="divider divider-left">
                            <div class="divider-text">О компании</div>
                        </div>
                        <p class="mb-1"><b>Адрес: </b>{{$client->address}}</p>
                        <p class="mb-1"><b>Телефон: </b><a href="tel:{{$client->phone}}">{{$client->phone}}</a></p>
                        <p class="mb-1"><b>E-Mail: </b><a href="mailto:{{$client->email}}">{{$client->email}}</a></p>
                        <p class="mb-1"><b>Сайт: </b><a target="_blank" href="{{$client->website}}">{{$client->website}}</a></p>

                        <div class="divider divider-left">
                            <div class="divider-text">Инфомация о ЛПР</div>
                        </div>
                        @if($client->lprs->isEmpty())
                           Информации не найдено 😢
                        @else
                            <p class="mb-1"><b>ФИО: </b>{{$client->lprs->first()->surname}} {{$client->lprs->first()->name}} {{$client->lprs->first()->patron}}</p>
                            <p class="mb-1"><b>Должность: </b>{{$client->lprs->first()->post}}</p>
                            <p class="mb-1"><b>Телефон: </b><a href="tel:{{$client->lprs->first()->phone}}">{{$client->lprs->first()->phone}}</a></p>
                        @endif

                        <div class="divider divider-left">
                            <div class="divider-text">Реквизиты</div>
                        </div>
                            @if(!$client->requisite)
                                Информации не найдено 😢
                            @else
                                <p class="mb-1"><b>Полное наименование: </b>@if($client->requisite->fullName){{$client->requisite->fullName}} @else <span class="text-danger">Не заполнено</span> @endif</p>
                                <p class="mb-1"><b>ИНН: </b>{{$client->requisite->INN}} </p>
                                <p class="mb-1"><b>ОГРН(ОРГНИП): </b>@if($client->requisite->OGRN){{$client->requisite->OGRN}} @else <span class="text-danger">Не заполнено</span> @endif </p>
                            @endif



                        <div class="divider divider-left">
                            <div class="divider-text">Последнее взаимодействие</div>
                        </div>
                        <ol class="activity-feed">
                            <li class="feed-item feed-item-success">
                                <time class="date" datetime="9-25">14 октября</time>
                                <span class="text">Таргетированая реклама в ВК</span>
                            </li>
                            <li class="feed-item feed-item-secondary">
                                <time class="date" datetime="9-25">12 октября</time>
                                <span class="text">Новость на Серебрянном дожде</span>
                            </li>
                        </ol>


                        <div class="divider divider-left">
                            <div class="divider-text">Действия</div>

                        </div>
                        <div class="d-inline-block">
                            <a href="{{route('clients.show', ['client' => $client->id])}}" class="btn btn-sm icon btn-primary me-2 mb-2"><i class="bi bi-eye-fill"></i> Открыть</a>
                            <a href="{{route('lpr.createLpr', ['client_id' => $client->id])}}" class="btn btn-sm icon btn-success me-2 mb-2"><i class="bi bi-people-fill"></i> Управление ЛПР</a>
                            <a href="{{route('requisites.edit', ['requisite' => $client->requisite->id])}}" class="btn btn-sm icon btn-success me-2 mb-2"><i class="bi bi-file-binary-fill"></i> Управление реквизитами</a>
                            <a href="{{route('clients.edit', ['client' => $client->id])}}" class="btn btn-sm icon btn-primary me-2 mb-2"><i class="bi bi-pencil"></i> Редактировать</a>
                            <form action="{{route('clients.destroy', ['client' => $client->id])}}" method="POST">
                                @csrf
                                @method('DELETE')
                                <button type="submit" class="btn icon btn-danger me-2 mb-2 delete btn-sm"><i class="bi bi-trash-fill"></i> Удалить</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        @endforeach

        @endif

    </div>

    {{ $clients->links() }}


@endsection
