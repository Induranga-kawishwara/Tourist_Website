
function calculateAmount(val){
    let tot_price = (val *  document.getElementById("price").value);
    //display the result
    let divobj = document.getElementById('tot-amount');
    divobj.value = " $ " + tot_price;
}
function ebuwahama(){
  var name= document.getElementById('username');
  var email = document.getElementById('email');
  var number = document.getElementById('tel');
  var off = document.getElementById('coupon');
  var bankCard = document.getElementById('bcard');
  var Address = document.getElementById("Impo");
  var m_y = document.getElementById('MandD')
  var pin = document.getElementById('pin');
  var quantity = document.getElementById('quantity');
  var price = document.getElementById('tot-amount');

  var fomat = /^\d*\.?\d+$/;
  var num = 0;

  if(name.value.trim()=="" || name.value.trim()>3){
    num += 1;
    alert("Enter Your Name Correctly!!!");
  }else{
    if (email.value.trim()=="" || email.value.includes("@")==false){ 
      num += 1;
      alert("Enter Your E-mail Correctly!!!");
    }else{
      if(fomat.test(number.value.trim())){
        if(fomat.test(bankCard.value.trim())){
          if(fomat.test(m_y.value.trim())){
            if(fomat.test(pin.value.trim())){
              if (Address.value.trim()==""){ 
                num += 1;
                alert("Enter your Address  !!!");
              }else{
                if(quantity.value.trim() == 0){
                  num += 1
                  alert("Enter Ticket quntity !!!");
                }
              }
            }else{
              num += 1
              alert("Enter Your Pin Number Correctly !!!");
            }
          }else{
            num += 1
            alert("Enter Your Banck Card MM/YY Correctly !!!");
          }
        }else{
          num += 1
          alert("Enter Your Banck Card Number Correctly !!!");
        }
      }else{
        num += 1
        alert("Enter Your Phone Number Correctly !!!");
      }
    }
  }
  
  
  if(num == 0){  
    //popup window
    let main = document.getElementById("main-ticket");
    let popup = document.getElementById("popup-t");
    document.getElementById("inner_name").innerHTML = "Name : " + name.value;
    document.getElementById("inner_email").innerHTML = "Email : " + email.value;
    document.getElementById("inner_phone").innerHTML = "Contact number : " + number.value; 
    document.getElementById("inner_Impo").innerHTML = "Address : -" + Address.value;
    document.getElementById("inner_quantity").innerHTML = "Tickets : " + quantity.value;
    document.getElementById("inner_price").innerHTML = "Price : " + price.value;
    if(off.value.trim() == "vch25q88" || off.value.trim() == "cba78c0" || off.value.trim() == "tph92m1"){
          document.getElementById("inner_Off").innerHTML = "Discount : 30% off";
          document.getElementById("inner_total_price").innerHTML = "Total Price : $ " +((quantity.value*document.getElementById("price").value)-((quantity.value*document.getElementById("price").value)*0.3));
    }else{
      document.getElementById("inner_Off").innerHTML = "Discount : 0%";
      document.getElementById("inner_total_price").innerHTML = "Total Price : $ " +(quantity.value*document.getElementById("price").value);        
    }    
    main.classList.add("new-main-box");
    popup.classList.add("new_pop");
    }
}

function forOk(){
    let main = document.getElementById("main-ticket");
    let popup = document.getElementById("popup-t");
    main.classList.remove("new-main-box");
    popup.classList.remove("new_pop");
    alert("We Will Diliver Your Oder As Soon As Posible !")
    location.reload();
  }