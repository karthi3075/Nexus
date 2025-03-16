function admin_form()
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

function placement()
{
    let content=document.getElementById("content");
    fetch("http://localhost/Nexus/get_post.php",{
        method:"POST",
        headers:{"Content-Type": "application/json"},
        body:JSON.stringify({
            role:"placement"
        })
    })
    .then(response=> response.json())
    .then(data=>{
        console.log(data)
        if(data.response=="no data found")
            {
                content.innerHTML=`
                <div style="width:100%; height:80vh" class="d-flex justify-content-center align-items-center">
                    <p>data not found</p>
                </div>`;
            }
        let table_value="";
        table_value=`<h2 class="my-3">Placements</h2>
                    <table class="table table-striped table-hover table-bordered table-responsive table-primary">
                        <tr class="">
                            <th>Title</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Venue</th>
                            <th>Link</th>
                            <th>Image</th>
                            <th>Description</th>
                            <th>delete</th>
                        </tr>`;
                        data.map((valu)=>{
                            table_value+=`<tr>
                            <td>${valu.title}</td>
                            <td>${valu.date}</td>
                            <td>${valu.time}</td>
                            <td>${valu.venue}</td>
                            <td>${valu.reg_link}</td>
                            <td>${valu.photo}</td>
                            <td>${valu.description}</td>
                            <td>
                                <button class="btn btn-danger" onclick="delete_events('${valu.title}','${valu.venue}','${valu.date}','${valu.time}','placement')">delete</button>
                            </td>
                        </tr>`;
                    });
                        table_value+=`</table>`;
                        content.innerHTML=table_value;
                        
    })
}

function post()
{
    let content=document.getElementById("content");
    content.innerHTML=`<h2 class="ms-3 mt-3">Create Post</h2>
    <form action="" class="need-validation" novalidate>
                            <div class="row p-3">
                                <div class="col-6 mt-3">
                                    <label class="form-label">role</label>
                                    <select name="" id="role" class="form-select" required>
                                        <option value="">--select--</option>
                                        <option value="event">event</option>
                                        <option value="placement">placement</option>
                                    </select>
                                </div>
                                <div class="col-6 mt-3">
                                    <label class="form-label">Title</label>
                                    <input type="text" id="title" class="form-control" required>
                                </div>
                                <div class="col-6 mt-3">
                                    <label class="form-label">Date</label>
                                    <input type="date" id="date" class="form-control" required>
                                </div>
                                <div class="col-6 mt-3">
                                    <label class="form-label">Time</label>
                                    <input type="text" id="time" class="form-control" required>
                                </div>
                                <div class="col-6 mt-3">
                                    <label class="form-label">Venue</label>
                                    <input type="text" id="venue" class="form-control" required>
                                </div>
                                <div class="col-6 mt-3">
                                    <label class="form-label">Link</label>
                                    <input type="text" id="reg_link" class="form-control" required>
                                </div>
                                <div class="col-6 mt-3">
                                    <label class="form-label">Image</label>
                                    <input type="file" id="photo" class="form-control" required>
                                </div>
                                <div class="col-6 mt-3">
                                    <label class="form-label">Description</label>
                                    <textarea rows="4" name="" id="description" class="form-control" required></textarea>
                                </div>
                               
                                <div class="col-6 mt-3">
                                    <input type="submit" value="post" onclick="admin_form();create_post(event);" class="btn btn-success btn-block">
                                    <input type="reset" value="Reset" class="btn btn-info btn-block">
                                </div>
                            </div>
                        </div>
                    </form>`;
}

function get_event()
{
    let content=document.getElementById("content");
    fetch("http://localhost/Nexus/get_post.php",{
        method:"POST",
        headers:{"Content-Type": "application/json"},
        body:JSON.stringify({
            role:"event"
        })
    })
    .then(response=> response.json())
    .then(data=>{
        console.log(data)
        if(data.response=="no data found")
            {
                content.innerHTML=`
                <div style="width:100%; height:80vh" class="d-flex justify-content-center align-items-center">
                    <p>data not found</p>
                </div>`;
            }
        let table_value="";
        table_value=`<h2 class="my-3">Events</h2>
                    <table class="table table-striped table-hover table-bordered table-responsive table-primary">
                        <tr class="">
                            <th>Title</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Venue</th>
                            <th>Link</th>
                            <th>Image</th>
                            <th>Description</th>
                            <th>delete</th>
                        </tr>`;
                        data.map((valu)=>{
                            table_value+=`<tr>
                            <td>${valu.title}</td>
                            <td>${valu.date}</td>
                            <td>${valu.time}</td>
                            <td>${valu.venue}</td>
                            <td>${valu.reg_link}</td>
                            <td>${valu.photo}</td>
                            <td>${valu.description}</td>
                            <td><button class="btn btn-danger" onclick="delete_events('${valu.title}','${valu.venue}','${valu.date}','${valu.time}','event')">delete</button></td>
                        </tr>`;
                    });
                        table_value+=`</table>`;
                        content.innerHTML=table_value;
                        
    })
}

// function event_user()
// {
//     let content=document.getElementById("content");
//     fetch("http://localhost/Nexus/get_post.php",{
//         method:"POST",
//         headers:{"Content-Type": "application/json"},
//         body:JSON.stringify({
//             role:"event_user"
//         })
//     })
//     .then(response=> response.json())
//     .then(data=>{
//         console.log(data)
//         if(data.response=="no data found")
//         {
//             content.innerHTML=`
//             <div style="width:100%; height:80vh" class="d-flex justify-content-center align-items-center">
//                 <p>data not found</p>
//             </div>`;
//         }
//         let table_value="";
//         table_value=`<h2 class="my-3">Event Users</h2>
//                     <table class="table table-striped table-hover table-bordered table-responsive table-primary">
//                         <tr class="">
//                             <th>Name</th>
//                             <th>User Name</th>
//                             <th>Email</th>
//                             <th>Delete</th>
//                         </tr>`;
//                         data.map((valu)=>{
//                             table_value+=`<tr>
//                             <td>${valu.name}</td>
//                             <td>${valu.user_name}</td>
//                             <td>${valu.email}</td>
//                             <td><button class="btn btn-danger" onclick="delete_user('${valu.user_name}','${valu.email}','event_user')">delete</button></td>
//                         </tr>`;
//                     });
//                         table_value+=`</table>`;
//                         content.innerHTML=table_value;
                        
                        
//     })
// }
// function delete_user(user_name,email,role)
// {
//     fetch("http://localhost/Nexus/delete_user.php",{
//         method:"POST",
//         headers:{"Content-Type": "application/json"},
//         body:JSON.stringify({
//             user_name:user_name,
//             email:email,
//             role:role
//         })
//     })
//     .then(response=> response.json())
//     .then(data=>{
//         if(data.response=="deleted")
//         {
//             const message=document.getElementById("message");
//             message.innerHTML=` 
//             <div class="alert alert-success alert-dismissible fade show msg" >
//                 ${data.response}<button class="btn-close" data-bs-dismiss="alert"></button>
//             </div>`;
//         }
       
//     })
//     if(role=="event_user")
//     {
//         event_user();
//     }
//     else if(role=="placement_user")
//     {
//         placement_user();
//     }
// }
function delete_events(title,venue,date,time,role)
{
    fetch("http://localhost/Nexus/delete_events.php",{
        method:"POST",
        headers:{"Content-Type": "application/json"},
        body:JSON.stringify({
            title:title,
            date:date,
            time:time,
            venue:venue,
            role:role
        })
    })
    .then(response=> response.json())
    .then(data=>{
        if(data.response=="deleted")
        {
            const message=document.getElementById("message");
                    message.innerHTML=` 
                    <div class="alert alert-success alert-dismissible fade show msg" >
                        ${data.response}<button class="btn-close" data-bs-dismiss="alert"></button>
                    </div>`;
        }
       
    })
    if(role=="event")
    {
        get_event();
    }
    else if(role=="placement")
    {
        placement();
    }
}
// function placement_user()
// {
//     let content=document.getElementById("content");
//     fetch("http://localhost/Nexus/get_post.php",{
//         method:"POST",
//         headers:{"Content-Type": "application/json"},
//         body:JSON.stringify({
//             role:"placement_user"
//         })
//     })
//     .then(response=> response.json())
//     .then(data=>{
//         console.log(data)
//         if(data.response=="no data found")
//             {
//                 content.innerHTML=`
//                 <div style="width:100%; height:80vh" class="d-flex justify-content-center align-items-center">
//                     <p>data not found</p>
//                 </div>`;
//             }
//         let table_value="";
//         table_value=`<h2 class="my-3">Placement Users</h2>
//                     <table class="table table-striped table-hover table-bordered table-responsive table-primary">
//                         <tr class="">
//                             <th>Name</th>
//                             <th>User Name</th>
//                             <th>Email</th>
//                             <th>Delete</th>
//                         </tr>`;
//                         data.map((valu)=>{
//                             table_value+=`<tr>
//                             <td>${valu.name}</td>
//                             <td>${valu.user_name}</td>
//                             <td>${valu.email}</td>
//                             <td><button class="btn btn-danger" onclick="delete_user('${valu.user_name}','${valu.email}','placement_user')">delete</button></td>
//                         </tr>`;
//                     });
//                         table_value+=`</table>`;
//                         content.innerHTML=table_value;
                        
//     })
// }

function create_post(event)
{
    event.preventDefault();
    let title=document.getElementById("title").value;
    let date=document.getElementById("date").value;
    let time=document.getElementById("time").value;
    let venue=document.getElementById("venue").value;
    let photo=document.getElementById("photo").files[0];
    let description=document.getElementById("description").value;
    let reg_link=document.getElementById("reg_link").value;
    let type=document.getElementById("role").value;
    const formData = new FormData();
    formData.append('image',photo);
    if(title&&date&&time&&venue&&photo&&description&&reg_link&&type)
    {
        fetch("http://localhost/Nexus/post_image.php",{
            method:"POST",  
            body:formData
        })
        .then(response=>response.json())
        .then(data=>{
            if(data.response=="success")
            {
                fetch("http://localhost/Nexus/new_post.php",{
                    method:"POST",
                    headers:{"Content-Type": "application/json"},
                    body:JSON.stringify({
                        title:title,
                        date:date,
                        time:time,
                        venue:venue,
                        photo:data.filename,
                        description:description,
                        reg_link:reg_link,
                        type:type
                    })
                })
                .then(response=> response.json())
                .then(data=>{
                    const message=document.getElementById("message");
                    message.innerHTML=` 
                    <div class="alert alert-success alert-dismissible fade show msg" >
                        ${data.response}<button class="btn-close" data-bs-dismiss="alert"></button>
                    </div>`;
                })
            }
            else{
                 console.log("image not found");
            }       
            
        })
        
        
    }
    else{
        console.log("empty")
    }
}

