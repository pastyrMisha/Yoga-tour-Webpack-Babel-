function calc() {
    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total');

    totalValue.innerHTML = 0;

    function calc() {
        let multiplier = place.options[place.selectedIndex].value,
            personsValue = +persons.value,
            restDaysValue = +restDays.value;
        if (+personsValue > 0 && +restDaysValue > 0) {
            totalValue.innerHTML = (personsValue + restDaysValue) * 4000 * multiplier;
        } else {
            totalValue.innerHTML = 0;

        }

    };

    persons.addEventListener('change', () => calc());
    restDays.addEventListener('change', () => calc());
    place.addEventListener('change', () => calc());
}

module.exports = calc;