@extends('layout.layout')
@section('page-heading')
    <div class="row align-items-center">
        <div class="col-12 col-md-6">
            <h3>Управление счетами</h3>
        </div>

        <div class="col-12 col-md-6 text-end">
            <a href="{{route('claim.invoice')}}" class="btn btn-primary">Назад</a>
        </div>
    </div>
@endsection

@section('content')
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-content">
                    <div class="card-body">
                        <h4 class="card-title mb-4 ">Список выставленных счетов</h4>

                        @if($claims->isEmpty())
                            <h5 class="text-gray-500">К сожалению, выставленных счетов не найдено 😢</h5>
                        @else
                            <div class="list-group">

                                @foreach($claims as $claim)
                                    <div class="list-group-item list-group-item-action p-4">
                                        <div class="d-flex w-100 justify-content-between mb-2">
                                            <h5 class="mb-1">Заявка №{{$claim->id}} - {{$claim->service->name}}
                                                @if($claim->isRead == 0)
                                                    <span class="badge bg-info ms-2">Новая заявка</span>
                                                @endif</h5>

                                            <small>{{$claim->getCreateDate()}}</small>
                                        </div>
                                        <div class="d-flex align-items-center justify-content-start">
                                            <span class="text-success fw-bold ">Создал заявку:</span>

                                            <div class="avatar bg-white ms-2 me-2">

                                                <img src="
                                             @if(isset($claim->creatorUser->photo) && !empty($claim->creatorUser->photo))
                                                {{asset("/storage")."/".$claim->creatorUser->photo}}
                                                @else
                                                {{asset('images/faces/1.jpg')}}
                                                @endif"
                                                     alt="Avatar">
                                            </div>
                                            {{$claim->creatorUser->getFullName()}}
                                        </div>
                                        <hr>

                                        <p class="mb-1">
                                            <b>Текущий статус - </b> {{$claim->histories->first()->status->name}}
                                        </p>
                                        <p class="mb-1">
                                            <b>Стоимость - </b> {{$claim->amount}} руб.
                                        </p>

                                        <hr>


                                        <form action="{{route('claim.updateInvoice', ['claim' => $claim->id])}}" method="POST" enctype="multipart/form-data">
                                            @csrf
                                            <div class="form-group">
                                                <label>Прикрепите счет:
                                                    @if(isset($claim->invoice) && !empty($claim->invoice))
                                                        <a href="{{asset("/storage")."/".$claim->invoice}}" class="text-success" download="true">(Скачать счет)</a>
                                                    @else
                                                        <span class="text-danger">Счет не найден</span>
                                                    @endif
                                                </label>
                                                <p class="text-danger"><span class="text-opacity-50">Внимание, при прикплении нового счета, информация о старом счете станет не доступной</span></p>
                                                <input type="hidden" name="number" value="{{$loop->index}}">
                                                <input type="file" id="invoice{{$loop->index}}"
                                                       class="form-control @if($errors->has('invoice'.$loop->index)) is-invalid @endif"
                                                       name="invoice{{$loop->index}}"
                                                       value="{{old('invoice')}}">
                                                @if($errors->has('invoice'.$loop->index))
                                                    <div class="invalid-feedback">
                                                        <i class="bx bx-radio-circle"></i>
                                                        @foreach($errors->get('invoice'.$loop->index) as $message)
                                                            {{$message}}<br>
                                                        @endforeach
                                                    </div>
                                                @endif
                                            </div>

                                            <button type="submit" class="btn btn-success">Сохранить</button>
                                        </form>

                                        <hr>

                                        <div class="actions">
                                            <p>Взаимодействия</p>
                                            <a href="{{route('claims.show', ['claim' => $claim->id])}}" class="btn icon btn-primary"><i class="bi bi-eye-fill"></i></a>
                                        </div>

                                    </div>
                                @endforeach

                            </div>

                            {{ $claims->links() }}
                        @endif
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection

