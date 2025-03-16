<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");
    header("Content-Tpye: application/json");
    include("db.php");
    if ($_SERVER['REQUEST_METHOD'] === 'POST') 
    {
        $data = json_decode(file_get_contents("php://input"), true);
        $title=$data["title"];
        $date=$data["date"];
        $time=$data["time"];
        $venue=$data["venue"];
        $photo=$data["photo"];
        $description=$data["description"];
        $reg_link=$data["reg_link"];
        $type=$data["type"];
        $query="insert into ".$type." (title,date,time,venue,photo,description,reg_link) values ('$title','$date','$time','$venue','$photo','$description','$reg_link')";
        // echo json_encode(["res"=>"ok"]);
        $result=mysqli_query($con,$query);
        if($result)
        {
            $status="post inserted";
        }
        else
        {
            $status="post not inserted";
        }
        echo json_encode(["response"=>"$status"]);
        
    }
?>