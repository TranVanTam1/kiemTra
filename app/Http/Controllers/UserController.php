<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\TFood;
use App\Models\PrType;
class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $pr_types = PrType::all();
        
        // Lấy danh sách các sản phẩm có cùng loại sản phẩm
        $tfoods = [];
        foreach ($pr_types as $pr_type) {
            $tfoods[$pr_type->id] = TFood::where('pr_type_id', $pr_type->id)->get();
        }
        
        return view('user.index', compact('tfoods', 'pr_types'));
    }
    

      /**
     * Display the specified resource.
     */
    public function show( $id)
    {
        //
        $tfoods = TFood::all();
        $tfood = TFood::find($id);
        return view('user.detail',compact('tfood', 'tfoods'));
    }
    public function search(Request $request)
    {
        $query = $request->input('s');

        // Thực hiện tìm kiếm trong cơ sở dữ liệu
        $searchResults = TFood::where('pr_name', 'like', '%' . $query . '%')
                                ->orWhere('pr_price_new', 'like', '%' . $query . '%')
                                ->orWhere('pr_price', 'like', '%' . $query . '%')
                                ->get();

        // Truyền kết quả tìm kiếm đến view
        return view('user.search_results', ['searchResults' => $searchResults, 'query' => $query]);
    }
   
}
