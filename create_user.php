<?php
    header("Content-Tpye: application/json");
    header("Access-Control-Allow-Origin:*");
    header("Access-Control-Allow-Headers:Content-Type");
    header("Access-Control-Allow-Methods:POST,OPTIONS,GET");
    include("db.php");
    $data=json_decode(file_get_contents("php://input"),true);
    $role=$data["role"];
    $name=$data["name"];
    $user_name=$data["user_name"];
    $email=$data["email"];
    $password=$data["password"];

    $query="insert into ".$role." (role,name,user_name,email,password) values ('$role','$name','$user_name','$email','$password')";
    $status=mysqli_query($con,$query);
    if($status)
    {
        $sta="success";
    }
    else{
        $sta="failed";
    }
    echo json_encode(["response"=>"$sta"]);
?>