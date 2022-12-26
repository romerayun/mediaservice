@extends('layout.layout')
@section('page-heading')
    <div class="row">
        <div class="col-12 col-md-6">
            <h3>Редактирование заявки №{{$claim->id}}</h3>
        </div>
        <div class="col-12 col-md-6 text-end">

            <a href="{{url()->previous()}}" class="btn btn-sm btn-primary">Назад</a>

        </div>
    </div>
@endsection

@section('content')

    <h5 class="text-primary">Создание заявки</h5>
    <form action="{{route('claims.store')}}" method="POST"
          enctype="multipart/form-data">
        @csrf
        <div class="row mt-3">
            <div class="col-lg-6 col-md-12">
                <div class="form-group @if($errors->has('group_id')) is-invalid @endif">
                    <label>Выберите отдел: </label>
                    <select class="js-example-basic-single is-invalid" name="group_id"
                            id="group_idS">
                        <option value="">Не выбрано</option>
                        @foreach($groups as $group)
                            @if ($claim->service->group->id == $group->id)
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
            <input type="hidden" name="client_id" value="{{$claim->client_id}}">
            <div class="col-lg-6 col-md-12">
                <div class="form-group @if($errors->has('service_id')) is-invalid @endif">
                    <label>Выберите услугу: </label>
                    <select class="js-example-basic-single is-invalid service-group"
                            name="service_id" id=service_id">

                            @foreach($services as $service)
                                @if ($claim->service_id == $service->id)
                                    <option value="{{$service->id}}" selected>{{$service->name}}</option>
                                @else
                                    <option value="{{$service->id}}">{{$service->name}}</option>
                                @endif
                            @endforeach
                    </select>
                    @if($errors->has('service_id'))
                        <div class="invalid-feedback">
                            <i class="bx bx-radio-circle"></i>
                            @foreach($errors->get('service_id') as $message)
                                {{$message}}<br>
                            @endforeach
                        </div>
                    @endif
                </div>
            </div>
        </div>

        <div class="row mt-3 package-block @if (!$claim->service->isPackage) d-none @endif">
            <div class="col-12">
                <div class="form-group @if($errors->has('package_id')) is-invalid @endif">
                    <label>Выберите пакет услуг: </label>
                    <select @if (!$claim->service->isPackage) disabled="disabled" @endif
                            class="js-example-basic-single is-invalid service-package"
                            name="package_id" id=package_id">
                            <option value="0">Не выбрано</option>
                            @if ($claim->service->isPackage)
                                @if ($packages)
                                    @foreach($packages as $package)
                                        @if ($claim->package_id == $package->id)
                                            <option value="{{$package->id}}" selected>{{$package->name}}</option>
                                        @else
                                            <option value="{{$package->id}}">{{$package->name}}</option>
                                        @endif
                                    @endforeach
                                @endif
                            @endif

                    </select>
                    @if($errors->has('package_id'))
                        <div class="invalid-feedback">
                            <i class="bx bx-radio-circle"></i>
                            @foreach($errors->get('package_id') as $message)
                                {{$message}}<br>
                            @endforeach
                        </div>
                    @endif
                </div>
            </div>
        </div>

        <div class="row mt-3">
            <div class="col-12">
                <div class="form-group">
                    <label>Выберите дату выполнения: </label>
                    <input type="hidden" name="deadlineClaim" id="deadlineClaim">
                    <input type="text" id="deadlineClaim-datepicker"
                           class="form-control deadlineClaim @if($errors->has('deadlineClaim')) is-invalid @endif"
                           name="deadlineClaim-datepicker"
                           placeholder="Выберите дату выполнения задачи..." required
                           value="{{old('deadlineClaim')}}">
                    @if($errors->has('deadlineClaim'))
                        <div class="invalid-feedback">
                            <i class="bx bx-radio-circle"></i>
                            @foreach($errors->get('deadlineClaim') as $message)
                                {{$message}}<br>
                            @endforeach
                        </div>
                    @endif
                </div>
            </div>
        </div>

        <div class="row mt-3">
            <div class="col-12 ">
                <div class="form-group">
                    <label>Стоимость: </label>
                    <input type="text" id="amount"
                           class="form-control @if($errors->has('amount')) is-invalid @endif"
                           name="amount"
                           placeholder="Введите стоимость..."
                           value="{{old('amount')}}">
                    @if($errors->has('amount'))
                        <div class="invalid-feedback">
                            <i class="bx bx-radio-circle"></i>
                            @foreach($errors->get('amount') as $message)
                                {{$message}}<br>
                            @endforeach
                        </div>
                    @endif
                </div>
            </div>
        </div>

        <div class="col-md-12 mt-3">
            <div class="form-group">
                <label>Комменатрий к заявке: </label>
                <textarea
                    class="form-control @if($errors->has('comment')) is-invalid @endif"
                    id="comment" name="comment" rows="3"
                    placeholder="Введите дополнительный комментарий...">{{old('comment')}}</textarea>
                @if($errors->has('comment'))
                    <div class="invalid-feedback">
                        <i class="bx bx-radio-circle"></i>
                        @foreach($errors->get('comment') as $message)
                            {{$message}}<br>
                        @endforeach
                    </div>
                @endif
            </div>
        </div>

        <div class="row mt-4">
            <div class="col-12">
                <input class="form-check-input me-1" name="isInvoiceC" id="isInvoiceC"
                       type="checkbox" value=""> Нужен ли счет?
                <input type="hidden" name="isInvoice" value="0">
            </div>
        </div>

        <div class="other-columns">
            <div class="row mt-3 period-block d-none">
                <div class="col-12">
                    <div class="form-group">
                        <label>Выберите период размещения: </label>
                        <input type="hidden" name="period-range" id="period-range">
                        <input type="text" id="datepicker-range"
                               class="form-control datepicker-range @if($errors->has('deadline')) is-invalid @endif"
                               name="period"
                               placeholder="Выберите период размещения..." required
                               value="{{old('period')}}">
                        @if($errors->has('period'))
                            <div class="invalid-feedback">
                                <i class="bx bx-radio-circle"></i>
                                @foreach($errors->get('period') as $message)
                                    {{$message}}<br>
                                @endforeach
                            </div>
                        @endif
                    </div>
                </div>
            </div>

            <div class="row mt-3 brif-block d-none">
                <div class="col-12">
                    <div class="form-group">
                        <label>Прикрепите бриф: </label>
                        <input type="file" id="brif"
                               class="form-control @if($errors->has('brif')) is-invalid @endif"
                               name="brif"
                               value="{{old('brif')}}">
                        @if($errors->has('brif'))
                            <div class="invalid-feedback">
                                <i class="bx bx-radio-circle"></i>
                                @foreach($errors->get('brif') as $message)
                                    {{$message}}<br>
                                @endforeach
                            </div>
                        @endif
                    </div>
                </div>
            </div>

            <div class="row mt-3 output-block d-none">
                <div class="col-12 ">
                    <div class="form-group">
                        <label>Количество выходов: </label>
                        <input type="text" id="output"
                               class="form-control @if($errors->has('output')) is-invalid @endif"
                               name="output"
                               placeholder="Введите количество выходов..."
                               value="{{old('output')}}">
                        @if($errors->has('output'))
                            <div class="invalid-feedback">
                                <i class="bx bx-radio-circle"></i>
                                @foreach($errors->get('output') as $message)
                                    {{$message}}<br>
                                @endforeach
                            </div>
                        @endif
                    </div>
                </div>
            </div>

        </div>

        <div class="row mt-3 material-block d-none">
            <div class="col-12 ">
                <div class="form-group">
                    <label>Загрузите материалы: </label>
                    <input type="file" class="filepond" id="filepond" name="filepond[]"
                           multiple>
                </div>
            </div>
        </div>


        <div class="row mt-4">
            <div class="col-12">
                <button type="submit" class="btn btn-success">Создать заявку</button>
            </div>
        </div>

    </form>


@endsection
