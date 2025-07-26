let quantity1 = 50;
let quantity2 = 50;
let quantity3 = 50;

var at1 = 0;
var at2 = 0;
var at3 = 0;

//For Calculate The Price
function calculateAmount1(val){
    var tot_price = val * quantity1;
    at1 = (at1*0) + tot_price;
    //display the result
    let divobj = document.getElementById('tot-amount1');
    divobj.value = " $ " + tot_price;
    let tot_amo = document.getElementById('tot-amount');
    tot_amo.value = at1 + at2 + at3;
}
function calculateAmount2(val){
    let tot_price = val * quantity2;
    at2 = (at2*0) + tot_price;
    //display the result
    let divobj = document.getElementById('tot-amount2');
    divobj.value = " $ " + tot_price;
    let tot_amo = document.getElementById('tot-amount');
    tot_amo.value = at1 + at2 + at3;
}
function calculateAmount3(val){
    let tot_price = val * quantity3;
    at3 = (at3*0) + tot_price;
    //display the result
    let divobj = document.getElementById('tot-amount3');
    divobj.value = " $ " + tot_price;
    let tot_amo = document.getElementById('tot-amount');
    tot_amo.value = at1 + at2 + at3;
}

//For Calculate Total Price
function happen1(){
    var q1 = document.getElementById('blue');
    var q2 = document.getElementById('black');
    var q3 = document.getElementById('red');
    let newq =  document.getElementById("quantity1");
    if(q1.checked == true){
        newq.disabled = false;
    }else{
        newq.disabled = true;
        document.querySelector("#tot-amount").value -= at1;
        at1 = at1*0;
        if(q1.checked == false && q2.checked == false && q3.checked == false){
            document.querySelector("#tot-amount").value = " $ 0";
        }else{}
    }
    newq.value = "0";
    newq.step = "1";
    newq.max = "10";
    newq.min = "1";
    document.querySelector("#tot-amount1").value = " $ 0";
}
function happen2(){
    var q1 = document.getElementById('blue');
    var q2 = document.getElementById('black');
    var q3 = document.getElementById('red');
    let newq =  document.getElementById("quantity2");
    if(q2.checked == true){
        newq.disabled = false;
    }else{
        newq.disabled = true;
        document.querySelector("#tot-amount").value -= at2;
        at2 = at2*0;
        if(q1.checked == false && q2.checked == false && q3.checked == false){
            document.querySelector("#tot-amount").value = " $ 0";
        }else{}
    }
    newq.value = "0";
    newq.step = "1";
    newq.max = "10";
    newq.min = "1";
    document.querySelector("#tot-amount2").value = " $ 0";
}
function happen3(){
    var q1 = document.getElementById('blue');
    var q2 = document.getElementById('black');
    var q3 = document.getElementById('red');
    let newq =  document.getElementById("quantity3");
    if(q3.checked == true){
        newq.disabled = false;
    }else{
        newq.disabled = true;
        document.querySelector("#tot-amount").value -= at3;
        at3 = at3*0;
        if(q1.checked == false && q2.checked == false && q3.checked == false){
            document.querySelector("#tot-amount").value = " $ 0";
        }else{}
    }
    newq.value = "0";
    newq.step = "1";
    newq.max = "10";
    newq.min = "1";
    document.querySelector("#tot-amount3").value = " $ 0";
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
    var blue = document.getElementById('blue');
    var black = document.getElementById('black');
    var red = document.getElementById('red');
    var quantity1 = document.getElementById('quantity1');
    var quantity2 = document.getElementById('quantity2');
    var quantity3 = document.getElementById('quantity3');
    var price1 = document.getElementById('tot-amount1');
    var price2 = document.getElementById('tot-amount2');
    var price3 = document.getElementById('tot-amount3');
    var total_price = document.getElementById('tot-amount');


    var fomat = /^\d*\.?\d+$/;
    var num = 0;
    var bluColCount = 0;
    var blackColCount = 0;
    var redColCount = 0;

    if(name.value.trim()=="" || name.value.trim()>3){
        num += 1;
        alert("Enter Your Name Correctly!!!");
    }else{
        if(email.value.trim()=="" || email.value.includes("@")==false){
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
                                if(blue.checked == true || black.checked == true || red.checked == true){
                                    if(blue.checked == true){
                                        bluColCount += 1;
                                        if(quantity1.value.trim() == 0){
                                            num += 1
                                            alert("Enter Your Quantity Correctly !!!");
                                        }
                                    }
                                    if(black.checked == true){
                                        blackColCount += 1;
                                        if(quantity2.value.trim() == 0){
                                            num += 1
                                            alert("Enter Your Quantity Correctly !!!");
                                        }
                                    }
                                    if(red.checked == true){
                                        redColCount += 1;
                                        if(quantity3.value.trim() == 0){
                                            num += 1
                                            alert("Enter Your Quantity Correctly !!!");
                                        }
                                    }
                                }else{
                                    num += 1 
                                    alert("Please Select Atleast One Item !!!");
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
        if(bluColCount == 1){
          document.getElementById("inner_quantity1").innerHTML = "Quantity of Danced : " + quantity1.value;
          document.getElementById("inner_price1").innerHTML = "Price : " + price1.value;
        }
        if(blackColCount == 1){
            document.getElementById("inner_quantity2").innerHTML = "Quantity of Drummer 1 : " + quantity2.value;
            document.getElementById("inner_price2").innerHTML = "Price : " + price2.value;
        }
        if(redColCount == 1){
          document.getElementById("inner_quantity3").innerHTML = "Quantity of Drummer 2 : " + quantity3.value;
          document.getElementById("inner_price3").innerHTML = "Price : " + price3.value;
        }
        document.getElementById("inner_price").innerHTML = "Price : $ " + total_price.value;
        if(off.value.trim() == "vch25q88" || off.value.trim() == "cba78c0" || off.value.trim() == "tph92m1"){
            document.getElementById("inner_Off").innerHTML = "Discount : 30% off";
            document.getElementById("inner_total_price").innerHTML = "Total Price : $ " + (total_price.value - (total_price.value * 0.3));
        }else{
            document.getElementById("inner_Off").innerHTML = "Discount : 0%";
            document.getElementById("inner_total_price").innerHTML = "Total Price : $ " + total_price.value;  
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