@extends('layout.layout')
@section('page-heading')
    <div class="row">
        <div class="col-12 col-md-6">
            <h3>Клиенты</h3>
        </div>
        <div class="col-12 col-md-6 text-end">
            <a href="{{route('clients.createFast')}}" class="btn btn-sm btn-success">Быстрое добавление</a>
            <a href="{{route('clients.create')}}" class="btn btn-sm btn-primary">Добавление</a>
        </div>
    </div>
@endsection

@section('content')

    <div class="row">

        @if($clients->isEmpty())
            <h5 class="text-gray-500">К сожалению, клиентов не найдено 😢</h5>
        @else
{{--                <div class="col-md-4 col-sm-12">--}}
{{--                    <div class="card">--}}
{{--                        <div class="card-header">--}}
{{--                            <div class="avatar avatar-lg me-3 align-items-center">--}}
{{--                                @if(empty($client->logo))--}}
{{--                                    <img src="{{asset('images/faces/2.jpg')}}" alt="Логотип отсутствует" srcset="">--}}
{{--                                @else--}}
{{--                                    <img src="{{asset('storage').'/'.$client->logo}}" alt="Логотип организации">--}}

{{--                                @endif--}}
{{--                                <h4 class="ms-lg-3 mb-0">{{$client->name}}</h4>--}}
{{--                            </div>--}}
{{--                        </div>--}}
{{--                        <div class="card-body">--}}
{{--                            <p class="mb-1"><b>Закрепленный менеджер (МП): </b><a href="tel:{{$client->phone}}">{{$client->phone}}</a></p>--}}
{{--                        </div>--}}
{{--                    </div>--}}
{{--                </div>--}}
                <table class="table table-lg table-hover" id="datatables">
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Логотип</th>
                        <th>Клиент</th>
                        <th>Менеджер</th>
                        <th>Статус</th>
                    </tr>
                    </thead>
                    <tbody>
                    @foreach($clients as $key => $item)
                        <tr>
                            <td>{{$key+1}}</td>
                            <td width="200px">
                                <div class="avatar avatar-lg">
                                    @if(empty($item->logo))
                                        <img src="{{asset('images/faces/2.jpg')}}" alt="Логотип отсутствует" srcset="">
                                    @else
                                        <img src="{{asset('storage').'/'.$item->logo}}" alt="Логотип организации">
                                    @endif
                                </div>
                            </td>
                            <td>{{$item->name}}</td>
                            <td></td>
                            <td></td>
                        </tr>

                    @endforeach
                    </tbody>
                </table>


        @endif

    </div>

    {{ $clients->links() }}


@endsection