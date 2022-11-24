<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CRM MediaService</title>


    <link rel="stylesheet" href="{{@asset('css/all.css')}}">
    <link rel="stylesheet" href="{{@asset('css/datatables.css')}}">
    <link rel="shortcut icon" href="{{asset('images/logo/favicon.svg')}}" type="image/x-icon">
    <link rel="shortcut icon" href="{{asset('images/logo/favicon.png')}}" type="image/png">




</head>

<body>

<div class="overlay-spinner">
    <div class="spinner-border" style="width: 3rem; height: 3rem;" role="status">
        <span class="visually-hidden">Сохраняем данные, пожалуйста подождите...</span>
    </div>
    <p class="text-white fw-bold">Сохраняем данные, пожалуйста подождите...</p>
</div>

<div id="app">
    <div id="sidebar" class="active">
        <div class="sidebar-wrapper active">
            <div class="sidebar-header position-relative">
                <div class="d-flex justify-content-between align-items-center">
                    <div class="logo">
                        <a href="{{route('home')}}">
                            <img class="logo-black" src="{{asset('images/logo/logo-black.png')}}" alt="Logo MediaService" srcset="">
                            <img class="logo-white" src="{{asset('images/logo/logo.png')}}" alt="Logo MediaService" srcset="">
                        </a>
                    </div>
                    <div class="theme-toggle d-flex gap-2  align-items-center mt-2">
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--system-uicons" width="20" height="20" preserveAspectRatio="xMidYMid meet" viewBox="0 0 21 21"><g fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M10.5 14.5c2.219 0 4-1.763 4-3.982a4.003 4.003 0 0 0-4-4.018c-2.219 0-4 1.781-4 4c0 2.219 1.781 4 4 4zM4.136 4.136L5.55 5.55m9.9 9.9l1.414 1.414M1.5 10.5h2m14 0h2M4.135 16.863L5.55 15.45m9.899-9.9l1.414-1.415M10.5 19.5v-2m0-14v-2" opacity=".3"></path><g transform="translate(-210 -1)"><path d="M220.5 2.5v2m6.5.5l-1.5 1.5"></path><circle cx="220.5" cy="11.5" r="4"></circle><path d="m214 5l1.5 1.5m5 14v-2m6.5-.5l-1.5-1.5M214 18l1.5-1.5m-4-5h2m14 0h2"></path></g></g></svg>
                        <div class="form-check form-switch fs-6">
                            <input class="form-check-input  me-0" type="checkbox" id="toggle-dark" >
                            <label class="form-check-label" ></label>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" class="iconify iconify--mdi" width="20" height="20" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24"><path fill="currentColor" d="m17.75 4.09l-2.53 1.94l.91 3.06l-2.63-1.81l-2.63 1.81l.91-3.06l-2.53-1.94L12.44 4l1.06-3l1.06 3l3.19.09m3.5 6.91l-1.64 1.25l.59 1.98l-1.7-1.17l-1.7 1.17l.59-1.98L15.75 11l2.06-.05L18.5 9l.69 1.95l2.06.05m-2.28 4.95c.83-.08 1.72 1.1 1.19 1.85c-.32.45-.66.87-1.08 1.27C15.17 23 8.84 23 4.94 19.07c-3.91-3.9-3.91-10.24 0-14.14c.4-.4.82-.76 1.27-1.08c.75-.53 1.93.36 1.85 1.19c-.27 2.86.69 5.83 2.89 8.02a9.96 9.96 0 0 0 8.02 2.89m-1.64 2.02a12.08 12.08 0 0 1-7.8-3.47c-2.17-2.19-3.33-5-3.49-7.82c-2.81 3.14-2.7 7.96.31 10.98c3.02 3.01 7.84 3.12 10.98.31Z"></path></svg>
                    </div>
                    <div class="sidebar-toggler x">
                        <a href="#" class="sidebar-hide d-xl-none d-block"><i class="bi bi-x bi-middle"></i></a>
                    </div>
                </div>
            </div>
            <div class="sidebar-menu">
                <ul class="menu">

                    <li
                        class="sidebar-item">
                        <a href="{{route('home')}}" class='sidebar-link'>
                            <i class="bi bi-house-fill"></i>
                            <span>Главная</span>
                        </a>
                    </li>

                    <li
                        class="sidebar-item  ">
                        <a href="{{route('clients.showAll')}}" class='sidebar-link'>
                            <i class="bi bi-person-lines-fill"></i>
                            <span>Все клиенты</span>
                        </a>
                    </li>

                    <li
                        class="sidebar-item  ">
                        <a href="{{route('clients.index')}}" class='sidebar-link'>
                            <i class="bi bi-people-fill"></i>
                            <span>Мои клиенты</span>
                        </a>
                    </li>

                    <li
                        class="sidebar-item  ">
                        <a href="{{route('status-client.index')}}" class='sidebar-link'>
                            <i class="bi bi-info-circle-fill"></i>
                            <span>Статус клиента</span>
                        </a>
                    </li>

                    <li class="sidebar-title">Cтруктура</li>

                    <li
                        class="sidebar-item  ">
                        <a href="{{route('groups.index')}}" class='sidebar-link'>
                            <i class="bi bi-person-workspace"></i>
                            <span>Отделы</span>
                        </a>
                    </li>
                    <li
                        class="sidebar-item  ">
                        <a href="{{route('roles.index')}}" class='sidebar-link'>
                            <i class="bi bi-briefcase-fill"></i>
                            <span>Должности</span>
                        </a>
                    </li>
                    <li
                        class="sidebar-item  ">
                        <a href="{{route('users.index')}}" class='sidebar-link'>
                            <i class="bi bi-person-fill"></i>
                            <span>Пользователи</span>
                        </a>
                    </li>

                    <li class="sidebar-title">Управление услугами</li>

                    <li
                        class="sidebar-item  ">
                        <a href="{{route('category.index')}}" class='sidebar-link'>
                            <i class="bi bi-folder-fill"></i>
                            <span>Категории услуг</span>
                        </a>
                    </li>

                    <li
                        class="sidebar-item  ">
                        <a href="{{route('services.index')}}" class='sidebar-link'>
                            <i class="bi bi-card-list"></i>
                            <span>Услуги</span>
                        </a>
                    </li>

                    <li
                        class="sidebar-item  ">
                        <a href="{{route('status-material.index')}}" class='sidebar-link'>
                            <i class="bi bi-info-circle-fill"></i>
                            <span>Статус материалов</span>
                        </a>
                    </li>

                    <li
                        class="sidebar-item  ">
                        <a href="{{route('packages.index')}}" class='sidebar-link'>
                            <i class="bi bi-box-seam-fill"></i>
                            <span>Пакеты услуг</span>
                        </a>
                    </li>


                    <li class="sidebar-title">Профиль</li>

                    <li
                        class="sidebar-item  ">
                        <a href="{{route('users.logout')}}" class='sidebar-link'>
                            <i class="bi bi-door-open-fill"></i>
                            <span>Выйти</span>
                        </a>
                    </li>

{{--                    <li--}}
{{--                        class="sidebar-item has-sub">--}}
{{--                        <a href="#" class='sidebar-link'>--}}
{{--                            <i class="bi bi-collection-fill"></i>--}}
{{--                            <span>Учебные группы</span>--}}
{{--                        </a>--}}
{{--                        <ul class="submenu ">--}}
{{--                            <li class="submenu-item ">--}}
{{--                                <a href="{{ route('speciality.index') }}">Специальности</a>--}}
{{--                            </li>--}}
{{--                            <li class="submenu-item ">--}}
{{--                                <a href="#">Группы</a>--}}
{{--                            </li>--}}
{{--                        </ul>--}}
{{--                    </li>--}}




                </ul>
            </div>
        </div>
    </div>
    <div id="main">
        <header class="mb-3">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-6">
                        <a href="#" class="burger-btn d-block d-xl-none">
                            <i class="bi bi-justify fs-3"></i>
                        </a>
                    </div>
                    <div class="col-6 d-flex justify-content-end">
                        <div class="header-top-right text-end">

                            <div class="dropdown">
                                <a href="#" id="topbarUserDropdown" class="user-dropdown d-flex align-items-center dropend dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                    <div class="text">
                                        <h6 class="user-dropdown-name">{{auth()->user()->surname}} {{\Illuminate\Support\Str::substr(auth()->user()->name, 0, 1)}}.
                                            {{\Illuminate\Support\Str::substr(auth()->user()->patron, 0, 1)}}.</h6>
                                        <p class="user-dropdown-status text-sm text-muted">{{auth()->user()->role->name}}</p>
                                    </div>
                                    <div class="avatar avatar-md2">
                                        <img src="
                                             @if(isset(auth()->user()->photo) && !empty(auth()->user()->photo))
                                        {{asset("/storage")."/".auth()->user()->photo}}
                                        @else
                                        {{asset('images/faces/1.jpg')}}
                                        @endif"
                                             alt="Avatar">
                                    </div>
                                </a>
                                <ul class="dropdown-menu dropdown-menu-end shadow-lg" aria-labelledby="topbarUserDropdown" style="">
                                    <li><a class="dropdown-item" href="#">Настройки</a></li>
                                    <li><a class="dropdown-item" href="{{route('users.logout')}}">Выход</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>

        <hr class="mb-4 mt-4">
        <div class="page-heading">



            <h3>@yield('page-heading')</h3>
            @if(session()->has('success'))
                <div class="alert alert-success alert-dismissible show fade mt-3">
                    {{session('success')}}
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            @endif

            @if(session()->has('error'))
                <div class="alert alert-danger alert-dismissible show fade mt-3">
                    {{session('error')}}
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>
            @endif
        </div>
        <div class="page-content">
            @yield('content')
        </div>

{{--        <footer>--}}
{{--            <div class="footer clearfix mb-0 text-muted">--}}
{{--                <div class="float-start">--}}
{{--                    <p>2021-{{ date("Y") }} &copy; MediaService</p>--}}
{{--                </div>--}}
{{--                <div class="float-end">--}}
{{--                    <p>Crafted with <span class="text-danger"><i class="bi bi-heart"></i></span> by <a--}}
{{--                            href="#">XWeb</a></p>--}}
{{--                </div>--}}
{{--            </div>--}}
{{--        </footer>--}}
    </div>
</div>

    <script src="{{asset('js/all.js')}}"></script>
    <script src="{{asset('js/datatables.js')}}"></script>
    <script src="{{asset('js/main.js')}}"></script>


</body>

</html>
