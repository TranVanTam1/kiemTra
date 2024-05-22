<!doctype html>
<html lang="en">
<head>
    <title>Title</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
</head>
<body>
<div class="container mt-5">
    <h1 class="mb-4" style="color: red; text-align: center;">Danh sách các Sản phẩm</h1>
    <form action="{{ route('tfoods.index') }}" method="GET" class="form-inline mb-3">
        <div class="form-group">
            <input type="text" class="form-control" name="input" placeholder="Nhập từ khóa tìm kiếm">
        </div>
        <button type="submit" class="btn btn-primary ml-2">Tìm kiếm</button>
    </form>
    <a href="{{ route('tfoods.create') }}" class="btn btn-primary mb-3">Tạo mới sản phẩm</a>
    @if (session('success'))
        <div class="alert alert-success">
            {{ session('success') }}
        </div>
    @endif
    <table class="table table-striped table-responsive">
        <thead>
        <tr>
            <th class="text-center">STT</th>
            <th class="text-center">ID</th>
            <th class="text-center">Hình ảnh</th>
            <th class="text-center">Tên sản phẩm</th>
            <th class="text-center">Giá cũ</th>
            <th class="text-center">Giá mới</th>
            <th class="text-center">Mô tả</th>
            <th class="text-center">Loại</th>
            <th class="text-center">Action</th>
        </tr>
        </thead>
        <tbody>
        @isset($tfoods)
            @foreach($tfoods as $tfood)
                <tr class="py-3">
                    <td class="text-center align-middle">{{ $loop->iteration }}</td>
                    <td class="text-center align-middle">{{ $tfood->id }}</td>
                    <td class="text-center align-middle">
                        <img src="{{ asset('images/' . $tfood->image) }}" alt="{{ $tfood->pr_name }}" style="width: 100px; height: 70px;">
                    </td>
                    <td class="text-center align-middle">{{ $tfood->pr_name }}</td>
                    <td class="text-center align-middle">{{ $tfood->pr_price }}</td>
                    <td class="text-center align-middle">{{ $tfood->pr_price_new }}</td>
                    <td class="text-center align-middle text-wrap" style="max-width: 150px;">
                        {{ \Illuminate\Support\Str::limit($tfood->pr_detail, 30, '...') }}
                    </td>
                    <td class="text-center align-middle">{{ $tfood->prType->pr_type }}</td>
                    <td class="text-center align-middle">
                        <a href="{{ route('tfoods.show', ['tfood' => $tfood->id]) }}" class="btn btn-info btn-sm">Detail</a>
                        <a href="{{ route('tfoods.edit', ['tfood' => $tfood->id]) }}" class="btn btn-primary btn-sm">Edit</a>
                        <form class="d-inline" action="{{ route('tfoods.destroy', ['tfood' => $tfood->id]) }}" method="POST" id="delete-form">
                            @csrf
                            @method('DELETE')
                            <button type="submit" class="btn btn-danger btn-sm" onclick="return confirm('Bạn có chắc chắn muốn xóa SP này không?')">Delete</button>
                        </form>
                    </td>
                </tr>
            @endforeach
        @endisset
        </tbody>
    </table>
    {{ $tfoods->links() }}
</div>

<!-- Optional JavaScript -->
<!-- jQuery first, then Popper.js, then Bootstrap JS -->
<script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
<script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
</body>
</html>
