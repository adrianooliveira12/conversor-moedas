
const convertButton = document.querySelector(".convert-button")

function convertValues(){
    const inputMoedaValue = document.querySelector(".input-moeda").value

    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")

    const currencyValueCoverted = document.querySelector(".currency-value")

    const dolarToday = 6.3

    const convertValue = inputMoedaValue / dolarToday

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR",{
        style:"currency",
        currency:"BRL"
    }).format(inputMoedaValue)
    currencyValueCoverted.innerHTML = new Intl.NumberFormat("en-US",{
        style:"currency",
        currency:"USD"
    }).format(convertValue)

   
}

convertButton.addEventListener("click",convertValues)