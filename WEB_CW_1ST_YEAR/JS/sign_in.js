pwShowHide = document.querySelectorAll(".eye-icon"),
      

pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        let pwFields = eyeIcon.parentElement.parentElement.querySelectorAll(".password");
        
        pwFields.forEach(password => {
            if(password.type === "password"){
                password.type = "text";
                eyeIcon.classList.replace("bx-hide", "bx-show");
                return;
            }
            password.type = "password";
            eyeIcon.classList.replace("bx-show", "bx-hide");
        })
        
    })
})      
function go_regi(){
    let back = document.getElementById("back");
    let login = document.getElementById("login_page");
    let register = document.getElementById("register");
    back.classList.add("new_back");
    login.classList.add("new_login_page");
    register.classList.add("new_register");
}
function re_lo(){
    let back = document.getElementById("back");
    let login = document.getElementById("login_page");
    let register = document.getElementById("register");
    back.classList.remove("new_back");
    login.classList.remove("new_login_page");
    register.classList.remove("new_register");
}
function logi(){
    let email1 = document.getElementById("email1");
    let password = document.getElementById("password");
    let num = 0;

    if(email1.value.trim()=="" || email1.value.includes("@")==false){ 
        num+=1;
        alert("Enter your email !!!");
    }else{
        if (password.value.trim()==""){
            num+=1;
            alert("Enter your password !!!");
        }else{
            if(num == 0){
                window.location = "Home.html";
            }
        }
    }
    
}
function regis(){
    let email2 = document.getElementById("email2");
    let pass2 = document.getElementById("pass2");
    let con_pass = document.getElementById("con_pass");
    let num = 0;

    if (email2.value.trim()=="" || email2.value.includes("@")==false){ 
        num+=1;
        alert("Enter your email !!!");
    }else{
        if (pass2.value.trim()==""){
            num+=1;
            alert("Enter any password !!!");
        }else{
            if (con_pass.value.trim()==""){
                num+=1;
                alert("Confirm your password !!!");
            }else{
                if(num == 0){
                    var coupons = ['vch25q88', 'cba78c0', 'tph92m1'];
                    var coupon = coupons[Math.floor(Math.random()*coupons.length)];
                    let  pop = document.getElementById("pop");
                    let back = document.getElementById("back");
                    let login = document.getElementById("login_page");
                    let register = document.getElementById("register");
                    register.classList.remove("new_register");
                    login.classList.add("new_login_page");
                    back.classList.add("new_back");
                    pop.classList.add("new_pop");
                    document.getElementById("inner_coupon").innerHTML="coupon : "+coupon;
                }
            }
        }
    }
}
function pop(){
    window.location = "Home.html";
}