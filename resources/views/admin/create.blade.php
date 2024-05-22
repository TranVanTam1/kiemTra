<!doctype html>
<html lang="en">
  <head>
    <title>Title</title>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
  </head>
  <body>
    <div class="container">
        <h2 class="my-4">Tạo mới Sản phẩm</h2>

        
        <form action="{{ route('tfoods.store') }}" method="POST" enctype="multipart/form-data">
          @csrf
          <div class="form-group">
              <label for="pr_name">Tên sản phẩm:</label>
              <input type="text" class="form-control @error('pr_name') is-invalid @enderror" id="pr_name" name="pr_name" value="{{ old('pr_name') }}">
              @error('pr_name')
              <div class="alert alert-danger">{{ $message }}</div>
              @enderror
          </div>
          <div class="form-group">
              <label for="pr_price">Giá cũ:</label>
              <input type="text" class="form-control @error('pr_price') is-invalid @enderror" id="pr_price" name="pr_price" value="{{ old('pr_price') }}">
              @error('pr_price')
              <div class="alert alert-danger">{{ $message }}</div>
              @enderror
          </div>
          <div class="form-group">
              <label for="pr_price_new">Giá mới:</label>
              <input type="text" class="form-control @error('pr_price_new') is-invalid @enderror" id="pr_price_new" name="pr_price_new" value="{{ old('pr_price_new') }}">
              @error('pr_price_new')
              <div class="alert alert-danger">{{ $message }}</div>
              @enderror
          </div>
          <div class="form-group">
              <label for="pr_detail">Mô tả:</label>
              <input type="text" class="form-control @error('pr_detail') is-invalid @enderror" id="pr_detail" name="pr_detail" value="{{ old('pr_detail') }}">
              @error('pr_detail')
              <div class="alert alert-danger">{{ $message }}</div>
              @enderror
          </div>
          <div class="form-group">
              <label for="image">Image:</label>
              <input type="file" class="form-control @error('image') is-invalid @enderror" id="image" name="image">
              @error('image')
              <div class="alert alert-danger">{{ $message }}</div>
              @enderror
          </div>
          <div class="form-group">
              <label for="pr_type_id">Loại Sản Phẩm</label>
              <select class="form-control @error('pr_type_id') is-invalid @enderror" name="pr_type_id" id="pr_type_id">
                  @foreach ($prTypes as $prType)
                  <option value="{{ $prType->id }}">{{ $prType->pr_type }}</option>
                  @endforeach
              </select>
              @error('pr_type_id')
              <div class="alert alert-danger">{{ $message }}</div>
              @enderror
          </div>
          <button type="submit" class="btn btn-primary">Thêm</button>
          <a href="{{ route('tfoods.index') }}" class="btn btn-primary">Quay lại danh sách</a>
      </form>
      
        
    </div>
    
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
  </body>
</html>