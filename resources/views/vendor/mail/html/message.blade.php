@component('mail::layout')
{{-- Header --}}

![Bla bla](https://www.chtotib.ru/images/logo.png)
@slot('header')

@component('mail::header', ['url' => config('app.url')])
{{--{{ config('app.name') }}--}}

@endcomponent
@endslot

{{-- Body --}}
{{ $slot }}

{{-- Subcopy --}}
@isset($subcopy)
@slot('subcopy')
@component('mail::subcopy')
{{ $subcopy }}
@endcomponent
@endslot
@endisset

{{-- Footer --}}
@slot('footer')
@component('mail::footer')
© {{ date('Y') }} {{ config('app.name') }}. @lang('Все права зарегистрированы.')
@endcomponent
@endslot
@endcomponent
