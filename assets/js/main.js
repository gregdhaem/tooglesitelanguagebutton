const frBtn = document.querySelector('.fr-btn')
const enBtn = document.querySelector('.en-btn')

const langFr = document.querySelector('.fr')
const langEn = document.querySelector('.en')

let defaultFrLang = false

function toggleLanguage() {
    if(!defaultFrLang) {
        // Display FR Button
        frBtn.style.display = "block"
        enBtn.style.display = "none"
        // Display Text in English
        langFr.style.display = 'none'
        langEn.style.display = 'block'

        defaultFrLang = true;
    }
    else {
        // Display EN Button
        frBtn.style.display = "none"
        enBtn.style.display = "block"
        // Display Text en French
        langFr.style.display = 'block'
        langEn.style.display = 'none'

        defaultFrLang = false;
    }
}