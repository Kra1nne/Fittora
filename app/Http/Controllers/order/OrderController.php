<?php

namespace App\Http\Controllers\order;

use App\Http\Controllers\Controller;
use App\Models\Order;

class OrderController extends Controller
{
    public function listOfOrders()
    {
        $orders = Order::all();
        
        return response()->json(['Error' => 0, 'Message' => $orders]);
    }
}
