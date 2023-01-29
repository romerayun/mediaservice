@extends('layout.layout')
@section('page-heading')
    <div class="row align-items-center">
        <div class="col-12 col-md-6">
            <h3>Управление планом продаж</h3>
        </div>
        <div class="col-12 col-md-6 text-end">
            <a href="{{url()->previous()}}" class="btn btn-primary">Назад</a>
        </div>
    </div>
@endsection


@section('content')

    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-content">
                    <div class="card-body">
                        <form action="{{route('plan.statistics')}}" method="GET">
                            <div class="form-group ">
                                <label>Выберите месяц для фильтрации: </label>
                                <div class="d-flex">
                                    <input type="hidden" name="month" id="month"
                                           value="@if(app('request')->input('month')){{app('request')->input('month')}}@endif">
                                    <input type="text" id="month-f"
                                           class="form-control month-f"
                                           placeholder="Выберите месяц..." required
                                           value="@if(app('request')->input('month')){{convertMonth(app('request')->input('month'))}}@endif">
                                    <button type="submit" class="btn btn-success ms-2">Применить</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="row">
        <div class="col-md-12 col-lg-8">
            <div class="card">
                <div class="card-content">
                    <div class="card-body">
                        <h4 class="card-title mb-4 ">Статистика продаж</h4>
                        @if($salesPlan->isEmpty())
                            <h5 class="text-gray-500">К сожалению, план не был установлен 😢</h5>
                        @else

                            <p class="text-gray-500 mb-0"><b class="text-primary">Общий план всех сотрудников:</b> {{money($sumPlan)}} руб.</p>
                            <p class="text-gray-500 mb-0"><b class="text-primary">Заявок создано на:</b>
                                @if($sumClaims->first()->total_amount == null)
                                    0 руб.
                                @else
                                    {{money($sumClaims->first()->total_amount)}} руб.
                                @endif</p>
                            <p class="text-gray-500 mb-0"><b class="text-primary">Поступления:</b>            @if($sumPaid->first()->total_amount == null)
                                    0 руб.
                                @else
                                    {{money($sumPaid->first()->total_amount)}} руб.
                                @endif</p>
                            <p class="text-gray-500 mb-4"><b class="text-primary">Процент выполения:</b> {{round($sumPaid->first()->total_amount / $sumPlan * 100, 2)}}%</p>

                            <table class="table table-lg table-hover" id="datatables">
                                <thead>
                                <tr>
                                    <th>Сотрудник</th>
                                    <th>Месяц / Год</th>
                                    <th>План продаж на месяц</th>
                                    <th>Заявок создано</th>
                                    <th>Факт</th>
                                    <th>Разница</th>
                                    <th>Процент выполнения</th>
                                </tr>
                                </thead>
                                <tbody>

                                @foreach($salesPlan as $key => $item)
                                    @php
                                        $plan = $item->plan;
                                        $fact = 0;
                                    @endphp
                                    <tr>
                                        <td>
                                            <a href="{{route('users.show', ['user' => $item->user->id])}}">
                                            {{$item->user->getFullName()}}</a>
                                        </td>
                                        <td>{{$item->getDate()}}</td>
                                        <td>{{money($item->plan)}} руб.</td>
                                        <td>
                                            @if(isset($multiplied[$item->user_id]))
                                                {{money($multiplied[$item->user_id]->total_amount)}} руб.
                                            @else
                                                <span class="text-danger">Заявок не создано</span>
                                            @endif
                                        </td>
                                        <td>
                                            @if(isset($multipliedPaidClaims[$item->user_id]))
                                                {{money($multipliedPaidClaims[$item->user_id]->total_amount)}} руб.
                                                @php $fact = $multipliedPaidClaims[$item->user_id]->total_amount @endphp
                                            @else
                                                <span class="text-danger">0 руб.</span>
                                            @endif
                                        </td>
                                        <td>
                                            @php $res = $fact - $plan @endphp
                                            @if($res > 0)
                                                <span class="text-success">+{{money($res)}} руб.</span>
                                            @elseif($fact>0 && $fact < $plan)
                                                <span class="text-warning">{{money($res)}} руб.</span>
                                            @else
                                                <span class="text-danger">{{money($res)}} руб.</span>
                                            @endif
                                        </td>

                                        <td>
                                            @php
                                                if ($plan == 0) $percent = 0;
                                                else $percent = $fact / $plan * 100; @endphp
                                            @if($res > 0)
                                                <span class="text-success">{{round($percent,2)}}%</span>
                                            @elseif($fact>0 && $fact < $plan)
                                                <span class="text-warning">{{round($percent,2)}}%</span>
                                            @else
                                                <span class="text-danger">{{round($percent,2)}}%</span>
                                            @endif
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

        <div class="col-lg-4 col-md-12">
            <div class="card">
                <div class="card-content">
                    <div class="card-body">
                        <h4 class="card-title mb-4 ">Диаграмма поступлений</h4>

                        <div id="plan-statistics"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

@endsection
