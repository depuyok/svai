const boxSoc = document.querySelector('#income-soc');
const boxSchweller = document.querySelector('#income-schweller');
const boxDiagonalstrebe = document.querySelector('#income-diagonalstrebe');
const boxSocDop = document.querySelector('#dop-income-soc');

const inputs = document.querySelectorAll('input');

const radioSvaiOs = document.querySelectorAll('input[name="svai_1"]');
const radioSvaiDop = document.querySelectorAll('input[name="dop-svai_1"]');

const totalPriceElement = document.querySelector('#total-price');



const strToNum = str => str.value ? parseInt(str.value) : 0

//const countingAvailableMoney = () => {
    function calculate() {
        let totalSchDi = (strToNum(boxSchweller) * 100) + ( strToNum(boxDiagonalstrebe) * 250);


        


    for (const radio of radioSvaiOs) {
        if (radio.checked) {
            totalPrice = strToNum(boxSoc) * parseInt(radio.value);
        }
    }
    for (const radio of radioSvaiDop) {
        if (radio.checked) {
            totalPrice = totalPrice + (strToNum(boxSocDop) * parseInt(radio.value));
        }
    }



    totalPrice = totalSchDi + totalPrice;
   //totalPriceElement.innerText = totalPrice;
   const formatter = new Intl.NumberFormat('ru');
    totalPriceElement.innerText = formatter.format(totalPrice);


    
}

calculate();

//for(input of inputs) {
//    input.addEventListener('input', () => {
//        countingAvailableMoney();
//    })
//}
for (const input of inputs) {
    input.addEventListener('input', function () {
        calculate();
    })
}
