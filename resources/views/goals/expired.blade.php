@extends('layout.layout')
@section('page-heading')
    <div class="row align-items-center">
        <div class="col-12 col-md-6">
            <h3>Просроченные задачи</h3>
        </div>
        <div class="col-12 col-md-6 text-end">
            <a href="{{route('goals.index')}}" class="btn  btn-primary">Назад</a>
        </div>
    </div>
@endsection


@section('content')
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-content">
                    <div class="card-body">
                        <button class="btn btn-danger btn-collapse w-100" type="button" data-bs-toggle="collapse"
                                data-bs-target="#goalsToday" aria-expanded="true" aria-controls="goalsToday">
                            <span class="card-title fw-bold fs-6 mb-0">Список просроченных задач </span>
                            <span class="badge bg-transparent">{{countExpiredGoal()}}</span>
                            <i class="bi bi-caret-up-fill ms-1"></i>
                        </button>

                        @if($goals->isEmpty())
                            <h5 class="text-gray-500 mt-4 mb-0">Просроченных задач нет 😎 </h5>
                        @else

                            <div class="table-responsive">
                                <table class="table table-hover collapse mt-3 show" id="goalsToday">
                                    <thead>
                                    <tr>
                                        <th>Статус</th>
                                        <th>Задача</th>
                                        <th>Создана</th>
                                        <th>Выполнить до</th>
                                        <th>Создал задачу</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    @foreach($goals as $key => $item)


                                        <tr @if(!$item->isReadExpired) class="bg-light-danger" @endif>
                                            <td>
                                                <span class="badge bg-danger ">
                                                    Просрочена
                                                </span>
                                            </td>
                                            <td style="width: 30%">{{$item->text}}</td>
                                            <td><span class="badge bg-success ">{{$item->getDateCreate()}}</span></td>
                                            <td><span class="badge bg-danger ">{{$item->getDeadline()}}</span></td>
                                            <td>
                                                {{$item->exposed_user->getFullName()}}
                                            </td>
                                        </tr>
                                    @endforeach
                                    </tbody>
                                </table>
                            </div>

                        @endif

                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection

{{goalsIsReadExpired()}}
