<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ProductsController extends Controller
{

    /**
     * @param name
     * @param category
     * 
     * @return Array<Product>
     * 
     */
    public function countproudect(){
        $proudctcount = DB::table('products')->count();
        return response()->json([
            'message' => 'user has been retreived successfully',
            'data' => $proudctcount,
        ], 200);
        }
   public function store(Request $request){
    $proudct=new Product;
    
    $proudct->name=$request->input('name');
    $proudct->description=$request->input('description');
    $proudct->image=$request->input('image');
    $proudct->price=$request->input('price');
    $proudct->category=$request->input('category');
    

$proudct->save();
return response()->json([
    'state'=>200,
    'message'=>"proudct add"
]);   
}  //delete
      public function Productdelete($id){
    $product= Product::find($id); 
         $product->delete();
           return response()->json([
    'state'=>200,
    'message'=>"product deleted"
]); }
//proudct update
    public function ProductUpdate(Request $request ,$id): JsonResponse{
        $product= Product::find($id);
       
        $product->name=$request->input('name');
        $product->description=$request->input('description');
        $product->image=$request->input('image');
        $product->price=$request->input('price');
        
        $product->update();
    return response()->json([
        'state'=>200,
        'message'=>"proudct update "
    ]); 
    }
    public function Productshow(Request $request ,$id): JsonResponse{
        $productshow= Product::find($id);
        return response()->json([
            'message' => 'products has been retreived successfully',
            'data' => $productshow,
        ], 200);
    }

    public function GetProducts(Request $request): JsonResponse
    {
        // init request parameters
        $name = $request->name;
        $category = $request->category;

        $proudcts = Product::get();

        // filter by name
        if (!empty($name)) {
            $proudcts = $proudcts->where('name', $name);
        }

        // filter by category
        if (!empty($category)) {
            $proudcts = $proudcts->where('category', $category);
        }

        return response()->json([
            'message' => 'products has been retreived successfully',
            'data' => $proudcts,
        ], 200);
    }
   
  

    /**
     * @return List of Category
     * 
     */
    public function  GetCategories(): JsonResponse
    {
        $categories = Category::all();

        return response()->json([
            'message' => 'Categroies has been retreived successfully',
            'data' => $categories,
        ], 200);
    }
    //categories add
    public function Categoriesstore(Request $request){
        $Categories=new Category;
        
        $Categories->name=$request->input('name');
        $Categories->desc=$request->input('desc');
        $Categories->image=$request->input('image');
      
    $Categories->save();
    return response()->json([
        'state'=>200,
        'message'=>"Categories add"
    ]); 
    }
    //delete categories
    public function Categoriesdelete($id){
        $Categories= Category::find($id);
       
      
    $Categories->delete();
    return response()->json([
        'state'=>200,
        'message'=>"Categories deleted"
    ]); 
    }
}
