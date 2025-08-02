
// radio btn select anywhere click 

let radio_btns = document.querySelectorAll(".type_input")


for(let radio_btn of radio_btns){


    radio_btn.addEventListener("click",()=>{

    let child_inpt = radio_btn.children[0]
     child_inpt.checked = true



 let radio_boxs = document.querySelectorAll(".radio");

        for (let radio_box of radio_boxs){

            let radio_parent = radio_box.parentElement

        if (radio_box.checked){
        
            radio_parent.style.backgroundColor = "hsla(61, 100%, 50%, 0.11)"
            radio_box.style.appearance = "none";
            radio_parent.classList.remove("box")
            radio_parent.style.border = "2px solid hsl(61, 70%, 52%)"
        }

        else{
             radio_parent.style.backgroundColor = "white";
             radio_box.style.appearance = ""
            radio_parent.classList.add("box")
            radio_parent.style.border = ""
        }
    }

    })
}








let amount_inpt = document.getElementById("amount");
let years_inpt = document.getElementById("years");
let interest_inpt = document.getElementById("interest");



function check(demo){
    if(demo.value.trim() == "" || /[a-zA-Z]/.test(demo.value)){
        return false
}else{
    return true
}
}


let inptboxes = document.querySelectorAll(".color");


for (let inptbox of inptboxes){
    

inptbox.addEventListener("focus",()=>{

    let parentEle = inptbox.parentElement
  
    parentEle.style.border = "2px solid hsl(61, 70%, 52%)"



let span = inptbox.previousElementSibling


    

    if(inptbox.id == "amount"){

        span.style.backgroundColor = "hsl(61, 70%, 52%)"
        span.style.color = "hsl(202, 55%, 16%)"

    }else{

        span = inptbox.nextElementSibling
        span.style.backgroundColor = "hsl(61, 70%, 52%)"
        span.style.color = "hsl(202, 55%, 16%)"

    }

     inptbox.addEventListener("blur", ()=>{

        parentEle.style.border = "1px solid hsl(200, 24%, 40%)"

        span.style.backgroundColor = "hsl(202, 86%, 94%)"
        span.style.color = "hsl(200, 24%, 40%)"




     })
   

})}



// clear all things 


let claer_btn = document.getElementById("clear")

claer_btn.addEventListener("click", function(){

  location.reload();
});

  


function show_err(e){

    let x = e.parentElement.nextElementSibling
    

     if (e.value == ""|| /[a-zA-Z]/.test(e.value)){

        x.innerText = "This field is required"


           if(e.id === "amount"){

            let icon_color = e.previousElementSibling
            icon_color.style.color = "hsl(0, 0%, 100%)"
            icon_color.style.backgroundColor = "hsl(4, 69%, 50%)"
           }else{

                let icon_color = e.nextElementSibling

                 icon_color.style.color = "hsl(0, 0%, 100%)"
            icon_color.style.backgroundColor = "hsl(4, 69%, 50%)"

           }

    }else{

        x.innerText = ""
    }


    e.addEventListener("input",function(){

    let x = e.parentElement.nextElementSibling;

     if(e.value == ""){

            x.innerText = "This field is required"

        }else{
            x.innerText = ""
        }

    })

}



// submit button 

let btn = document.querySelector("button");



btn.addEventListener("click",()=>{
    show_err(amount_inpt)
    show_err(years_inpt)
    show_err(interest_inpt)

let Repayment = document.querySelector("#Repayment")
let Interest = document.querySelector("#Interest")


if(Repayment.checked == false && Interest.checked == false){

    Interest.parentElement.nextElementSibling.innerText = "This field is required"

}else{
    Interest.parentElement.nextElementSibling.innerText = ""
    }


function isokay(e){

if (!isNaN(parseFloat(e.value)) && e.value.trim() !== "") {

     return true ;
}

}



// display result 


if(isokay(amount_inpt) && isokay(years_inpt)&& isokay(interest_inpt)){

    if(Repayment.checked == true){



    let Monthly_Interest_Rate = parseFloat(interest_inpt.value.trim()) / 100 / 12;

let Total_Number_of_Payments = parseFloat(years_inpt.value.trim()) * 12


let Loan_Amount = parseFloat(amount_inpt.value.trim());

let numerator = Monthly_Interest_Rate * Math.pow(1 + Monthly_Interest_Rate, Total_Number_of_Payments);
let denominator = Math.pow(1 + Monthly_Interest_Rate, Total_Number_of_Payments) - 1;
let Monthly_Repayment = Loan_Amount * (numerator / denominator);

let Total_Repayment = Monthly_Repayment * Total_Number_of_Payments;



// ✅ More reliable: Let toLocaleString handle decimals
const finalRepaymentM = Monthly_Repayment.toLocaleString('en-US', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});


// ✅ More reliable: Let toLocaleString handle decimals
const finalRepaymentT = Total_Repayment.toLocaleString('en-US', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});



let MonthlyRepayment = ("£" + finalRepaymentM);

let TotalRepayment = ("£" + finalRepaymentT);


document.querySelector(".final").style.display = "inline-block"
document.querySelector(".y").style.display = "none"
document.querySelector(".result").style.display = ""

document.getElementById("result_two_repayments").innerText = MonthlyRepayment
document.getElementById("result_two_repay").innerText = TotalRepayment


    }

    else if (Interest.checked == true){


        let Monthly_Interest_Rate = parseFloat(interest_inpt.value.trim()) / 100 / 12;
let Total_Number_of_Payments = parseFloat(years_inpt.value.trim()) * 12;
let Loan_Amount = parseFloat(amount_inpt.value.trim());

// 🔹 Interest Only Calculation
let Monthly_Repayment = Loan_Amount * Monthly_Interest_Rate;
let Total_Repayment = Monthly_Repayment * Total_Number_of_Payments;

// ✅ Format the results
const finalRepaymentM = Monthly_Repayment.toLocaleString('en-US', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});

const finalRepaymentT = Total_Repayment.toLocaleString('en-US', {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
});

let MonthlyRepayment = "£" + finalRepaymentM;
let TotalRepayment = "£" + finalRepaymentT;



document.querySelector(".final").style.display = "inline-block"
document.querySelector(".y").style.display = "none"
document.querySelector(".result").style.display = ""

document.getElementById("result_two_repayments").innerText = MonthlyRepayment
document.getElementById("result_two_repay").innerText = TotalRepayment

    }
    else{
        
    }


}

})













  