 let input = document.getElementById("input");
    let buttons = document.querySelectorAll(".btn");
let string=""
    buttons.forEach((btn)=> {
        btn.addEventListener("click", () => {
            let val=btn.textContent
            
switch (val) {
  case "=":
    input.value = eval(string);
      
        break;
      case "AC":
        string=""
        input.value=0
        break;
   case "DE":
     string=input.value.slice(0,string.length-1)
     input.value=string
     break;
  case "%":
      input.value = eval(string+"/100")
      string=input.value
        break;
      default:
        string += val;
        input.value = string;
    }
        });
    });

