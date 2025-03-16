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
        $query="select * from ".$role;
        $result=mysqli_query($con,$query);
        
        if(mysqli_num_rows($result)>0)
        {
            $arr=[];
            $i=0;
            while($response=mysqli_fetch_assoc($result))
            {
                $arr[$i]=$response;
                $i++;
            }
            echo json_encode($arr);
        }
        else
        {
            echo json_encode(["response"=>"no data found"]);
        }
        
    }
?>