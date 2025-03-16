<?php
    $con=mysqli_connect("localhost","root","");
    $db=mysqli_query($con,"create database nexus");
    if($db)
    {
        echo "database created <br>";
    }
    else{
        echo "database not created <br>";
    }

    $con=mysqli_connect("localhost","root","","nexus");

    $query="create table event_user(role varchar(20),name varchar(20),user_name varchar(20),email varchar(50),password varchar(20))";
    $event_user=mysqli_query($con,$query);
    if($event_user)
    {
        echo "event user table created <br>";
    }
    else{
        echo "event user table not created <br>";
    }

    $query="create table placement_user(role varchar(20),name varchar(20),user_name varchar(20),email varchar(50),password varchar(20))";
    $placement_user=mysqli_query($con,$query);
    if($placement_user)
    {
        echo "event user table created <br>";
    }
    else{
        echo "event user table not created <br>";
    }

    $query="create table admin(user_name varchar(20),password varchar(20))";
    $result=mysqli_query($con,$query);
    if($result)
    {
        echo "admin table created <br>";
    }
    else
    {
        echo "admin table not created <br>";
    }

    $query="insert into admin values('Nexus','2005')";
    $result=mysqli_query($con,$query);
    if($result)
    {
        echo "admin created <br>";
    }
    else
    {
        echo "admin not created <br>";
    }

    $query="create table event(title varchar(20),date varchar(10),time varchar(10),venue varchar(30),photo varchar(20),description varchar(200),reg_link varchar(100))";
    $result=mysqli_query($con,$query);
    if($result)
    {
        echo "event table created <br>";
    }
    else
    {
        echo "event table not created <br>";
    }

    $query="create table placement(title varchar(20),date varchar(10),time varchar(10),venue varchar(30),photo varchar(20),description varchar(200),reg_link varchar(100))";
    $result=mysqli_query($con,$query);
    if($result)
    {
        echo "placement table created <br>";
    }
    else
    {
        echo "placement table not created <br>";
    }
    mysqli_close($con);
?>