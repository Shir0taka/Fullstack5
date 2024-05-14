<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Book;
use Carbon\Carbon;

class BookController extends Controller
{
    //Add a book
    public function store_book(Request $request)
    {
        try {
            //Based on Model
            $book = new Book;
            //Book fields
            $book->name = $request->name;
            $book->author = $request->author;
            $book->pages = $request->pages;
            $book->price = $request->price;
            $book->created_at = Carbon::now();
            $book->updated_at = Carbon::now();
            //Save the book
            $book->save();
            //Return the response
            return response()->json([
                'message' => 'Book created successfully',
                'book' => $book,
                'status' => 'success',
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Book not created',
                'book' => $book,
                'status' => 'fail',
                'error' => $e->getMessage(),
            ]);
        }
    }

    public function view_book(Request $request)
    {
        try {
            $filters = $request->all();

            $book = Book::where('author', $filters['author'])
            ->orderBy('name')
            ->get();

            sendBooks('books.json', 
                json_encode($book)
            );

            return response()->json([
                'message' => 'Books found',
                'book' => $book,
                'status' => 'success',
            ]);
        } catch (\Exception $e) {
            return response()->json([
                'message' => 'Books not found',
                'book' => $book,
                'status' => 'fail',
                'error' => $e->getMessage(),
            ]);
        }
    }

    public function update(Request $request, $id)
    {
        $book = \App\Models\Book::find($id);
        $book->name = $request->name;
        $book->author = $request->author;
        $book->pages = $request->pages;
        $book->price = $request->price;
        $book->save();

        return response()->json([
            'book' => $book
        ]);
    }

    public function destroy($id)
    {
        $book = \App\Models\Book::find($id);
        $book->delete();

        return response()->json([
            'message' => 'Book deleted'
        ]);
    }
}
