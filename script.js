{
 const formField = document.querySelector(".js-currency");

    formField.addEventListener("submit", (event) => {
        event.preventDefault();
        const rate = [4.02, 4.55, 4.34, 270870];
        const typevalue = document.querySelector(".currencyLable2__input");
        const resultElement = document.querySelector(".currency__result1");
        const firstElement = document.querySelector(".js-currency__input");
        const secondElement = document.querySelector(".js-currency__input2");
        const tirdElement = document.querySelector(".js-currency__input3");
        
        let typed = typevalue.value;
        const uds = rate[0];
        const euro = rate[1];
        const chf = rate[2];
        const bitcoin = rate[3];
    
        if (firstElement.checked) {
            let result = typed * uds;
            resultElement.innerText = result.toFixed(2);
        }
        else if (secondElement.checked) {
            let result = typed * euro;
            resultElement.innerText = result.toFixed(2);
        }
        else if (tirdElement.checked) {
            let result = typed * chf;
            resultElement.innerText = result.toFixed(2);
        }
        else {
            let result = typed * bitcoin;
            resultElement.innerText = result.toFixed(2);
        }
    });  
}


