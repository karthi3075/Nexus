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
        $password=$data["password"];
        $role=$data["role"];
        $query="select * from ".$role." where user_name='$user_name' and password='$password'";
        // echo json_encode(["res"=>"$query"]);
        $result=mysqli_query($con,$query);
        if(mysqli_num_rows($result)>0)
        {
            $status="user_login";
        }
        else
        {
            $status="invalid";
        }
        echo json_encode(["response"=>"$status","user_name"=>"$user_name"]);
        
    }
?>