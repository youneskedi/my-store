<?php

namespace App\Http\Middleware;
use Closure;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class IsAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    { 
        // !Auth::user()->is_admin == 1
        // $user=$request->user()->is_admin;
        // if ($user == 1)
        if (Auth::user())
         {
            return $next($request);
          
         }
        // if (auth()->check() ) {
    abort(403, 'You are not authorized to access this page.');
      
//        }
//        else
//      {
//        // Otherwise, abort the request with a 403 error
//        abort(403, 'You are not authorized to access this page.');
//    }

    }
}

