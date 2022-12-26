function foo(){
    var email_do= document.getElementById('email_do');
    if(email_do.value.trim()=="" || email_do.value.includes("@")==false){
      alert("Email must be filled out !!!");
    }else{
      let email_do = document.querySelector('#email_do');
      email_do.value="";
      alert("You have successfully registered to our online server!!!!! ")
    }  
  }