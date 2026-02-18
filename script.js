const btn = document.getElementById('btn-calc');

btn.addEventListener('click', function() {
    
    const weight = document.getElementById('weight').value;
    const height = document.getElementById('height').value;

    if (weight > 0 && height > 0) {
        
        
     const bmi = weight / (height * height);
     if(bmi < 18.5){
        document.getElementById('description').innerText = "Abaixo do peso"
     }
     else if(bmi >= 18.5 && bmi <= 24.9){
        document.getElementById('description').innerText = "Saudável"

     }
     else if(bmi >= 25 && bmi <= 29.9){
        document.getElementById('description').innerText = "Sobrepeso"
     }
     else{
        document.getElementById('description').innerText = "Obesidade"
     }
     
    document.getElementById('bmi-value').innerText = bmi.toFixed(2)
    } else {
        alert("Please fill in all fields!");
    }
});