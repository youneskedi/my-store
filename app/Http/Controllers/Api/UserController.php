<?php
namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\DB;
use App\Models\User;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class UserController extends Controller{
    public function AddUser(Request $request): JsonResponse{
        $user = new User;
        $user->name=$request->input('name');
        $user->email=$request->input('email');
        $user->password=$request->input('password');
        $user->is_admin=$request->input('is_admin');
    $user->save();
    
    return response()->json([
        'message' => 'user has been retreived successfully',
        'data' => $user,
    ], 200);  }
    public function GetUser(Request $request): JsonResponse
    {
        $user = User::get();
        return response()->json([
            'message' => 'user has been retreived successfully',
            'data' => $user,
        ], 200);
    
    }
   

    public function Userdelete($id){
        $User= User::find($id);
       
      
    $User->delete();
    return response()->json([
        'state'=>200,
        'message'=>"User deleted"
    ]); 
    }
    public function countuser(){
$users = DB::table('users')->count();
return response()->json([
    'message' => 'user has been retreived successfully',
    'data' => $users,
], 200);
}
}
