// document.getElementById('calculate-btn').addEventListener('click', function(){
//     const foodCostString = document.getElementById('food-cost').value;
//     foodCost = parseFloat(foodCostString);
//     const rentCostString = document.getElementById('rent-cost').value;
//     rentCost = parseFloat(rentCostString);
//     const clothCostString = document.getElementById('cloth-cost').value;
//     clothCost = parseFloat(clothCostString);

//     totalCost = foodCost + rentCost + clothCost;
//     console.log(totalCost);

// });
document.getElementById('calculate-btn').addEventListener('click', function(){
    const foodCost = getValueFromInput('food-cost');
    const rentCost = getValueFromInput('rent-cost');
    const clothCost = getValueFromInput('cloth-cost');
    const income = getValueFromInput('income-field');

    if(isNaN(foodCost) || isNaN(rentCost) || isNaN(clothCost) || isNaN(income) ){
        alert("Enter number.");
    }

    else{
        if(foodCost < 0 || rentCost < 0 || clothCost < 0 || income < 0){
            alert("Value should not be a negative number");
        }
        else{
            totalCost = foodCost + rentCost + clothCost;
            if(income < totalCost){
                alert('cut your coat according to your cloth!!!')
            }
            else{
                const balance = income - totalCost;
                setValueField('total-expenses', totalCost);
                setValueField('balance', balance);
            }
         
             }
        }
        
 
});

document.getElementById('save-btn').addEventListener('click', function(){
    const income = getValueFromInput('income-field');
    const savingPercent = getValueFromInput('saving-percent');

    if(isNaN(income) || isNaN(savingPercent)){
        alert("Enter percent value correctly in number. Or check previous field");
    }
    else{
        if(income < 0 || savingPercent < 0 ){
            alert("Value should not be a negative number");
        }
        else if(savingPercent > 100){
            alert("Percent should not be greater than 100%");
        }
        else{
            const savingAmount = income *(savingPercent/100);

            setValueField('saving-amount', savingAmount);
            
            const balance = getValueFromTextField('balance');
            if (balance > savingAmount){
                const remainingBalance = balance - savingAmount;
                setValueField('remaining-balance', remainingBalance);
               
            }
            else{
                alert("You have not enough money in your balance to save.");
            }
           
        }
        
    }

    

});
