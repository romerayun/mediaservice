@extends('layout.layout')
@section('page-heading')
    <div class="row align-items-center">
        <div class="col-12 col-md-6">
            <h3>Управление пользователями</h3>
        </div>
        <div class="col-12 col-md-6 text-end">
            <a href="{{route('users.create')}}" class="btn  btn-success">Добавление</a>
        </div>
    </div>
@endsection


@section('content')
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-content">
                    <div class="card-body">
                        <h4 class="card-title mb-4 ">Список пользователей</h4>

                        @if($users->isEmpty())
                            <h5 class="text-gray-500">К сожалению, пользователей не найдено 😢</h5>
                        @else
                            @foreach($users as $user)
                                <div class="col-md-4 col-sm-12">
                                    <div class="card">
                                        <div class="card-header">
                                            <div class="avatar avatar-lg me-3 align-items-center">
                                                @if(empty($user->photo))
                                                    <img src="{{asset('images/faces/2.jpg')}}" alt="Фотография отсутствует" srcset="">
                                                @else
                                                    <img src="{{asset('storage').'/'.$user->photo}}" alt="Фотография организации">

                                                @endif
                                                <h4 class="ms-lg-3 mb-0">{{$user->name}}</h4>
                                            </div>
                                        </div>
                                        <div class="card-body">
                                            <div class="divider divider-left">
                                                <div class="divider-text">Дополнительная информация</div>
                                            </div>
                                            <p class="mb-1"><b>Должность: </b>{{$user->surname}}</p>
                                            <p class="mb-1"><b>Телефон: </b><a href="tel:{{$user->phone}}">{{$user->phone}}</a></p>
                                            <p class="mb-1"><b>E-Mail: </b><a href="mailto:{{$user->email}}">{{$user->email}}</a></p>



                                            <div class="divider divider-left">
                                                <div class="divider-text">Действия</div>

                                            </div>
{{--                                            <div class="d-inline-block">--}}
{{--                                                <a href="{{route('clients.show', ['client' => $client->id])}}" class="btn btn-sm icon btn-primary me-2 mb-2"><i class="bi bi-eye-fill"></i> Открыть</a>--}}
{{--                                                <a href="{{route('lpr.createLpr', ['client_id' => $client->id])}}" class="btn btn-sm icon btn-success me-2 mb-2"><i class="bi bi-people-fill"></i> Управление ЛПР</a>--}}
{{--                                                <a href="{{route('requisites.edit', ['requisite' => $client->requisite->id])}}" class="btn btn-sm icon btn-success me-2 mb-2"><i class="bi bi-file-binary-fill"></i> Управление реквизитами</a>--}}
{{--                                                <a href="{{route('clients.edit', ['client' => $client->id])}}" class="btn btn-sm icon btn-primary me-2 mb-2"><i class="bi bi-pencil"></i> Редактировать</a>--}}
{{--                                                <form action="{{route('clients.destroy', ['client' => $client->id])}}" method="POST">--}}
{{--                                                    @csrf--}}
{{--                                                    @method('DELETE')--}}
{{--                                                    <button type="submit" class="btn icon btn-danger me-2 mb-2 delete btn-sm"><i class="bi bi-trash-fill"></i> Удалить</button>--}}
{{--                                                </form>--}}
{{--                                            </div>--}}
                                        </div>
                                    </div>
                                </div>
                            @endforeach
                        @endif

                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection
