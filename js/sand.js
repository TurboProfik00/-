let plus = document.querySelector(`#plus`);
let minus = document.querySelector(`#minus`);
let tovar = document.querySelector(`#tovar`);
let chislo = 0

plus.addEventListener(`click`, function() {
    tovar.innerHTML = chislo + 1
    chislo = chislo + 1
});

minus.addEventListener(`click`, function() {
    tovar.innerHTML = chislo - 1
    chislo = chislo - 1
})