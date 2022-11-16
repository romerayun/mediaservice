<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreService extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required',
            'price' => 'required|numeric',
            'category_id' => 'required|integer',
            'group_id' => 'required|integer',
        ];
    }

    public function messages()
    {
        return [
            'name|required' => 'Поле наименование не может быть путсым',
            'price|required' => 'Поле цена не может быть путсым',
            'price|numeric' => 'Поле цена должно быть числом',
            'category_id|required' => 'Поле категория не может быть путсым',
            'category_id|integer' => 'Поле категория не может быть путсым',
            'group_id|required' => 'Поле отдел не может быть путсым',
            'group_id|integer' => 'Поле отдел не может быть путсым',

        ];
    }
}
