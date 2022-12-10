@extends('layout.layout')
@section('page-heading')
    <div class="row align-items-center">
        <div class="col-12 col-md-6">
            <h3>Управление должностями</h3>
        </div>
        <div class="col-12 col-md-6 text-end">
            <a href="{{route('roles.index')}}" class="btn btn-primary">Назад</a>
        </div>
    </div>
@endsection


@section('content')
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-content">
                    <div class="card-body">
                        <h4 class="card-title mb-4 ">Редактирование должности</h4>

                        <form action="{{route('roles.update', ['role' => $role->id])}}" method="POST">
                            @csrf
                            @method('PUT')
                            <div class="form-body">
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label>Наименование должности: </label>
                                            <input type="text" id="name"
                                                   class="form-control @if($errors->has('name')) is-invalid @endif"
                                                   name="name"
                                                   placeholder="Введите наименование должности..." required
                                                   value="{{$role->name}}">
                                            @if($errors->has('name'))
                                                <div class="invalid-feedback">
                                                    <i class="bx bx-radio-circle"></i>
                                                    @foreach($errors->get('name') as $message)
                                                        {{$message}}<br>
                                                    @endforeach
                                                </div>
                                            @endif
                                        </div>
                                    </div>
                                </div>

                                <div class="row mt-3">
                                    <div class="col-md-12">
                                        <div class="form-group @if($errors->has('level')) is-invalid @endif">
                                            <label>Выберите уровень доступа: </label>
                                            <a class="btn btn-sm btn-primary collapsed ms-2" data-bs-toggle="collapse" href="#info-level" role="button" aria-expanded="false" aria-controls="info-level">
                                                <i class="bi bi-info-circle"></i>
                                            </a>
                                            <div class="collapse mb-3" id="info-level">
                                                <p><b class="text-info">1 уровень</b> - Административная роль</p>
                                            </div>
                                            <select class="js-example-basic-single is-invalid" name="level" id="level">
                                                @for($i = 1; $i <= 6; $i++)
                                                    @if ($role->level == $i)
                                                        <option value="{{$i}}" selected>{{$i}} уровень</option>
                                                    @else
                                                        <option value="{{$i}}">{{$i}} уровень</option>
                                                    @endif
                                                @endfor
                                            </select>
                                            @if($errors->has('level'))
                                                <div class="invalid-feedback">
                                                    <i class="bx bx-radio-circle"></i>
                                                    @foreach($errors->get('level') as $message)
                                                        {{$message}}<br>
                                                    @endforeach
                                                </div>
                                            @endif
                                        </div>
                                    </div>
                                </div>

                                <div class="row mt-3">
                                    <div class="col-md-12">
                                        <div class="form-group @if($errors->has('group_id')) is-invalid @endif">
                                            <label>Выберите отдел: </label>
                                            <select class="js-example-basic-single is-invalid" name="group_id" id="group_id">
                                                @foreach($groups as $group)
                                                    @if($group->id == $role->group_id)
                                                        <option value="{{$group->id}}" selected>{{$group->name}}</option>
                                                    @else
                                                        <option value="{{$group->id}}">{{$group->name}}</option>
                                                    @endif
                                                @endforeach
                                            </select>
                                            @if($errors->has('group_id'))
                                                <div class="invalid-feedback">
                                                    <i class="bx bx-radio-circle"></i>
                                                    @foreach($errors->get('group_id') as $message)
                                                        {{$message}}<br>
                                                    @endforeach
                                                </div>
                                            @endif
                                        </div>
                                    </div>
                                </div>

                                <div class="col-12 mt-3">
                                    <button type="submit" class="btn btn-success">Сохранить</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection