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
        $email1=$data["email"];
        $query="update $role set password='$password' where user_name='$user_name' and email='$email1'";
        $result=mysqli_query($con,$query);
        if($result)
        {
            $status="password changed";
        }
        else
        {
            $status="invalid information";
        }
        echo json_encode(["response"=>"$status"]);
        
    }
?>