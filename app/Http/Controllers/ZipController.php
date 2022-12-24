<?php

namespace App\Http\Controllers;

use App\Models\ClaimFile;
use App\Models\Goal;
use App\Models\GoalFile;
use Illuminate\Http\Request;
use Zip;

class ZipController extends Controller
{
    public function downloadFiles(Request $request)
    {
        $zipfile = Zip::create('files.zip');

        $files = GoalFile::where('goal_id', $request->id)->get();

        foreach ($files as $file) {
            $zipfile->add(storage_path('app/public/'.$file->file));
        }

        $zipfile->saveTo(storage_path('app/public/zips/'));
        return 'storage/zips/files.zip';
    }
}
