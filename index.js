// Access all the element
let num = document.querySelectorAll(".box");
let screen = document.querySelector(".screen")


// Adjust screen font size
const adjustFontSize = () => {

    if (screen.value.length > 18) {
        screen.style.fontSize = "16px";
    } else if (screen.value.length > 14) {
        screen.style.fontSize = "20px";
    } else {
        screen.style.fontSize = "24px";
    }

};


// Add click event to every button
num.forEach((box) =>{
    box.addEventListener("click",() =>{
 
        console.log(box.innerText);

        let value = box.innerText ;
        

       // This conditional block handles the input and output logic       
        if(value === "AC"){
            screen.value = ""
            adjustFontSize();
        }else if(value ==="DEL"){
            screen.value = screen.value.slice(0, -1);
            adjustFontSize();
        }else if (value === "PI"){
            screen.value += Math.PI ;
            adjustFontSize();
        }else if( value === "="){
            try{
                screen.value = eval(screen.value);
                adjustFontSize();
            }catch{
                screen.value = "Error";
                adjustFontSize();
            }
        }else{
            screen.value += value ;
            adjustFontSize();
        }
        console.log(screen.value);
    });
});