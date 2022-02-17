


let formField = document.querySelector(".js-currency");
let firstElement = document.querySelector(".js-currency__input");
let secondElement = document.querySelector(".js-currency__input2");
let tirdElement = document.querySelector(".js-currency__input3");
let forthElement = document.querySelector(".js-currency__input4")
let btn = document.querySelector(".js-button");
let typevalue = document.querySelector(".currencyLable2__input");
let resultElement = document.querySelector(".currency__result1");






let rate = [4.02, 4.55, 4.34, 270870];




formField.addEventListener("submit", (event) => {
    event.preventDefault();
    let typed = typevalue.value;
    let uds = rate[0];
    let euro = rate[1];
    let chf = rate[2];
    let bitcoin = rate[3];

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

