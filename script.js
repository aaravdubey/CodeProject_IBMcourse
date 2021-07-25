function compute()
{
    //creating variables and assigning them values
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;

    //code to calculate simple interest 
    var interest = principal * years * rate /100;

    //logic to convert 'No of Years' into actual year in the future
    var year = new Date().getFullYear()+parseInt(years);

    //code to highlight the numbers
    var principal_new = '<mark>'+principal+'</mark>';
    var rate_new = '<mark>'+rate+'</mark>';
    var interest_new = '<mark>'+interest+'</mark>';
    var year_new = '<mark>'+year+'</mark>';

    //to display the calculated result text
    document.getElementById('result').innerHTML="Interest: If you deposit "+principal_new+",\<br\>at an interest rate of "+rate_new+"%\<br\>You will receive an amount(interest) of "+interest_new+",\<br\>in the year "+year_new;
    
    //condition statement to check for valid inputs for 'Principal' input box
    if (principal<=0){
        alert("Enter a positive number!");
        principal.focus();
        return false;
    }
    return true;

}

//function to display the selected vaue for 'rate' input box
function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}