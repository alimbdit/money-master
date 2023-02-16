function getValueFromInput(id){
    const costString = document.getElementById(id).value;
  
        return parseFloat(costString);
}

function getValueFromTextField(id){
    const textValueString = document.getElementById(id).innerText;
    const textValue = parseFloat(textValueString);
    return textValue;
}

function setValueField(id, value){
    const valueToAdd = document.getElementById(id);
    valueToAdd.innerText = value;
}