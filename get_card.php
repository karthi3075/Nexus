<?php
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");
    header("Content-Tpye: application/json");
    include("db.php");
    if ($_SERVER['REQUEST_METHOD'] === 'POST') 
    {
        $data = json_decode(file_get_contents("php://input"), true);
        $role=$data["role"];
        $title=$data["title"];
        $venue=$data["venue"];
        $query="select * from ".$role." where title='$title' and venue='$venue'";
        $result=mysqli_query($con,$query);
        if(mysqli_num_rows($result)>0)
        {
           $response=mysqli_fetch_assoc($result);
            echo json_encode($response);
        }
        else
        {
            echo json_encode(["response"=>"no data found"]);
        }
        
    }
?>