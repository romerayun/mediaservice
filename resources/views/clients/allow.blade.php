@extends('layout.layout')
@section('page-heading')
    <div class="row">
        <div class="col-12 col-md-6">
            <h3>Подтверждение клиентов</h3>
        </div>
        <div class="col-12 col-md-6 text-end">
            <a href="{{route('clients.showAll')}}" class="btn btn-sm btn-primary">Назад</a>
        </div>
    </div>
@endsection

@section('content')

    <div class="row">

        @if($clients->isEmpty())
            <h5 class="text-gray-500">Клиентов к подтверждению не найдено 😢</h5>
        @else
            <table class="table table-lg table-hover" id="datatables">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Логотип</th>
                    <th>Клиент</th>
                    <th>Менеджер</th>
                    <th>Последнее взаимодействие</th>
                    <th>Подтвердить</th>
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
                        <td>
                            <form action="{{route('clients.allowUpdate', ['client' => $item->id])}}" method="POST">
                                @csrf
                                @method('PATCH')
                                <button type="submit" class="btn btn-success">Подтвердить</button>
                            </form>
                        </td>
                    </tr>

                @endforeach
                </tbody>
            </table>


        @endif

    </div>


@endsection
