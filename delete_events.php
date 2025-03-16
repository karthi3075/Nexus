<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Tpye: application/json");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");
    include("db.php");
    if ($_SERVER['REQUEST_METHOD'] === 'POST') 
    {
        $data = json_decode(file_get_contents("php://input"), true);
        $title=$data["title"];
        $venue=$data["venue"];
        $date=$data["date"];
        $time=$data["time"];
        $role=$data["role"];
        $query="delete from ".$role." where title='$title' and venue='$venue' and date='$date' and time='$time'";
        $result=mysqli_query($con,$query);
        if($result)
        {
            $status="deleted";
        }
        else
        {
            $status="not deleted";
        }
        echo json_encode(["response"=>"$status"]);
        
    }
?>