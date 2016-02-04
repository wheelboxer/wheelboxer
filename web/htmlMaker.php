<?php
//set to true to build QA
$buildQA = false;
//add pages need for build
$pages = array	(	
				"article.html",
                "index.html",
                "sub-section.html",
                "section.html",
                "home.html"
				);
$urls = array();
$i = 0;

foreach($pages as $page) {
	$url = "http://localhost:8184/LPL/FrontEnd/" . $page;
	print $url;
	$Data = get_data($url);
	$File = $page;
	file_write("dev/" . $File, $Data);
	print " = Loop = " . $i . " Dev done ... ";
	if ($buildQA) {
	    file_write("qa/" . $File, $Data);
	    print " QA done ... ";
	}
	print "<br>";
	print $Data;
	$i++; 
}

function get_data($url) {
	$ch = curl_init();
	$timeout = 5;
	curl_setopt($ch, CURLOPT_URL, $url);
	curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, $timeout);
	$data = curl_exec($ch);
	curl_close($ch);
	return $data;
}
function file_write($setPath, $Data){
    //$File = $page;
    $Handle = fopen($setPath, 'w');
    fwrite($Handle, $Data);
    fclose($Handle);
}
function recurse_copy($src,$dst) {
    $dir = opendir($src);
    @mkdir($dst);
    while(false !== ( $file = readdir($dir)) ) {
        if (( $file != '.' ) && ( $file != '..' )) {
            if ( is_dir($src . '/' . $file) ) {
                recurse_copy($src . '/' . $file,$dst . '/' . $file);
            }
            else {
                copy($src . '/' . $file,$dst . '/' . $file);
            }
        }
    }
    closedir($dir);
}
?>