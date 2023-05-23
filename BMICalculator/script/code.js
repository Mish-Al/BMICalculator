function calculate(){
    var bmi;
    var result = document.getElementById("result");
    //The value of the height slider
    var height = parseInt(document.getElementById("height").value);
    // The value of the weight slider
    var weight = parseInt(document.getElementById("weight").value);
    
    // The value of the height and width should be displayed using "textContent"
    document.getElementById("weight-val").textContent = weight + "kg";
    document.getElementById("height-val").textContent = height + "cm";

    //Formula for calculating BMI
    bmi = (weight / Math.pow( (height/100), 2 )). toFixed(1);
    //textContent will display results
    result.textContent = bmi;
    
    // Less than 18.5 BMI, this will display
    if(bmi < 18.5){
        catergory = "Underweight";
        result.style.color = "#84a326";
    }

    // >= 18.5 and <= 24.9, this will display
    else if (bmi >= 18.5 && bmi <= 24.9){
        catergory = "Healthy";
        result.style.color = "#26a369";
    }
    
    //>= 25 and <= 29.9
    else if (bmi >= 25 && bmi <= 29.9){
        catergory = "Overweight"
        result.style.color = "#a38626"
    }

    //<= 30
    else{
        catergory = "Obese"
        result.style.color = "#a32626"
    }
    document.getElementById("catergory").textContent = catergory;
}



