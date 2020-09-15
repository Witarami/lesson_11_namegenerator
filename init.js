
function generate() {
  const initPerson = personGenerator.getPerson();
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('middleNameOutput').innerText = initPerson.middleName;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('dayBirthOutput').innerText = initPerson.DayBirth;
    document.getElementById('monthBirthOutput').innerText = initPerson.monthBirth;
    document.getElementById('birthYearOutput').innerText = initPerson.birthYear;
    document.getElementById('professionOutput').innerText = initPerson.profession;
}

window.addEventListener("load", () => {
  generate();
});

document.querySelector("#generate").addEventListener("click", () => {
  generate();
});

document.querySelector("#reset").addEventListener("click", () => {
  document.getElementById("surnameOutput").innerText = "генерация";
  document.getElementById("firstNameOutput").innerText = "";
  document.getElementById("middleNameOutput").innerText = "";
  document.getElementById("genderOutput").innerText = "Генерация пола";
  document.getElementById('dayBirthOutput').innerText = "";
  document.getElementById('monthBirthOutput').innerText = "";
  document.getElementById('birthYearOutput').innerText = "";
  document.getElementById('professionOutput').innerText = "генерация";
});
  