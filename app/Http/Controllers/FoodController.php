<?php

namespace App\Http\Controllers;
use App\Models\TFood;
use App\Models\PrType;
use App\Http\Requests\RoomValidationRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
class FoodController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function mf()
    {
        return $this->belongsTo(PrType::class, 'pr_type_id');
    }
    public function index(Request $request)
{
    $input = $request->input('input');
    $query = TFood::query();
    
    if ($input) {
        $tfoods = TFood::where('pr_name', 'LIKE', "%$input%")
            ->orWhere('pr_price', 'LIKE', "%$input%")
            ->orWhere('pr_price_new', 'LIKE', "%$input%")
            ->orWhereHas('prType', function($query) use ($input) {
                $query->where('pr_type', 'LIKE', "%$input%");
            })
            ->orderBy('created_at', 'desc')
            ->paginate(15);
    } else {
        $tfoods = TFood::orderBy('created_at', 'desc')->paginate(15);
    }
   
    return view('admin.list', compact('tfoods'));
}

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        $prTypes = PrType::all();
        return view('admin.create',compact('prTypes'));
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(RoomValidationRequest $request)
{
    // Validate form data
    $validatedData = $request->validated();

    // Không cần phải tạo Validator thủ công, Laravel đã thực hiện điều này cho bạn
    if ($request->hasFile('image')) {
        $file = $request->file('image');
        $name = time() . '_' . $file->getClientOriginalName();
        $destinationPath = public_path('images');
        $file->move($destinationPath, $name);
    } else {
        // Nếu không có tệp được tải lên, có thể xử lý theo ý của bạn, ví dụ:
        $name = null; // hoặc một giá trị mặc định khác
    }

    // Lưu dữ liệu vào CSDL
    $tfood = new TFood();
    $tfood->pr_name = $validatedData['pr_name'];
    $tfood->pr_price = $validatedData['pr_price'];
    $tfood->pr_price_new = $validatedData['pr_price_new'];
    $tfood->pr_detail = $validatedData['pr_detail'];
    $tfood->pr_type_id = $validatedData['pr_type_id'];
    $tfood->image = $name;
    $tfood->save();

    return redirect('tfoods')->with('success', 'Thêm sản phẩm thành công');
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


    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
