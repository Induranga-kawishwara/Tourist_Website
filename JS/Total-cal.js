let quantity = 0.2;

function calculateAmount(val){
    let tot_price = val * quantity;
    //display the result
    let divobj = document.getElementById('tot-amount');
    divobj.value = " $ " + tot_price;
}

function happen1(){
    quantity = 0.2;
    let newq =  document.getElementById("quantity");
    newq.value = "0";
    newq.step = "100";
    newq.max = "900";
    newq.min = "100";
    newq.disabled = false;
    document.querySelector("#tot-amount").value = " $ 0";
}

function happen2(){
    quantity = 200;
    let newq =  document.getElementById("quantity");
    newq.value = "0";
    newq.step = "1";
    newq.max = "10";
    newq.min = "1";
    newq.disabled = false;
    document.querySelector("#tot-amount").value = " $ 0";
}

function ebuwahama(){
  var name= document.getElementById('username');
  var email = document.getElementById('email');
  var number = document.getElementById('tel');
  var off = document.getElementById('coupon');
  var bankCard = document.getElementById('bcard');
  var m_y = document.getElementById('MandD')
  var pin = document.getElementById('pin');
  var Address = document.getElementById('addre');
  var gram = document.getElementById('gram');
  var kilogram = document.getElementById('kilogram');
  var quantity = document.getElementById('quantity');
  var price = document.getElementById('tot-amount');


  var fomat = /^\d*\.?\d+$/;
  var num = 0;
  var GramCount = 0;


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
              if(Address.value.trim() == "" || Address.value.trim()>10){
                num += 1;
                alert("Enter your Address !!!")
              }else{
                if(gram.checked == true){
                  GramCount += 1;
                  if(quantity.value.trim() == 0){
                    num += 1
                    alert("Enter Your Quantity Correctly !!!");
                  }
                }else if(kilogram.checked == true){
                  if(quantity.value.trim() == 0){
                    num += 1
                    alert("Enter Your Quantity Correctly !!!");
                  }
                }else{
                  num += 1 
                  alert("Please Select Atleast One Weight Type !!!");
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
          alert("Enter Your Contact Number Correctly !!!");
        }
    }
  }


  //popup window
  if(num == 0){
    let main = document.getElementById("main-box");
    let popup = document.getElementById("popup");
    document.getElementById("inner_name").innerHTML = "Name : " + name.value;
    document.getElementById("inner_email").innerHTML = "Email : " + email.value;
    document.getElementById("inner_phone").innerHTML = "Contact number : " + number.value;  
    document.getElementById("inner_address").innerHTML = "Address : " + Address.value;
    if(GramCount == 1){
      document.getElementById("inner_quantity").innerHTML = "Quantity gram : " + quantity.value;
    }else{
      document.getElementById("inner_quantity").innerHTML = "Quantity kilogram : " + quantity.value;
      }
    document.getElementById("inner_price").innerHTML = "Price : " + price.value;
    if(off.value.trim() == "vch25q88" || off.value.trim() == "cba78c0" || off.value.trim() == "tph92m1"){
          document.getElementById("inner_Off").innerHTML = "Discount : 30% off";
          if(GramCount == 1){
              document.getElementById("inner_total_price").innerHTML = "Total Price : $ " +((quantity.value*0.2)-((quantity.value*0.2)*0.3));
            }else{
              document.getElementById("inner_total_price").innerHTML = "Total Price : $ " +((quantity.value*200)-((quantity.value*200)*0.3));
              }
      }else{
          document.getElementById("inner_Off").innerHTML = "Discount : 0%";
          if(GramCount == 1){
              document.getElementById("inner_total_price").innerHTML = "Total Price : $ " +(quantity.value*0.2);
            }else{
              document.getElementById("inner_total_price").innerHTML = "Total Price : $ " +(quantity.value*200);
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