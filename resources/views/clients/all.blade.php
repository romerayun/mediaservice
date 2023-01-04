@extends('layout.layout')
@section('page-heading')
    <div class="row">
        <div class="col-12 col-md-3">
            <h3>Клиенты</h3>
        </div>
        <div class="col-12 col-md-9 text-end">
            @if (auth()->user()->can('allowClient', \App\Models\Client::class))
                <a href="{{route('clients.allow')}}" class="btn btn-sm btn-primary">Подтверждение клиентов
                    <span class="badge bg-transparent">{{getCountClientIsNotAllow()}}</span>
                </a>
            @endif

            @if (auth()->user()->can('viewAny', \App\Models\ActiveAd::class))
                <a href="{{route('clients.distribution')}}" class="btn btn-sm btn-primary">Распределение клиентов между МП</a>
            @endif

            @if (auth()->user()->can('create', \App\Models\Client::class))
                <a href="{{route('clients.create')}}" class="btn btn-sm btn-primary">Добавление</a>
                <a href="{{route('clients.createFast')}}" class="btn btn-sm btn-success">Быстрое добавление</a>
            @endif
        </div>
    </div>
@endsection

@section('content')

    <div class="row">

        @if($clients->isEmpty())
            <h5 class="text-gray-500">К сожалению, клиентов не найдено 😢</h5>
        @else
                <table class="table table-lg table-hover" id="datatables">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Логотип</th>
                        <th>Клиент</th>
                        <th>Менеджер</th>
                        <th>Последнее взаимодействие</th>
                    </tr>
                    </thead>
                    <tbody>
                    @foreach($clients as $key => $item)
                        <tr>
                            <td>{{$key+1}}</td>
                            <td width="200px">
                                <div class="avatar avatar-lg">
                                    @if(empty($item->logo))
                                        <img src="{{asset('images/faces/2.jpg')}}" alt="Логотип отсутствует" srcset="">
                                    @else
                                        <img src="{{asset('storage').'/'.$item->logo}}" alt="Логотип организации">
                                    @endif
                                </div>
                            </td>
                            <td>{{$item->name}}</td>
                            <td>
                                @if ($item->user)
                                    {{$item->user->getFullName()}}
                                @else
                                    <span class="text-success">Свободный клиент</span>
                                @endif
                            </td>
                            <td>
                                @if ($item->histories)
                                    <p>{{$item->histories->first()->status->name}}</p>
                                    <p><b>Ответственный: </b>{{$item->histories->first()->user->getFullName()}}</p>
                                @else
                                    <span class="text-danger">Взаимодействий не найдено</span>
                                @endif
                            </td>
                        </tr>

                    @endforeach
                    </tbody>
                </table>


        @endif

    </div>


@endsection
