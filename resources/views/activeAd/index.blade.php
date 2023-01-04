@extends('layout.layout')
@section('page-heading')
    <div class="row align-items-center">
        <div class="col-12 col-md-6">
            <h3>Активная реклама</h3>
        </div>
        <div class="col-12 col-md-6 text-end">
            <a href="{{route('claim.pastActiveAd')}}" class="btn btn-danger">Законченная рекламная кампания
                <span class="badge bg-transparent">{{getCountExActiveAds()}}</span></a>
        </div>
    </div>
@endsection


@section('content')
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-content">
                    <div class="card-body">
                        <h4 class="card-title mb-4 ">Список активной рекламы</h4>

                        @if($activeAds->isEmpty())
                            <h5 class="text-gray-500">К сожалению, активной рекламы не найдено 😢</h5>
                        @else
                            <table class="table table-lg table-hover" id="datatables">
                                <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Заявка</th>
                                    <th>Запустил кампанию</th>
                                    <th>Начало рекламной кампании</th>
                                    <th>Конец рекламной кампании</th>
                                    <th>Уведомление о приблжении конца рекламной кампании</th>
                                    <th>Просмотр</th>
                                </tr>
                                </thead>
                                <tbody>
                                @foreach($activeAds as $key => $item)
                                    <tr>
                                        <td>{{$key+1}}</td>
                                        <td>Заявка №{{$item->id}} - {{$item->service->name}}</td>
                                        <td>{{$item->user->getFullName()}}</td>
                                        <td>
                                            <span class="badge bg-success fs-6">
                                                {{\Carbon\Carbon::parse($item->activeAd->first()->start_date)->format('d.m.Y')}}
                                            </span>
                                        </td>
                                        <td>
                                            <span class="badge bg-danger fs-6">
                                                {{\Carbon\Carbon::parse($item->activeAd->first()->end_date)->format('d.m.Y')}}
                                                ({{getDiffDate($item->activeAd->first()->end_date)}})
                                            </span>
                                        </td>
                                        <td>
                                            @if($item->activeAd->first()->isRemind == 0)
                                                <span class="text-primary">Уведомление еще не отправлено</span>
                                            @else
                                                <span class="text-success">Уведомление отправлено</span>
                                            @endif
                                        </td>
                                        <td>
                                            <a href="{{route('claims.show', ['claim' => $item->id])}}" class="btn btn-primary">Открыть заявку</a>
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
