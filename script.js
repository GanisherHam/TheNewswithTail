const burger = document.querySelector(`.burger`),
    exit = document.querySelector(`.exit`),
    list = document.querySelector(`.header-list`),
    exic = document.querySelector(`.exic`),
    doted = document.querySelector(`._dote`),
    spanOpen = document.querySelector(`.span-open`),
    descr = document.querySelector(`.description`);


burger.addEventListener(`click`, () => {
    list.classList.add(`_active`);
    document.body.style.overflow = `hidden`;
})

exit.addEventListener(`click`, () => {
    list.classList.remove(`_active`);
    document.body.style.overflow = ``;
})

exic.addEventListener(`click`, () => {
    doted.classList.remove(`swip`);
    spanOpen.innerHTML = `...`;
    descr.style.marginBottom = ``;
})

spanOpen.addEventListener(`click`, () => {
    doted.classList.add(`swip`);
    spanOpen.innerHTML = ``;
    descr.style.marginBottom = `200px`;
})

