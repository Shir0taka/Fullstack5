<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\User;
use Carbon\Carbon;

class UserController extends Controller
{
    public function reg_user(Request $request)
    {
        try {
            //Based on Model
            $user = new User;
            //User fields
            $user->name = $request->name;
            $user->email = $request->email;
            $user->password = bcrypt($request->password);
            $user->created_at = Carbon::now();
            $user->updated_at = Carbon::now();
            //Save the user
            $user->save();
            //Return the response
            return response()->json([
                'message' => 'User created successfully',
                'user' => $user,
                'status' => 'success',
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'User not created',
                'user' => $user,
                'status' => 'fail',
                'error' => $e->getMessage(),
            ]);
        }
    }

    public function auth_user(Request $request)
    {
        $user = User::where('email', $request->email)->first();
        if ($user && \Hash::check($request->password, $user->password)) {
            // Fields match
            return response()->json([
                'message' => 'User authenticated successfully',
                'user' => $user,
                'status' => 'success',
            ]);
        } else {
            // Fields don't match
            return response()->json([
                'message' => 'User not authenticated',
                'status' => 'fail',
            ]);
        }
    }
}
