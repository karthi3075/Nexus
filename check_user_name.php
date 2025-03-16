<?php
    header("Content-Tpye: application/json");
    header("Access-Control-Allow-Origin: *");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");
    include("db.php");
    if ($_SERVER['REQUEST_METHOD'] === 'POST') 
    {
        $data = json_decode(file_get_contents("php://input"), true);
        $user_name=$data["user_name"];
        $role=$data["role"];
        $query="select user_name  from ".$role." where user_name='$user_name'";
        $result=mysqli_query($con,$query);
        if($result)
        {
            if(mysqli_num_rows($result)>0)
            {
                $status="already_exist";
            }
            else
            {
                $status="user_name_available";
            }
            echo json_encode(["response"=>"$status"]);
             
// 9002285148
// @KarthI2005 
        }
    }
?>
