let form = document.querySelector("form")


form.addEventListener("submit",function (e) {
    e.preventDefault()
     
    let height = parseInt(document.querySelector("#height").value)
    let weight = parseInt(document.querySelector("#weight").value)
    let results = document.querySelector(".result")

    if(height === "" || height === 0 || isNaN(height)) {
        results.innerHTML = `please enter a valid number : ${height}`
    }
    else if(weight === "" || weight === 0 || isNaN(weight)) {
        results.innerHTML = `please enter a valid number : ${weight}`
    }
    else{
        // Formula: BMI = weight (kg) / (height (cm) / 100)²

        let bmi = (weight / (( height * height ) / 10000 )).toFixed(2)
        results.innerHTML = `${bmi}`


        if(bmi < 18.6){
            results.appendChild(document.createTextNode(" under weight"))
        }
        else  if(18.6 < bmi  && bmi < 24.9){
            results.appendChild(document.createTextNode(" normal weight"))
         }
         else{
            results.appendChild(document.createTextNode(" over weight"))
         }

    }

    
})
