@extends('layout.layout')
@section('page-heading')
    <div class="row align-items-center">
        <div class="col-12 col-md-6">
            <h3>Личный кабинет</h3>
        </div>
    </div>
@endsection


@section('content')
    <div class="row">
        <div class="col-md-12">
            <div class="card">
                <div class="card-content">
                    <div class="card-body">
                        <h4 class="card-title mb-4 ">Настройки пользователя</h4>
                        <form action="{{route('users.settings')}}" method="POST" enctype="multipart/form-data">
                            @csrf
                            <div class="form-body">

                                <div class="row mt-1">
                                    <div class="col-md-12">
                                        <div class="form-group">
                                            <label>Фотография пользователя:
                                                @if(isset(auth()->user()->photo) && !empty(auth()->user()->photo))
                                                    <span class="text-success">(Аватар загружен)</span>
                                                @else
                                                    <span class="text-success">(Аватар не загружен)</span>
                                                @endif
                                            </label>

                                            <input type="file" id="photo" class="form-control @if($errors->has('photo')) is-invalid @endif"
                                                   name="photo"
                                                   accept="image/*"
                                                   value="{{old('photo')}}">
                                            @if($errors->has('photo'))
                                                <div class="invalid-feedback">
                                                    <i class="bx bx-radio-circle"></i>
                                                    @foreach($errors->get('photo') as $message)
                                                        {{$message}}<br>
                                                    @endforeach
                                                </div>
                                            @endif
                                        </div>
                                    </div>
                                </div>


                                <div class="col-12 mt-4">
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
