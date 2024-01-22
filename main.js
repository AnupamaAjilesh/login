login=()=>{
    let username=uname.value
    let password=pswd.value
    if(!username || !password){
        alert("invalid Credentials !! Login Failed!!!")
    }
    else{
        localStorage.setItem("username", username);
        console.log(`Username:${username},password:${password}`)
        window.location="dashboard.html"
    }
}