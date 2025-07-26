let quantity = 0;

function calculateAmount(val){
    let tot_price = val * quantity;
    //display the result
    let divobj = document.getElementById('tot-amount');
    divobj.value = " $ " + tot_price;
}

function happen1(){
    quantity = Number((document.getElementById("price").value))+ Number(20);
    let newq =  document.getElementById("quantity");
    newq.value = "0";
    newq.step = "1";
    newq.max = "20";
    newq.min = "1";
    newq.disabled = false;
    document.querySelector("#tot-amount").value = " $ 0";
}

function happen2(){
    quantity = document.getElementById("price").value;
    let newq =  document.getElementById("quantity");
    newq.value = "0";
    newq.step = "1";
    newq.max = "20";
    newq.min = "1";
    newq.disabled = false;
    document.querySelector("#tot-amount").value = " $ 0";
}

function ebuwahama(){
  let with_fo = Number((document.getElementById("price").value))+ Number(20);
  let without_fo = Number((document.getElementById("price").value));
  var name= document.getElementById('username');
  var email = document.getElementById('email');
  var number = document.getElementById('tel');
  var off = document.getElementById('coupon');
  var bankCard = document.getElementById('bcard');
  var impo = document.getElementById("Impo");
  var m_y = document.getElementById('MandD')
  var pin = document.getElementById('pin');
  var passa = document.getElementById('passa');
  var passa1 = document.getElementById('passa1');
  var quantity = document.getElementById('quantity');
  var price = document.getElementById('tot-amount');
  var car = document.getElementById('car');
  var van = document.getElementById('van');
  var bus = document.getElementById('bus');


  var fomat = /^\d*\.?\d+$/;
  var num = 0;
  var passangers = 0;

  if(name.value.trim()=="" || name.value.trim()>3){
    num += 1;
    alert("Enter Your Name Correctly!!!");
  }else{
    if (email.value.trim()=="" || email.value.includes("@")==false){ 
      num += 1;
      alert("Enter Your E-mail Correctly !!!");
    }else{
      if(fomat.test(number.value.trim())){
        if(fomat.test(bankCard.value.trim())){
          if(fomat.test(m_y.value.trim())){
            if(fomat.test(pin.value.trim())){
              if (impo.value.trim()==""){ 
                num += 1;
                alert("Enter tour day and any Important thing about you  !!!");
              }else{
                if(car.checked == true || van.checked == true || bus.checked == true){
                  if(passa.checked == true){
                    if(quantity.value.trim() == 0){
                      num += 1
                      alert("Enter Your Passanger Count Correctly !!!");
                    }
                    passangers += 1;
                  }else if(passa1.checked == true){
                    if(quantity.value.trim() == 0){
                      num += 1
                      alert("Enter Your Passanger Count Correctly !!!");
                    }
                  }else{
                    num += 1 
                    alert("Do you want foods from us or Not !!!");
                  }
                }else{
                  alert("Select at least one Transport Type !!!");
                  num =+ 1;
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
    let main = document.getElementById("main-box");
    let popup = document.getElementById("popup");
    document.getElementById("inner_name").innerHTML = "Name : " + name.value;
    document.getElementById("inner_email").innerHTML = "Email : " + email.value;
    document.getElementById("inner_phone").innerHTML = "Contact number : " + number.value; 
    if(name.value.trim()==""){
      document.getElementById("inner_Impo").innerHTML = "Important note : -" + impo.value;
    }else{
      document.getElementById("inner_Impo").innerHTML = "Important note : " + impo.value;
    }
    if(car.checked == true){
        document.getElementById("inner_trans").innerHTML = "Transport type : Car " ;
    }else if (van.checked == true) {
        document.getElementById("inner_trans").innerHTML = "Transport type : Van " ;
    } else {
      document.getElementById("inner_trans").innerHTML = "Transport type : Bus " ;
    }
    
    if(passangers == 1){
      document.getElementById("inner_quantity").innerHTML = "Pasangers with foods: " + quantity.value;
    }else{
      document.getElementById("inner_quantity").innerHTML = "Pasangers without foods: " + quantity.value;
      }
    document.getElementById("inner_price").innerHTML = "Price : " + price.value;
    if(off.value.trim() == "vch25q88" || off.value.trim() == "cba78c0" || off.value.trim() == "tph92m1"){
          document.getElementById("inner_Off").innerHTML = "Discount : 30% off";
         if(passangers == 1){
              document.getElementById("inner_total_price").innerHTML = "Total Price : $ " +((quantity.value*with_fo)-((quantity.value*with_fo)*0.3));
         }else{
              document.getElementById("inner_total_price").innerHTML = "Total Price : $ " +((quantity.value*without_fo)-((quantity.value*without_fo)*0.3));
              }
    }else{
         document.getElementById("inner_Off").innerHTML = "Discount : 0%";
         if(passangers == 1){
              
              document.getElementById("inner_total_price").innerHTML = "Total Price : $ " +(quantity.value*with_fo);
         }else{
            document.getElementById("inner_total_price").innerHTML = "Total Price : $ " +(quantity.value*without_fo);
             }  
      }    
    main.classList.add("new-main-box");
    popup.classList.add("new_pop");
    }
}

function forOk(){
    let main = document.getElementById("main-box");
    let popup = document.getElementById("popup");
    main.classList.remove("new-main-box");
    popup.classList.remove("new_pop");
    alert("We Will Diliver Your Oder As Soon As Posible !")
    location.reload();
  }