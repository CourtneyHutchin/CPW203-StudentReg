var Student = (function () {
    function Student() {
    }
    return Student;
}());
var stu = new Student();
stu.firstName = "Joe";
var fName = stu.firstName;
stu.address = "123 fake street";
var programAttr = "data-program";
window.onload = main;
function main() {
    var regBtn = document.querySelector("button");
    regBtn.onclick = processForm;
}
function processForm() {
    var nextStu = getStudentFromForm();
    displayStudent(nextStu);
    clearForm();
}
function displayStudent(s) {
    var newItem = document.createElement("li");
    newItem.innerText = s.firstName + " " + s.lastName;
    var displaySection = document.querySelector("#student-list");
    var list = displaySection.querySelector("ul");
    newItem.setAttribute(programAttr, s.program);
    newItem.setAttribute("data-address", s.address);
    newItem.setAttribute("data-birthdate", s.dateOfBirth.toString());
    console.log(newItem);
    newItem.onclick = showStudentData;
    list.appendChild(newItem);
}
function showStudentData() {
    var currListItem = this;
    var name = currListItem.innerText;
    var program = currListItem.getAttribute(programAttr);
    var h2 = document.querySelector("#display > h2");
    h2.innerHTML = name;
    var p = document.querySelector("#display > p");
    p.innerHTML = name + " is studying " + program;
}
function getStudentFromForm() {
    var tempStu = new Student();
    tempStu.firstName = getInputValue("first-name");
    tempStu.lastName = getInputValue("last-name");
    tempStu.dateOfBirth = new Date(getInputValue("dob"));
    tempStu.address = getInputValue("address");
    tempStu.program = getInputValue("program");
    console.log(tempStu);
    return tempStu;
}
function getInputValue(id) {
    var elem = document.getElementById(id);
    return elem.value;
}
