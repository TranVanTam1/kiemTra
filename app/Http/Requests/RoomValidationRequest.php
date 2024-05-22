<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class RoomValidationRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            //
            
            'pr_name' => 'required|string|max:255',
            'pr_price' => 'required|numeric|min:0',
            'pr_price_new' => 'required|numeric|min:0',
            'pr_detail' => 'required|string',
            'pr_type_id' => 'required|exists:pr_types,id',
            'image' => 'nullable|mimes:jpeg,jpg,png,gif|max:10000'
        ];
    }
    public function messages()
    {
        return [
            'pr_name.required' => 'Tên sản phẩm là bắt buộc.',
            'pr_name.string' => 'Tên sản phẩm phải là chuỗi.',
            'pr_name.max' => 'Tên sản phẩm không được vượt quá 255 ký tự.',
            'pr_price.required' => 'Giá cũ là bắt buộc.',
            'pr_price.numeric' => 'Giá cũ phải là số.',
            'pr_price.min' => 'Giá cũ phải lớn hơn hoặc bằng 0.',
            'pr_price_new.required' => 'Giá mới là bắt buộc.',
            'pr_price_new.numeric' => 'Giá mới phải là số.',
            'pr_price_new.min' => 'Giá mới phải lớn hơn hoặc bằng 0.',
            'pr_detail.required' => 'Mô tả là bắt buộc.',
            'pr_detail.string' => 'Mô tả phải là chuỗi.',
            'pr_type_id.required' => 'Loại sản phẩm là bắt buộc.',
            'pr_type_id.exists' => 'Loại sản phẩm phải tồn tại trong hệ thống.',
            'image.mimes' => 'Hình ảnh phải có định dạng jpeg, jpg, png hoặc gif.',
            'image.max' => 'Hình ảnh không được lớn hơn 10000 kilobytes.'
        ];
    }
}
