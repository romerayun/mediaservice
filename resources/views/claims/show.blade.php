@extends('layout.layout')
@section('page-heading')
    <div class="row align-items-center">
        <div class="col-12 col-md-6">
            <h3>Просмотр заявки</h3>
        </div>
        <div class="col-12 col-md-6 text-end">

            <a href="{{url()->previous()}}" class="btn btn-sm btn-primary">Вернуться назад</a>
        </div>
    </div>
@endsection

@section('content')
    <div class="row">

        @if (auth()->user()->role->level <= 2 || auth()->user()->role->level == 6 || auth()->user()->id == $claim->creator || auth()->user()->id == $claim->user_id)
            <div class="col-lg-9 col-md-12">
        @else
            <div class="col-lg-12 col-md-12">
        @endif

            <div class="card">
                <div class="card-content">
                    <div class="card-body">
                        <div class="d-flex w-100 justify-content-between mb-2">
                            <h4 class="card-title">
                                Заявка №{{$claim->id}} - {{$claim->service->name}} <span
                                    class="ms-2 badge bg-{{$claim->histories->first()->status->color}}"> {{$claim->histories->first()->status->name}}</span>

                                @if($claim->notInclude)
                                    <span class="ms-1 badge bg-danger">
                                        Не включена в план продаж
                                    </span>
                                @endif
                            </h4>
                            <small>{{$claim->getCreateDate()}}</small>
                        </div>
                        <div class="badges">
                            @if($claim->service->isRequiredMaterial)
                                <span class="badge bg-success me-2">Материалы</span>
                            @endif
                            @if($claim->service->isPackage)
                                <span class="badge bg-success me-2">Пакеты услуг</span>
                            @endif
                            @if($claim->service->isPeriod)
                                <span class="badge bg-success me-2">Период размещения</span>
                            @endif
                            @if($claim->service->isBrif)
                                <span class="badge bg-success me-2">Бриф</span>
                            @endif
                            @if($claim->service->isOutput)
                                <span class="badge bg-success me-2">Количество выходов</span>
                            @endif
                            @if($claim->isInvoice)
                                <span class="badge bg-success me-2">Счет</span>
                            @endif
                        </div>

                        <p class="mt-3 mb-0"><b class="text-primary">Клиент:</b> {{$claim->client->name}}</p>
                        <p class="mt-1 mb-0"><b class="text-primary">Стоимость:</b> {{money($claim->amount)}} р.</p>
                        <p class="mt-1 mb-0"><b class="text-primary">Выполнить до:</b> {{$claim->getDeadline()}}</p>
                        @if ($claim->comment)
                            <p class="mt-1"><b class="text-primary">Комментарий:</b> {{$claim->comment}}</p>
                        @endif


                        <hr>
                        @if($activeAd)
                            @if($activeAd->end_date < now())
                                <h4 class="card-title mb-0 mt-2">Рекламная кампания завершена</h4>
                                <p class="mt-2">
                                    <b class="text-primary">Период рекламной кампании:</b>
                                    {{\Illuminate\Support\Carbon::parse($activeAd->start_date)->format('d.m.Y')}}
                                    -
                                    {{\Illuminate\Support\Carbon::parse($activeAd->end_date)->format('d.m.Y')}}
                                </p>
                            @else
                                <h4 class="card-title mb-0 mt-2">Рекламная кампания запущена</h4>
                                <p class="mt-2">
                                    <b class="text-primary">Период рекламной кампании:</b>
                                    {{\Illuminate\Support\Carbon::parse($activeAd->start_date)->format('d.m.Y')}}
                                    -
                                    {{\Illuminate\Support\Carbon::parse($activeAd->end_date)->format('d.m.Y')}}
                                </p>
                                <form action="{{route('claim.deleteAd', ['ad'=>$activeAd->id])}}" method="POST">
                                    @csrf
                                    @method('DELETE')
                                    <button type="submit" class="btn btn-danger">Удалить рекламную кампанию</button>
                                </form>
                            @endif
                        @else

                        @if (auth()->user()->role->level <= 2 || auth()->user()->id == $claim->creator || auth()->user()->id == $claim->user_id)
                        <div class="form-check form-switch">
                            <label class="form-check-label" for="active-adds">Поставить рекламу на запуск</label>
                            <input class="form-check-input" name="active-adds" type="checkbox"  @if($errors->has('range_date_hidden')) checked @endif>
                        </div>

                        <div class="form-active-adds mt-3" @if($errors->has('range_date_hidden')) style="display: block" @else style="display: none"  @endif>
                            <h4 class="card-title mb-0 mt-2">Поставить рекламу на запуск</h4>
                            <p class="mb-3 text-warning text-opacity-75"><i>После постановки данной заявки на запуск, за неделю
                                    автоматически сгенерируется задача о приближающемся окончании рекламной кампании
                                </i></p>

                            <form action="{{route('claim.storeAd', ['claim' => $claim->id])}}" method="POST">
                                @csrf
                                <div class="row">
                                    <div class="col-lg-12 col-md-12">
                                        <div class="form-group">
                                            <label for="range-ad-datepicker" class="mb-2">Выберите период рекламной кампании:</label>
                                            @if($errors->has('range_date_hidden'))
                                                <p class="text-danger">
                                                    @foreach($errors->get('range_date_hidden') as $message)
                                                        {{$message}}<br>
                                                    @endforeach
                                                </p>
                                            @endif
                                            <div id="range-ad-datepicker"></div>
                                        </div>

                                        <input type="hidden" name="range_date_hidden" id="range-ad-hidden">

                                    </div>
                                </div>

                                <button type="submit" class="btn btn-success mt-3">Запустить</button>
                            </form>
                        </div>
                        @endif

                        @endif

                        @if (auth()->user()->role->level <= 2 || auth()->user()->id == $claim->creator || auth()->user()->id == $claim->user_id)
                        @if ($claim->isClose == 0)
                            <hr>
                            <div class="form-check form-switch">
                                <label class="form-check-label" for="close-claim">Закрыть заявку</label>
                                <input class="form-check-input" name="close-claim" type="checkbox">
                            </div>

                            <div class="form-close-claim mt-3" style="display: none">
                                <h4 class="card-title mb-0">Закрыть заявку</h4>
                                <p class="mb-3 text-warning text-opacity-75"><i>После закрытия заявки, изменение истории
                                        будет
                                        невозможно</i></p>
                                <form action="{{route('claim.claimsClosed', ['claim' => $claim->id])}}" method="POST">
                                    @csrf
                                    <div class="form-group">
                                        <label>Причина закрытия заявки: </label>
                                        <textarea
                                            class="form-control @if($errors->has('commentClose')) is-invalid @endif"
                                            id="commentClose" name="commentClose" rows="3"
                                            placeholder="Введите причину закрытия заявки...">{{old('commentClose')}}</textarea>
                                        @if($errors->has('commentClose'))
                                            <div class="invalid-feedback">
                                                <i class="bx bx-radio-circle"></i>
                                                @foreach($errors->get('commentClose') as $message)
                                                    {{$message}}<br>
                                                @endforeach
                                            </div>
                                        @endif
                                    </div>

                                    <button type="submit" class="btn btn-danger">Закрыть заявку</button>

                                </form>
                            </div>
                        @endif
                        @endif

{{--                        @if (auth()->user()->role->level <= 2 || auth()->user()->id == $claim->creator || auth()->user()->id == $claim->user_id)--}}
{{--                            <hr>--}}
{{--                            <div class="form-check form-switch">--}}
{{--                                <label class="form-check-label" for="send-claim">Отправить заявку</label>--}}
{{--                                <input class="form-check-input" name="send-claim" type="checkbox" checked>--}}
{{--                            </div>--}}

{{--                            <div class="form-active-adds mt-3">--}}
{{--                                <h4 class="card-title mb-0 mt-2">Перенаправление заявки</h4>--}}
{{--                                <p class="mb-3 text-warning text-opacity-75"><i>Выберите сотрудника на которого Вы хотите перенаправить заявку--}}
{{--                                    </i></p>--}}

{{--                                <form action="{{route('claim.storeAd', ['claim' => $claim->id])}}" method="POST">--}}
{{--                                    @csrf--}}


{{--                                    <button type="submit" class="btn btn-success mt-3">Отправить</button>--}}
{{--                                </form>--}}
{{--                            </div>--}}
{{--                        @endif--}}

                    </div>
                </div>
            </div>
            @if (auth()->user()->role->level <= 2 || auth()->user()->id == $claim->creator || auth()->user()->id == $claim->user_id)
            <div class="card">
                <div class="card-content">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-lg-6 col-md-12">
                                <h4 class="card-title">История заявки</h4>
                                @if(!$claim->histories)
                                    <h5 class="text-gray-500">К сожалению, истории не найдено 😢</h5>
                                @else
                                    <ol class="activity-feed">
                                        @foreach($claim->histories as $history)
                                            <li class="feed-item feed-item-{{$history->status->color}}">
                                                <time class="date" datetime="9-25">{{$history->getDate()}}</time>
                                                <p class="fs-6"><b>Статус: </b> {{$history->status->name}}</p>
                                                <span
                                                    class="text"><b>Комментарий: </b> {{$history->comment}}</span>
                                                <p class="text mt-3">
                                                    <b>Ответственный: </b>{{$history->user->getFullName()}}</p>
                                            </li>
                                        @endforeach
                                    </ol>
                                @endif
                            </div>


                            <div class="col-lg-6 col-md-12">
                                <h4 class="card-title">Добавление истории</h4>
                                @if ($claim->isClose == 1)
                                    <p class="text-gray-500 mt-3">Заявка закрыта, добавление истории невозможно 😢</p>
                                @else
                                    <form action="{{route('claim.storeHistory', ['claim' => $claim->id])}}"
                                          method="POST"
                                          class="mt-3">
                                        @csrf
                                        <div class="col-md-12">
                                            <div
                                                class="form-group @if($errors->has('status_id')) is-invalid @endif">
                                                <label>Выберите новый статус заявки: </label>
                                                <select class="js-example-basic-single is-invalid"
                                                        name="status_id" id="status_id">
                                                    @foreach($statusesClaim as $status)
                                                        <option
                                                            value="{{$status->id}}">{{$status->name}}</option>
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
                                        </div>
                                        <div class="col-md-12 mt-3">
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
                                        </div>

                                        <div class="col-12 mt-4">
                                            <button type="submit" class="btn btn-success">Сохранить</button>
                                        </div>
                                    </form>
                                @endif
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            @endif
        </div>

        <div class="col-lg-3 col-md-12">
            @if (auth()->user()->role->level <= 2 || auth()->user()->role->level == 6 || auth()->user()->id == $claim->creator || auth()->user()->id == $claim->user_id)
            <div class="card">
                <div class="card-content">
                    <div class="card-body">
                        <h4 class="card-title">
                            История оплаты заявки
                        </h4>

                        @if(!$claim->historiesPayment->count())
                            <h6 class="text-gray-500  mt-3">К сожалению, истории не найдено 😢</h6>
                        @else
                            <ol class="activity-feed mt-3">
                                @foreach($claim->historiesPayment as $history)
                                    <li class="feed-item feed-item-{{$history->status->color}}">
                                        <time class="date" datetime="9-25">{{$history->getDate()}}</time>
                                        <p class="fs-6"><b>Статус: </b> {{$history->status->name}}</p>
                                        <span
                                            class="text"><b>Комментарий: </b> {{$history->comment}}</span>
                                        <p class="text mt-3">
                                            <b>Ответственный: </b>{{$history->user->getFullName()}}</p>
                                    </li>
                                @endforeach
                            </ol>
                        @endif

                    </div>
                </div>
            </div>
            @endif

            @if (auth()->user()->role->level <= 2 || auth()->user()->id == $claim->creator || auth()->user()->id == $claim->user_id)
                @if($claim->isInvoice)
                    <div class="col-12">
                        <div class="card">
                            <div class="card-content">
                                <div class="card-body">
                                    <h4 class="card-title">Счет</h4>
                                    @if ($claim->invoice)
                                        <a href=" {{asset("/storage")."/".$claim->invoice}}"
                                           class="btn icon icon-left btn-primary me-2 mt-2" download>
                                            <i class="bi bi-file-arrow-down-fill"></i> Скачать счет</a>
                                    @else
                                        <p class="text-gray-500 m-0">Счет не готов 😢</p>
                                    @endif
                                </div>
                            </div>
                        </div>
                    </div>
                @endif
                @if($claim->service->isRequiredMaterial)
                    <div class="col-12">
                        <div class="card">
                            <div class="card-content">
                                <div class="card-body">
                                    <h4 class="card-title mb-1">Материалы</h4>

                                    @if (count($claim->files) != 0)

                                        @foreach($claim->files as $file)
                                            <a href=" {{asset("/storage")."/".$file->file}}"
                                               class="btn icon icon-left btn-primary me-1 mt-2" download="{{$file->file}}">
                                                <i class="bi bi-file-arrow-down-fill"></i> Скачать файл</a>
                                        @endforeach

                                    @else
                                        <p class="text-gray-500 m-0">Дополнительные материалы не найдены 😢</p>
                                    @endif
                                </div>
                            </div>
                        </div>
                    </div>

                @endif
                @if($claim->service->isPackage)
                    <div class="col-12">
                        <div class="card">
                            <div class="card-content">
                                <div class="card-body">
                                    <h4 class="card-title">Пакет услуг</h4>
                                    @if ($claim->package_id)
                                        <p class="m-0"><b>Выбранный пакет: </b>{{$claim->package->name}}</p>
                                    @else
                                        <p class="text-gray-500 m-0">Пакет услуг не был выбран 😢</p>
                                    @endif
                                </div>
                            </div>
                        </div>
                    </div>
                @endif
                @if($claim->service->isPeriod)
                    <div class="col-12">
                        <div class="card">
                            <div class="card-content">
                                <div class="card-body">
                                    <h4 class="card-title">Период размещения</h4>
                                    @if ($claim->period)
                                        <p class="m-0"><b>Выбранный период: </b>{{$claim->period}}</p>
                                    @else
                                        <p class="text-gray-500 m-0">Период размещения не был выбран 😢</p>
                                    @endif
                                </div>
                            </div>
                        </div>
                    </div>
                @endif
                @if($claim->service->isBrif)
                    <div class="col-12">
                        <div class="card">
                            <div class="card-content">
                                <div class="card-body">
                                    <h4 class="card-title">Бриф</h4>
                                    @if ($claim->brif)
                                        <a href=" {{asset("/storage")."/".$claim->brif}}"
                                           class="btn icon icon-left btn-primary me-2" download>
                                            <i class="bi bi-file-arrow-down-fill"></i> Скачать бриф</a>
                                    @else
                                        <p class="text-gray-500 m-0">Бриф не был загружен 😢</p>
                                    @endif
                                </div>
                            </div>
                        </div>
                    </div>
                @endif
                @if($claim->service->isOutput)
                <div class="col-12">
                    <div class="card">
                        <div class="card-content">
                            <div class="card-body">
                                <h4 class="card-title">Количество выходов</h4>
                                @if ($claim->output)
                                    <p class="m-0">{{$claim->output}}</p>
                                @else
                                    <p class="text-gray-500 m-0">Количество выходов не было указано 😢</p>
                                @endif
                            </div>
                        </div>
                    </div>
                </div>
            @endif
            @endif

        </div>
    </div>
@endsection
