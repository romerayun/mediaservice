@extends('layout.layout')
@section('page-heading')
    <div class="row">
        <div class="col-12 col-md-6">
            <h3>Распределение клиентов</h3>
        </div>
        <div class="col-12 col-md-6 text-end">
            <a href="{{route('clients.showAll')}}" class="btn btn-sm btn-primary">Назад</a>
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
                    <th>Назначить сотрудника</th>
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
                        <td>
                            <a href="{{route('clients.show',['client' => $item->id])}}">
                                {{$item->name}}
                            </a>
                        </td>
                        <td class="user-td">
                            @if ($item->user)
                                <span>{{$item->user->getFullName()}}</span>
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
                            @csrf
                            <select class="js-example-basic-single is-invalid user_id" name="user_id" attr-id="{{$item->id}}">
                                <option value="0">Не выбрано</option>
                            @foreach($users as $user)
                                @if($item->user_id == $user->id)
                                    <option selected value="{{$user->id}}">{{$user->getFullName()}}</option>
                                @else
                                    <option value="{{$user->id}}">{{$user->getFullName()}}</option>
                                @endif
                            @endforeach
                            </select>
                        </td>
                    </tr>

                @endforeach
                </tbody>
            </table>


        @endif

    </div>


@endsection
