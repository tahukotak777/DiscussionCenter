<?php

namespace App\Http\Controllers;

use App\Models\komentar;
use Illuminate\Http\Request;

class KomentarController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $komentar = Komentar::all();
        return json_decode($komentar);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $komentar = Komentar::where("id diskusi", "=", $id)->get();
        return json_decode($komentar);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(komentar $komentar)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, komentar $komentar)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(komentar $komentar)
    {
        //
    }
}
