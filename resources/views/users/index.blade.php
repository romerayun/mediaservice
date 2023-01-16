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


        {{--                        <h4 class="card-title mb-4 ">Список пользователей</h4>--}}

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
                                <h4 class="ms-lg-3 mb-0 text-start">{{$user->getFullName()}}</h4>
                            </div>
                        </div>
                        <div class="card-body">
                            <div class="divider divider-left mt-0">
                                <div class="divider-text">Дополнительная информация</div>
                            </div>
                            <p class="mb-1"><b>Должность: </b>{{$user->role->name}}</p>
                            <p class="mb-1"><b>Телефон: </b><a href="tel:{{$user->phone}}">{{$user->phone}}</a></p>
                            <p class="mb-1"><b>E-Mail: </b><a href="mailto:{{$user->email}}">{{$user->email}}</a></p>


                            <div class="divider divider-left">
                                <div class="divider-text">Действия</div>

                            </div>
                            <div class="d-inline-block">
                                <a href="{{route('users.show', ['user' => $user->id])}}"
                                   class="btn btn-sm icon btn-primary me-2 mb-2"><i class="bi bi-eye-fill"></i> Открыть</a>
                                <a href="{{route('users.edit', ['user' => $user->id])}}"
                                   class="btn btn-sm icon btn-primary me-2 mb-2"><i class="bi bi-pencil"></i>
                                    Редактировать</a>
                                <form action="{{route('users.destroy', ['user' => $user->id])}}" method="POST"
                                      class="d-inline">
                                    @csrf
                                    @method('DELETE')
                                    <button type="submit" class="btn icon btn-danger me-2 mb-2 block btn-sm"><i
                                            class="bi bi-lock-fill"></i> Заблокировать
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            @endforeach
        @endif


    </div>

@endsection
