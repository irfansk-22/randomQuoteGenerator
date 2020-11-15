<?php

    $json_data = file_get_contents("quotes.json");
    $assoc_arr = json_decode($json_data, true);

    $random_num = mt_rand(0, 101);

    $temp_arr = array();
    $temp_arr["quote"] = $assoc_arr["quotes"][$random_num]["quote"];
    $temp_arr["author"] = $assoc_arr["quotes"][$random_num]["author"];
    

    $export_quote_data = json_encode($temp_arr);

    echo $export_quote_data;
?>