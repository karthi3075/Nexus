<?php
    header("Access-Control-Allow-Origin: *");
    // header("Content-Tpye: application/json");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
    header("Access-Control-Allow-Headers: Content-Type");
    // include("db.php");
    if ($_SERVER['REQUEST_METHOD'] === 'POST') 
    {
        // $data = json_decode(file_get_contents("php://input"), true);
        // echo json_encode($_FILES["image"]);
        if(isset($_FILES['image']))
        {
            $target="uploads/";
            $filename=time().".".pathinfo($_FILES['image']['name'],PATHINFO_EXTENSION);
            if(!is_dir($target))
            {
                mkdir($target);
            }
            if(move_uploaded_file($_FILES['image']['tmp_name'],$target.$filename))
            {
                echo json_encode(["response"=>"success","filename"=>"$filename"]);
            }
            else{
                echo json_encode(["response"=>"failed"]);
            }

            
        }
        else{
            echo json_encode(["response"=>"image not uploaded"]);
        }
        
    }
?>