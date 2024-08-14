<?php

namespace App\Http\Controllers;

use App\Models\Diskusi;
use App\Models\komentar;
use Illuminate\Http\Request;

class DiskusiController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $diskusi = Diskusi::all();
        return json_decode($diskusi);
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
    public function show(Diskusi $diskusi, $id)
    {
        $diskusi = Diskusi::find($id);
        $komentar = komentar::where("id diskusi", "=", $id)->get();
        $data = [
            "diskusi"=>$diskusi,
            "komentar"=>$komentar
        ];
        return json_encode($data);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Diskusi $diskusi)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Diskusi $diskusi)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Diskusi $diskusi)
    {
        //
    }
}
