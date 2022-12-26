function next(){

    var tuor1 = document.getElementById('t1');
    var tuor2 = document.getElementById('t2');
    var tuor3 = document.getElementById('t3');
    var tuor4 = document.getElementById('t4');
    var tuor5 = document.getElementById('t5');
    var tuor6 = document.getElementById('t6');
    var tuor7 = document.getElementById('t7');
    var tuor8 = document.getElementById('t8');
    var tuor9 = document.getElementById('t9');
    var tuor10 = document.getElementById('t10');
    var tuor11 = document.getElementById('t11');
    var tuor12 = document.getElementById('t12');
    var tuor13 = document.getElementById('t13');
    var tuor14 = document.getElementById('t14');
    var tuor15 = document.getElementById('t15');
    var tuor16 = document.getElementById('t16');
    var tuor17 = document.getElementById('t17');
    var tuor18 = document.getElementById('t18');
    var tuor19 = document.getElementById('t19');
    var tuor20 = document.getElementById('t20');
    var Gold_Budget = document.getElementById('Gold-Budget');
    var Silver_Budget = document.getElementById('Silver-Budget');
    var Brauns_Budget = document.getElementById('Brauns-Budget');
    var With_Foods = document.getElementById('With-Foods');
    var Without_Foods = document.getElementById('Without-Foods');
    var car = document.getElementById('car');
    var van = document.getElementById('van');
    var bus = document.getElementById('bus');
    var next = document.getElementById('next');
    var With_gud = document.getElementById('With-gud');
    var Without_gud = document.getElementById('Without-gud');
    
    var num = 0;

    if(tuor1.checked == true || tuor2.checked == true || tuor3.checked == true || tuor4.checked == true || tuor5.checked == true ||
        tuor6.checked == true || tuor7.checked == true || tuor8.checked == true || tuor9.checked == true || tuor10.checked == true ||
        tuor11.checked == true || tuor12.checked == true || tuor13.checked == true || tuor14.checked == true || tuor15.checked == true ||
        tuor16.checked == true || tuor17.checked == true || tuor18.checked == true || tuor19.checked == true || tuor20.checked == true){
            if(Gold_Budget.checked == true || Silver_Budget.checked == true || Brauns_Budget.checked == true){
                if(With_Foods.checked == true || Without_Foods.checked == true){
                    if(car.checked == true || van.checked == true || bus.checked == true){
                        if(With_gud.checked == true || Without_gud.checked == true){
                            if(num == 0){
                                next.href = "Decide Your Dream Tour 2.html"; 
                            }
                        }else{
                            alert("Select an Assistant Guide Type !!!");
                            num =+ 1;
                        }
                    }else{
                        alert("Select at least one Transport Type !!!");
                        num =+ 1;
                    }
                }else{
                    alert("Select Food Type !!!");
                    num =+ 1;
                }
            }else{
                alert("Select at least one Budget Type !!!");
                num =+ 1;
            }
    }else{
        alert("Select at least one Tour !!!");
        num =+ 1;
    }
}

function sub(){
    
    var stday = document.getElementById('startDay');
    var endday = document.getElementById('ensDay');
    var memd = document.getElementById('memd');
    var username = document.getElementById('username');
    var email = document.getElementById('email');
    var contact = document.getElementById('tel');
    var banck_Card =document.getElementById('bcard');
    var MY = document.getElementById('MandD');
    var pin = document.getElementById('pin');

    var numb = 0;
    var fomat = /^\d*\.?\d+$/;

    //tot_amount.value = 30;
    if(stday.value.trim()){
        if(endday.value.trim()){
            if(stday.value <= endday.value){
                if(memd.value.trim() == 0){
                    alert("Enter correctly Participants Count !!!")
                    numb =+ 1;
                }else{
                    if(username.value.trim()=="" || username.value.trim()>3){
                        numb += 1;
                        alert("Enter your Name Correctly!!!");
                    }else{
                        if (email.value.trim()=="" || email.value.includes("@")==false){ 
                            numb += 1;
                            alert("Enter your E-mail Correctly !!!");
                        }else{
                            if(fomat.test(contact.value.trim())){
                                if(fomat.test(banck_Card.value.trim())){
                                    if(fomat.test(MY.value.trim())){
                                        if(fomat.test(pin.value.trim())){
                                            if(numb == 0){
                                                let main = document.getElementById("DYDT2");
                                                let popup = document.getElementById("popup");
                                                document.getElementById("inner_dit").innerHTML = "According to the information you provided, all the details and prices of all the facilities we provide related to your trip will be sent to your email and the remaining amount can be paid on the day the trip starts.";
                                                main.classList.add("new-DYDT2");
                                                popup.classList.add("new_pop");
                                            }
                                        }else{
                                            numb += 1
                                            alert("Enter your Pin Number Correctly !!!");
                                        }
                                    }else{
                                        numb += 1
                                        alert("Enter your Banck Card MM/YY Correctly !!!");
                                    }
                                }else{
                                    numb += 1
                                    alert("Enter your Banck Card Number Correctly !!!");
                                }
                            }else{
                                numb += 1
                                alert("Enter your Contact Number Correctly !!!");
                            }
                        }
                    }
                }
            }else{
                alert("Enter correct Date !!!")
                numb =+ 1;
            }
        }else{
            alert("Enter your tour End Date !!!")
            numb =+ 1;
        }
    }else{
        alert("Enter your tour Strat Date !!!")
        numb =+ 1;
    } 
}

function forOk(){
    let main = document.getElementById("DYDT2");
    let popup = document.getElementById("popup");
    main.classList.remove("new-DYDT2");
    popup.classList.remove("new_pop");
    alert("Check your email after few moment !")
    location.reload();
    window.location = "Decide Your Dream Tour.html";
}