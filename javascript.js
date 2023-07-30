
function temperature() {
    let inputValue = document.querySelector("#inputValue").value;
    let type1 = document.querySelector("#type1");
    let type2 = document.querySelector("#type2");
    let result = document.querySelector("#result");
    
    if (inputValue == "") {
        alert("Please Enter any Number....");
        location.reload();
    } 
    else if (type1.value == "celcius" && type2.value == "celcius") {
       
        result.innerHTML = inputValue + ` &deg;C`;
    } 
    else if (type1.value == "celcius" && type2.value == "fahrenheit") {
        let Fahrenheit = inputValue * (9 / 5) + 32;
        result.innerHTML = Fahrenheit.toFixed(3) + " F";
    }
     else if (type1.value == "celcius" && type2.value == "kelvin") {
        let Kelvin = Number.parseFloat(inputValue) + 273.15;
        result.innerHTML = Kelvin.toFixed(3) + " K";
    }
     else if (type1.value == "fahrenheit" && type2.value == "celcius") {
        let Celsius = (Number.parseFloat(inputValue) - 32) * (5 / 9);
        result.innerHTML = Celsius.toFixed(3) + ` &deg;C`;
    }
     else if (type1.value == "fahrenheit" && type2.value == "fahrenheit") {
        result.innerHTML = inputValue + " F";
    }
     else if (type1.value == "fahrenheit" && type2.value == "kelvin") {
        let Kelvin = (Number.parseFloat(inputValue) + 459.67) * (5 / 9);
        result.innerHTML = Kelvin.toFixed(3) + " K";
    }
     else if (type1.value == "kelvin" && type2.value == "celcius") {
        let Celsius = Number.parseFloat(inputValue) - 273.15;
        result.innerHTML = Celsius.toFixed(3) + ` &deg;C`;
    }
     else if (type1.value == "kelvin" && type2.value == "fahrenheit") {
        let Fahrenheit = (Number.parseFloat(inputValue) * (9 / 5)) - 459.67;
        result.innerHTML = Fahrenheit.toFixed(3) + " F";
    }
     else if (type1.value == "kelvin" && type2.value == "kelvin") {
         result.innerHTML = inputValue + " K";
    }
}

