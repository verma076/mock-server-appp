const Login = document.getElementById("login");

let email=document.getElementById("email")
let password=document.getElementById("password")


Login.addEventListener("click",(e)=>{
e.preventDefault();

let data={
    email:email.ariaValueMax,
    password:password.value
}
console.log("data",data)
fetch("https://reqres.in/api/login",{
    method:"POST",
    headers:{
        "Content_Type":"application/json",
    },
    body:JSON.stringify(data)
})
.then((res)=>res.json())
.then((res)=>{
    localStorage.setItem("token",res.token)
    alert("Admin login successful")
    location.href="./freelancers.html"
})
.catch((err)=>{
    console.log(err)
})
})