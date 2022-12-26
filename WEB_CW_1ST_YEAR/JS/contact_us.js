function su(){
  var name= document.getElementById('name');
  var email = document.getElementById('email');
  var message = document.getElementById('message');
  var subject = document.getElementById('subject');
  var number = document.getElementById('number');
  var fomat = /^\d*\.?\d+$/;
  var num = 0;

  if(name.value.trim()=="" || name.value.trim()>3){
      num+=1;
      alert("Enter your name correctly!!!");
  }else{
    if (email.value.trim()=="" || email.value.includes("@")==false){ 
      num+=1;
      alert("Enter your email correctly!!!");
    }else{
      if(subject.value.trim()=='default'){
        num+=1
        alert("Enter the subject you are having problem with !!!!")
      }else{
        if(fomat.test(number.value.trim())){
          if(message.value.trim()==""|| message.value.trim()>3){
            num+=1;
            alert("Enter your message !!!")
          }else{
            if(num==0){
              //popup window
              let main = document.getElementById("main");
              let popup = document.getElementById("popup");
              document.getElementById("inner_name").innerHTML="Name : "+name.value;
              document.getElementById("inner_email").innerHTML="Email : "+email.value;
              document.getElementById("inner_phone").innerHTML="Contact number : "+number.value;  
              document.getElementById("inner_subject").innerHTML="Subject : "+subject.value;
              document.getElementById("inner_message").innerHTML="Message : "+message.value;
              main.classList.add("new_main");
              popup.classList.add("new_pop");
            }
          }
        }else{
            num+=1
            alert("Enter your phone number correctly !!!");
        }
      }
    }
  }
  
}
//reset button         
function res(){
  alert("All boxes are cleaned !!!!!")
}
//edit button
function edit(){
  let main = document.getElementById("main");
  let popup = document.getElementById("popup");
  main.classList.remove("new_main");
  popup.classList.remove("new_pop");
  window.location.reload();
  }
  //ok button of popup window
  function clo(){
  let main = document.getElementById("main");
  let popup = document.getElementById("popup");
  main.classList.remove("new_main");
  popup.classList.remove("new_pop");
  alert("your message was Successfully submitted !!!!!")
  window.location.reload();
  window.location.href = "mailto:Ceylondreamtour@gmail.com?subject=Contact Ceylonoholic";
}