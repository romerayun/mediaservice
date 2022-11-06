@extends('layout.layout')
@section('page-heading')
    Добавление клиента <a href="{{route('clients.index')}}" class="btn btn-sm btn-primary">Назад</a>
@endsection


@section('content')
    <div class="row">
        <div class="col-md-6">
            <div class="card">
                <div class="card-content">
                    <div class="card-body">
                        <h4 class="card-title mb-4 ">Информация о клиенте</h4>
                        <div class="form-body">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <label>Наименование организации: </label>
                                        <input type="text" id="name" class="form-control" name="name"
                                               placeholder="Введите наименование..." required>
                                    </div>
                                    <div class="form-group">
                                        <label>Телефон: </label>
                                        <input type="tel" id="phone" class="form-control" name="phone"
                                               placeholder="Введите телефон..." required>
                                    </div>
                                    <div class="form-group">
                                        <label>Адрес организации: </label>
                                        <input type="text" id="address" class="form-control" name="address"
                                               placeholder="Введите адрес..." required>
                                    </div>
                                    <div class="form-group">
                                        <label>E-mail: </label>
                                        <input type="email" id="email" class="form-control" name="email"
                                               placeholder="Введите e-mail..." required>
                                    </div>
                                    <div class="form-group">
                                        <label>Официальный сайт: </label>
                                        <small class="text-info text-opacity-75">(Например. <i>https://namesite.com</i>)</small>
                                        <input type="text" id="website" class="form-control" name="website"
                                               placeholder="Введите адрес сайта..." required>
                                    </div>
                                    <div class="form-group">
                                        <label>День рождения компании: </label>
                                        <input type="date" id="date_of_birth" class="form-control" name="date_of_birth"
                                               placeholder="Выберите дату рождения компании" required>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <div class="card">
                <div class="card-content">
                    <div class="card-body">
                        <h4 class="card-title mb-4 ">Информация о ЛПР</h4>
                        <div class="form-body">
                            <div class="row">
                                <div class="col-md-12">
                                    <div class="row mb-3">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Фамилия: </label>
                                                <input type="text" id="surname" class="form-control" name="name"
                                                       placeholder="Введите фамилию..." required>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label>Имя: </label>
                                                <input type="tel" id="name" class="form-control" name="name"
                                                       placeholder="Введите имя..." required>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label>Отчество: </label>
                                        <input type="text" id="address" class="form-control" name="address"
                                               placeholder="Введите отчество..." required>
                                    </div>
                                    <div class="form-group">
                                        <label>Должность: </label>
                                        <input type="text" id="post" class="form-control" name="post"
                                               placeholder="Введите должность..." required>
                                    </div>
                                    <div class="form-group">
                                        <label>Телефон: </label>
                                        <input type="tel" id="phone" class="form-control" name="phone"
                                               placeholder="Введите телефон..." required>
                                    </div>
                                    <div class="form-group">
                                        <label>День рождения ЛПР: </label>
                                        <input type="date" id="date_of_birth" class="form-control" name="date_of_birth"
                                               placeholder="Выберите дату рождения ЛПР" required>
                                    </div>
                                    <div class="form-group">
                                        <label>Дополнительная информация: </label>
                                        <textarea class="form-control" id="comment" name="comment" rows="2"></textarea>
                                    </div>

{{--                                    <a href="#" class="btn btn-success">Добавить еще</a>--}}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection
