function submit_form()
{
    const form1=document.querySelectorAll(".need-validation");
    Array.from(form1).forEach((form)=>{
        form.addEventListener("click",event=>{
            if(!form.checkValidity())
            {
                event.stopPropagation();
                event.preventDefault();
            }
            form.classList.add("was-validated");
        })
    })
   
}

function login(event)
{
    event.preventDefault();
    // let role=document.getElementById("role").value;
    let role="admin";
    let user_name=document.getElementById("user_name").value;
    let password=document.getElementById("password").value;
    if(user_name&&password&&role)
    {
        fetch("http://localhost/Nexus/login.php",{
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body:JSON.stringify({
                user_name:user_name,
                role:role,
                password:password
            })
        })
        .then(response=> response.json())
        .then(data=>{
            let res=data.response;
            let user_name=data.user_name;
            if(res=="user_login")
            {
                window.sessionStorage.setItem("name",user_name);
                // if(role=="event_user")
                // {
                //     window.location.href="/event/event.html";
                // }
                // else if(role=="placement_user")
                // {
                //     window.location.href="/placement/placement.html";
                // }
                // else if(role=="admin")
                // {
                    window.location.href="./admin.html";
                // }
            }
            else{
                alert("invalid username or password");
            }
        })
    }
    else{
        console.log("empty")
    }
}

