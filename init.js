window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('middleNameOutput').innerText = initPerson.middleName;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('birthYearOutput').innerText = initPerson.yob + ' ' + 'г.';
    document.getElementById('birthMonthOutput').innerText = initPerson.mob;
    document.getElementById('birthDayOutput').innerText = initPerson.dob;
    document.getElementById('occupationOutput').innerText = initPerson.occup;
};

let btnGen = document.getElementById('myBtn1');
btnGen.addEventListener('click', window.onload);

let btnClear = document.getElementById('myBtn2');
btnClear.addEventListener('click', clear);
function clear () {
    document.getElementById('firstNameOutput').innerText = "Генерация имени";
    document.getElementById('surnameOutput').innerText = "Генерация фамилии";
    document.getElementById('middleNameOutput').innerText = "Генерация отчества";
    document.getElementById('genderOutput').innerText = "Генерация пола";
    document.getElementById('birthYearOutput').innerText = "года рождения";
    document.getElementById('birthMonthOutput').innerText = "месяца";
    document.getElementById('birthDayOutput').innerText = "Генерация дня";
    document.getElementById('occupationOutput').innerText = "Генерация профессии";
}
 