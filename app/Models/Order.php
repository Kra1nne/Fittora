<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $table = 'tailor_orders';

    protected $fillable = [
        'order_id',
        'date',
        'due_date',
        'garment_type',
        'garment_category',
        'material',
        'cost',
        'status',
        'chest',
        'arm_length',
        'shoulder',
        'armscye',
        'neck_size',
        'back_width',
        'waist',
        'front_shoulder_to_waist',
        'hip',
        'waist_to_knee',
        'crotch_depth',
        'body_rise',
        'waist_to_floor',
        'nape_to_waist',
        'bust',
    ];
}
