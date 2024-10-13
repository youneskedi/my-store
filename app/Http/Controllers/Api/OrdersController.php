<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Http\JsonResponse;
use App\Models\Order;
use App\Models\ProductOrder;
use App\Models\Product;
use Illuminate\Support\Facades\DB;

class OrdersController extends Controller
{
    /**
     * Request: 
     * auth request
     * @param products list with qty
     */
    public function store(Request $request): JsonResponse
    {
        // user - date - total: server
        // products : request

        // Validation 1
        if (empty($request->products)) {
            return response()->json(
                [
                    'message' => 'products are not exist!',
                ],
                400,
            );
        }

        // adding order products to database
        $total = 0;
        $requestProducts = $request->products;

        // get products ids
        $requestProductsIds = [];
        foreach ($requestProducts as $rP) {
            $requestProductsIds[] = $rP['id'];
        }

        // get products from DB
        $dbProducts = Product::whereIn('id', $requestProductsIds)->get();

        // Validation 2
        // check if products count is same (qty, stock ...)        
        if (count($requestProducts) != count($dbProducts)) {
            return response()->json(
                [
                    'message' => 'Some of the products that you requested was not found!',
                ],
                400,
            );
        }

        foreach ($requestProducts as $rP) {
            foreach ($dbProducts as $dP) {
                if ($rP['id'] == $dP->id) {
                    $rP['object'] = $dP;
                }
            }
        }

        // create order
        $order = Order::create([
            'user_id' => $request->user()->id,
            'total' => 0,
            'date' => date('Y-m-d H:i:s'),
        ]);

        // todo: get all products from db at once
        foreach ($requestProducts as $rProduct) {

            // // check in database
            // $dbProduct = Product::where('id', $rProduct['id'])->first();

            // // validate product exist or not
            // if (empty($dbProduct)) {
            //     return response()->json(
            //         [
            //             'message' => "product " . $rProduct['id'] . " is not exists!",
            //         ],
            //         400,
            //     );
            // }
            // $total += $dbProduct->price * $rProduct['qty'];

            $total += $rP['object']->price * $rProduct['qty'];

            // add the product
            ProductOrder::create([
                'product' => $rProduct['id'],
                'qty' => $rProduct['qty'],
                'order' => $order->id,
            ]);
        }

        // set the total amount
        $order->total = $total;
        $order->save();

        return response()->json([
            'message' => 'Order has been created successfully',
            'order' => $order,
        ], 200);
    }

    /**
     * Get Orders for specific user
     * 
     */
    public function GetOrders(Request $request): JsonResponse
    {
        $products = ProductOrder::where('id', '>=', 0)
            ->with('product_object')->get();
        return response()->json([
            'message' => 'Orders has been retrived successfully',
            'order' => $products,
        ], 200);

        $orders = Order::where('user_id', $request->user()->id)
            ->with('products')->get();

        return response()->json([
            'message' => 'Orders has been retrived successfully',
            'order' => $orders,
        ], 200);
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
       
            $ordercount = DB::table('orders')->count();
            return response()->json([
                'message' => 'user has been retreived successfully',
                'data' => $ordercount,
            ], 200);
            
    }
    public function Getorder(Request $request): JsonResponse
    {
        $order = Order::get();
        return response()->json([
            'message' => 'order has been retreived successfully',
            'data' => $order,
        ], 200);
    
    }
    /**
     * Display the specified resource.
     */
    public function show(Request $request ,$id)
    {
        $orders= Order::find($id);
       
        return response()->json([
            'message' => 'products has been retreived successfully',
            'data' => $orders,
        ], 200);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request,$id)
    {
        $order1= Order::find($id);
       
        $order1->user_id=$request->input('user_id');
        $order1->total=$request->input('total');
        // $ordert->image=$request->input('image');
        
        $order1->update();
    return response()->json([
        'state'=>200,
        'message'=>"order update "
    ]); 
    }
}
