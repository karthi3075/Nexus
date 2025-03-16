function logout()
{
    window.sessionStorage.removeItem("name");
    window.location.replace("index.html");
}