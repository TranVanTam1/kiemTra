<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use App\Models\PrType;
class TFood extends Model
{
    use HasFactory;
    protected $table='t_food';
    public function prType(): BelongsTo
    {
        return $this->belongsTo(PrType::class,'pr_type_id','id');
    }
}
