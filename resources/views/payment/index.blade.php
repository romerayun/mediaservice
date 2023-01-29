@extends('layout.layout')
@section('page-heading')
    <div class="row align-items-center">
        <div class="col-12 col-md-3">
            <h3>Управление оплатами</h3>
        </div>
        <div class="col-12 col-md-9 text-end">
            <a href="{{route('payment.paid')}}" class="btn btn-sm btn-success">Оплаченные счета <span class="badge bg-transparent">{{getCountCompletePayment()}}</span></a>
            <a href="{{route('payment.statistics')}}" class="btn btn-sm btn-primary">Продажи (План/Факт)</a>
            <a href="{{route('payment.services')}}" class="btn btn-sm btn-primary">Продажи (по услугам)</a>
            <a href="{{route('payment.salesCategory')}}" class="btn btn-sm btn-primary">Продажи (по менеджерам)</a>
        </div>
    </div>
@endsection

<div class="modal fade" id="changeStatus" tabindex="-1" aria-labelledby="changeStatusLabel" aria-hidden="true">
    <div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header border-bottom-0 pb-0">
                <h1 class="modal-title fs-5" id="changeStatusLabel">Изменение статуса оплаты заявки</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
                <span class="text-danger">* </span><p class="text-subtitle text-danger d-inline">При изменении статуса на "Оплачен", заявка будет внесена в общую статистику доходов</p>
                <form action="{{route('payment.store')}}" method="POST" class="mt-4 payment-store">
                    @csrf
                    <div class="form-group @if($errors->has('status_id')) is-invalid @endif">
                        <label>Выберите новый статус: </label>
                        <input type="hidden" name="claim_id" id="claim_id" value="">
                        <select class="js-example-basic-single is-invalid" name="status_id" id="status_id">
                            @foreach($statusesPayment as $status)
                                <option value="{{$status->id}}">{{$status->name}}</option>
                            @endforeach
                        </select>
                        @if($errors->has('status_id'))
                            <div class="invalid-feedback">
                                <i class="bx bx-radio-circle"></i>
                                @foreach($errors->get('status_id') as $message)
                                    {{$message}}<br>
                                @endforeach
                            </div>
                        @endif
                    </div>

                    <div class="form-group d-none amount-form">
                        <label>Какая сумма была оплачена? </label>
                        <input type="text" id="amount"
                               class="form-control @if($errors->has('amount')) is-invalid @endif"
                               name="amount"
                               placeholder="Введите оплаченную сумму..."
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

                    <div class="form-group">
                        <label>Комменатрий: </label>
                        <textarea
                            class="form-control @if($errors->has('comment')) is-invalid @endif"
                            id="comment" name="comment" rows="3"
                            placeholder="Введите комментарий...">{{old('comment')}}</textarea>
                        @if($errors->has('comment'))
                            <div class="invalid-feedback">
                                <i class="bx bx-radio-circle"></i>
                                @foreach($errors->get('comment') as $message)
                                    {{$message}}<br>
                                @endforeach
                            </div>
                        @endif
                    </div>

                    <button type="submit" class="btn btn-success">Сохранить</button>
                </form>
            </div>
            <div class="modal-footer border-top-0 pt-0">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Закрыть</button>

            </div>
        </div>
    </div>
</div>

@section('content')
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-content">
                    <div class="card-body">
                        <h4 class="card-title mb-4 ">Список заявок от сотрудников</h4>

                        @if($claims->isEmpty())
                            <h5 class="text-gray-500">К сожалению, заявок не найдено 😢</h5>
                        @else
                            <table class="table  table-hover" id="datatables">
                                <thead>
                                <tr>
                                    <th>№ заявки</th>
                                    <th>Месяц / Год</th>
                                    <th>Клиент</th>
                                    <th>Сотрудник</th>
                                    <th>Категория услуги</th>
                                    <th>Наименование услуги</th>
                                    <th>Сумма</th>
                                    <th>Статус</th>
                                    <th class="text-center">Действие</th>
                                </tr>
                                </thead>
                                <tbody>
                                @foreach($claims as $key => $item)
                                    <tr>
                                        <td>{{$item->id}}</td>
                                        <td>{{$item->getDate()}}</td>
                                        <td>
                                            <a href="{{route('clients.show', ['client'=>$item->client->id])}}" target="_blank">{{$item->client->name}}
                                                @if($item->client->requisite->fullName)
                                                    <span>
                                                (<b>Юр.имя: </b>
                                                {{$item->client->requisite->fullName}})
                                            </span>
                                                @endif
                                            </a>
                                        </td>
                                        <td>
                                            <a href="{{route('users.show', ['user'=>$item->creator])}}" target="_blank">{{$item->creatorUser->getFullName()}}
                                            </a>
                                        </td>
                                        <td>{{$item->service->category->name}}</td>
                                        <td>{{$item->service->name}}</td>
                                        <td>{{money($item->amount)}} руб.</td>
                                        <td>
                                            @if(!$item->historiesPayment->count())
                                                <span class="text-danger">Статус не найден</span>
                                            @else
                                                <span class="badge custom-bg-{{$item->historiesPayment->first()->status->color}}">
                                                    {{$item->historiesPayment->first()->status->name}}
                                                </span>
                                            @endif
                                        </td>
                                        <td class="text-center">
                                            <button type="button" class="btn btn-primary changeStatus" data-bs-toggle="modal" data-bs-target="#changeStatus" attr-id="{{$item->id}}">
                                                Изменить статус оплаты
                                            </button>
                                        </td>
                                    </tr>

                                @endforeach
                                </tbody>
                            </table>
                        @endif

                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection
