function submit_form()
{
    console.log("king")
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
function send_message(event)
{
    event.preventDefault();
    console.log("king")
    const name1=document.getElementById("name1").value;
    const message=document.getElementById("message").value;
    fetch(" https://api.emailjs.com/api/v1.0/email/send",{
        method:"POST",
        headers:{"Content-Type": "application/json"},
        body:JSON.stringify({
            service_id: 'service_9m2a7dm',
            template_id: 'template_yijx94j',
            user_id: 'tRdNI6D6maeacqz2l',
            template_params:{
                name:name1,
                message:message
            }
        })
    })
    .then(response=>{
        if(response.ok)
        {
            alert("message send successfully");
        }
        else{
            alert("message not send");
        }
    })
}
