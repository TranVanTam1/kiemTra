<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use App\Models\TFood;
class PrType extends Model
{
    use HasFactory;
    protected $table='pr_types';
    
    /**
     * Get the comments for the blog post.
     */
    public function tfoods(): HasMany
    {
        return $this->hasMany(TFood::class,'pr_type_id','id');
    }
}
