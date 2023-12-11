let index = 0;
function ShowData() {
  let val = document.getElementsByClassName("inputs");
  console.log(val[0].value + " " + val[1].value + " " + val[2].value);
}
function click() {
  console.log(index);
  index++;
}
let childrenArr = [];
function CreateHead() {
  const firstname = document.querySelector("#firstname");
  const lastname = document.querySelector("#lastname");
  const age = document.querySelector("#age");
  const numberofchildern = document.querySelector("#numberOfChildren");
  createheadline(
    firstname.value,
    lastname.value,
    age.value,
    numberofchildern.value
  );
  creatinput(numberofchildern.value);
  addtoarray(
    firstname.value,
    lastname.value,
    age.value,
    numberofchildern.value
  );
  firstname.value = "";
  lastname.value = "";
  age.value = "";
  numberofchildern.value = "";
}
function createheadline(firstname, lastname, age, numberofchildern) {
  let head = document.CreateHead("h1");
  head.innerHTML =
    firstname + " " + lastname + " " + age + " " + numberofchildern;
  document.body.appendChild(head);
}
function creatinput(numberofchildern) {
  let newDiv;
  if (i == 0) {
    newDiv = document.createElement("div");
    newDiv.className = "children";
    newDiv.id = "inputsDiv";
    document.body.appendChild(newDiv);
  }
  const newInput = document.createElement("input");
  newInput.placeholder = "Child " + (i + 1);
  newDiv.appendChild(newInput);
}
function addtoarray(firstname, lastname, age, numberofchildern) {
  const person = {
    firstname: firstname,
    lastname: lastname,
    age: age,
    numberofchiuldern: numberofchildern,
  };
  childrenArr.push(person);
}
let arruser = [];
function SendForm() {
  let form = document.forms["myform"];
  let firstname = form.elements["firstname"];
  let lastname = form.elements["lastname"];
  let age = form.elements["age"];
  alert(firstname.value + " " + lastname.value + " " + age.value);
  if (firstname.value.length <= 1) {
    ShowError();
  } else {
    removeError();
    let user = {
      firstname: firstname.value,
      lastname: lastname.value,
      age: age.value,
    };
    alert(firstname.value + " " + lastname.value + " " + age.value);
    arruser.push(user);
    alert(
      arruser[0].firstname + " " + arruser[0].lastname + " " + arruser[0].age
    );
  }
}
function ShowError() {
  let p = document.querySelector("#errorp");
  p.innerHTML = "First name invalde!!!";
  p.style.color = "red";
}
function removeError() {
  p.innerHTML = "";
}
