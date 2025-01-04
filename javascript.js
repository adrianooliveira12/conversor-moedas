
const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    const inputMoedaValue = document.querySelector(".input-moeda").value

    const currencyValueToConvert = document.querySelector(".currency-value-to-convert")

    const currencyValueCoverted = document.querySelector(".currency-value")

    const dolarToday = 6.3
    const euroToday = 5.8
    const libraToday = 4.8



    if (currencySelect.value == "dolar") {
        currencyValueCoverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputMoedaValue / dolarToday)
    }
    if (currencySelect.value == "euro") {
        currencyValueCoverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputMoedaValue / euroToday)

    }
    if (currencySelect.value == "libra") {
        currencyValueCoverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputMoedaValue /libraToday)
    }

    currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputMoedaValue)

}   
    function changeCurrency() {
        const currencyName = document.getElementById("currency-name")
        const currencyImage = document.querySelector(".currency-img")
        if(currencySelect.value == "dolar"){
            currencyName.innerHTML = "Dolar americano"
            currencyImage.src ="./assets/estados-unidos (1) 1.png"
        }
        if(currencySelect.value == "euro"){
            currencyName.innerHTML = "Euro"
            currencyImage.src = "./assets/euro (1).png"
           
        }
        if(currencySelect.value == "libra"){
            currencyName.innerHTML = "Libra"
            currencyImage.src = "./assets/libra.png"
           
        }
       
        convertValues()
    }

currencySelect.addEventListener("change",changeCurrency)
convertButton.addEventListener("click", convertValues)