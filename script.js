let option = document.getElementById("operation-option");
let firstnum = document.getElementById("firstnum"); 
let secondnum = document.getElementById("secondnum"); 
let user_ans = document.getElementById("user_ans"); 
let submit = document.getElementById("submit"); 
let score_result = document.getElementById("score_result"); 
let next_qs = document.getElementById("next_qs"); 
let icon = document.getElementById("icon"); 
let wrongtext = document.getElementById("wrongtext"); 
let easy_section = document.getElementById("easy-section"); 


let toDisplayingSection = 0 ; 
let storeValue  ; 
let hideAndShowTemplate = true ; 

 

option.addEventListener("click" , function(){
    storeValue  = option.value ; 
    console.log(option.value); 
 
if(storeValue === "addition"|| storeValue === "subtraction" || storeValue === "multiplication" || storeValue === "division")
{
    showpromt() ; 
}
    
})



let difficulty_based ;
  

function showpromt(){

     difficulty_based = prompt("Enter difficulty level(easy , medium , hard)").toLowerCase(); 
    console.log(difficulty_based); 
    // easy section 
    if(difficulty_based == "easy" ){
      
        console.log("easy selection") ; 

        if(storeValue == "addition"){
            generateQsEasyAddition() ; 
        }else if(storeValue == "subtraction"){
             generateQsEasySubtraction() ; 
        }else if(storeValue == "multiplication"){
            generateQsEasyMultiplication(); 
        }else if(storeValue == "division"){
            generateQsEasyDivision(); 
        }


    }

    else if(difficulty_based  == "medium" ){
        console.log("medium selection") ;
         
        if(storeValue == "addition"){
            generateQsMediumAddition() ; 
        }else if(storeValue == "subtraction"){
             generateQsMediumSubtraction() ; 
        }else if(storeValue == "multiplication"){
            generateQsMediumMultiplication(); 
        }else if(storeValue == "division"){
            generateQsMediumDivision(); 
        }

    }
    else if(difficulty_based  == "hard" ){
        console.log("hard selection") ;
        
        if(storeValue == "addition"){
            generateQsHardAddition() ; 
        }else if(storeValue == "subtraction"){
             generateQsHardSubtraction() ; 
        }else if(storeValue == "multiplication"){
            generateQsHardMultiplication(); 
        }else if(storeValue == "division"){
            generateQsHardDivision(); 
        }


    }
    else {
        alert("Invalid Difficulty Based ! ( Please Enter the -->( easy , medium , hard ) !"); 
    }

}



let count = 1 ; 
let resultArr = [count] ;
let result = 0 ;   


// easy template... 
function easytemplate(){
    let num1 = Math.floor(Math.random() * 100) + 1 ; 
    let num2 =   Math.floor(Math.random() * 100) + 1 ;
    firstnum.innerText = num1 ; 
    secondnum.innerText = num2 ; 
    return ([num1 , num2]); 
}

// medium template...

function mediumtemplate(){
//    easy_section.style.display = "none"; 
    let num1 = Math.floor(Math.random() * 1000) + 1 ; 
    let num2 =   Math.floor(Math.random() * 1000) + 1 ;
    // let num3 =   Math.floor(Math.random() * 1000) + 1 ;
    firstnum.innerText = num1 ; 
    secondnum.innerText = num2 ; 
    // mediumNum3.innerText = num3 ; 
    return ([num1 , num2]); 
}

// hard template ----> 

function hardtemplate(){
    let num1 =   Math.floor(Math.random() * 10000) + 1 ; 
    let num2 =   Math.floor(Math.random() * 10000) + 1 ;
 
    firstnum.innerText = num1 ; 
    secondnum.innerText = num2 ; 
   
    return ([num1 , num2]);
}



let flag = false ; 

submit.addEventListener("click" , function(){
    if(user_ans.value == 0){
        alert("follow the rules");
        
    }
    
    
    else if(user_ans.value == result){
        console.log("your ans is right..!!");
         wrongtext.innerText = "Your ans is right..!!"; 
          wrongtext.style.color = "green"; 
  flag = true  ; 
score_result.innerText = resultArr[resultArr.length - 1 ] ; 
    resultArr.push(++count);
    console.log(resultArr);
      
  
    }else if(user_ans.value != result){
    flag = true ; 
    wrongtext.style.color =  "red";  
        wrongtext.innerText = `wrong answer..!! Right ans is ${result} `; 
    }
})



next_qs.addEventListener("click" , function(){
    if(flag == false){
        alert("follow the rules");
        
    }else {
        wrongtext.innerText = " " ;
        user_ans.value = 0 ;
        console.log("next: " + resultArr);
        if(difficulty_based == "easy"){

        if(storeValue == "addition"){
            generateQsEasyAddition() ;
          }
          else if(storeValue == "subtraction"){
            generateQsEasySubtraction(); 
          }
          else if(storeValue == "multiplication"){
            console.log("easy mulitlipaction called")
            generateQsEasyMultiplication(); 
          }else if(storeValue == "division"){
            generateQsEasyDivision(); 
          }
        }else if(difficulty_based == "medium"){
            if(storeValue == "addition"){
                generateQsMediumAddition() ;
              }
              else if(storeValue == "subtraction"){
                generateQsMediumSubtraction(); 
              }
              else if(storeValue == "multiplication"){
                generateQsMediumMultiplication(); 
              }else if(storeValue == "division"){
                generateQsMediumDivision(); 
              }
        }else if(difficulty_based == "hard"){
            if(storeValue == "addition"){
                generateQsHardAddition() ;
              }
              else if(storeValue == "subtraction"){
                generateQsHardSubtraction(); 
              }
              else if(storeValue == "multiplication"){
                generateQsHardMultiplication(); 
              }else if(storeValue == "division"){
                generateQsHardDivision(); 
              }
        }
    }
  
}) ; 


// easy qs for  ----
function generateQsEasyAddition(){

    wrongtext.innerText = " ";
  let  additionNum  = easytemplate() ; 
     result = additionNum[0] + additionNum[1]; 
    icon.innerText = "+" ; 
      
}

function generateQsEasySubtraction(){
    let subtractNum =  easytemplate() ;
    icon.innerText = "-"; 
    result = 0 ; 
    result = subtractNum[0] - subtractNum[1]; 
     
}

function generateQsEasyMultiplication(){
    let multiplyNum =  easytemplate() ;
    icon.innerText = "x"; 
    result = 0 ; 
    result = multiplyNum[0] * multiplyNum[1]; 
     
}
function generateQsEasyDivision(){
    let divisionNum =  easytemplate() ;
    let smallSecondNum =  divisionNum[1] % 10 ; 
    secondnum.innerText = smallSecondNum  ; 
    icon.innerText = "/"; 
    result = 0 ; 
    console.log(divisionNum[1] % 10 ); 
    
     result = Math.floor(divisionNum[0] / smallSecondNum) ;  
}


// <-------medium level generated question -------->


function generateQsMediumAddition(){
    let mediumStoreNum = mediumtemplate() ; 
  
    icon.innerText = "+" ; 
   
    result = 0 ; 
    result = mediumStoreNum[0] + mediumStoreNum[1]  ; 

}

function generateQsMediumSubtraction(){
    let mediumStoreNum = mediumtemplate() ; 
  
    icon.innerText = "-" ; 
    result = 0 ; 
    result = mediumStoreNum[0] - mediumStoreNum[1]  ; 

}

function generateQsMediumMultiplication(){
    let mediumStoreNum = mediumtemplate() ; 
   
    icon.innerText = "x" ; 
    result = 0 ; 
    result = mediumStoreNum[0] * mediumStoreNum[1]  ; 

}

function generateQsMediumDivision(){

    let firstDivisionNumLarge = Math.floor(Math.random() * 1000) + 1 ;  
    let secondDivisionNumSmall = Math.floor(Math.random() * 100) + 1 ; 
    firstnum.innerText = firstDivisionNumLarge ; 
    secondnum.innerText = secondDivisionNumSmall ; 
    icon.innerText = "/" ; 
    
    result = 0 ; 
    result = Math.floor(firstDivisionNumLarge / secondDivisionNumSmall) ; 

}


// hard question section

function generateQsHardAddition(){
    let hardStoreNum = hardtemplate() ; 
    
    icon.innerText = "+"; 
  
    result = 0 ; 
    result = hardStoreNum[0] + hardStoreNum[1]   ;  
}

function generateQsHardSubtraction(){
    let hardStoreNum = hardtemplate() ; 
    icon.innerText = "-"; 
    result = 0 ; 
    result =  hardStoreNum[0] - hardStoreNum[1] ;  
}
function generateQsHardMultiplication(){
    let hardStoreNum = hardtemplate() ; 
    icon.innerText = "x"; 
    
    result = 0 ; 
    result =  hardStoreNum[0] * hardStoreNum[1]  ;  
}
function generateQsHardDivision(){
    // let hardStoreNum = hardtemplate() ; 
    let hardFirstNumforDivision = Math.floor(Math.random() * 10000) + 1 ; 
    let hardSecondNumforDivision = Math.floor(Math.random() * 100) + 1 ;
    firstnum.innerText = hardFirstNumforDivision ; 
    secondnum.innerText = hardSecondNumforDivision ;  
    icon.innerText = "/"; 
    
    result = 0 ; 
    result = Math.floor(hardFirstNumforDivision / hardSecondNumforDivision) ;  
}

















