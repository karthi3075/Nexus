<?php
    header("Access-Control-Allow-Origin: *");
    header("Content-Tpye: application/json");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");
    include("db.php");
    if ($_SERVER['REQUEST_METHOD'] === 'POST') 
    {
        $data = json_decode(file_get_contents("php://input"), true);
        $user_name=$data["user_name"];
        $email=$data["email"];
        $role=$data["role"];
        $query="delete from ".$role." where user_name='$user_name' and email='$email'";
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