const $ = (id) => document.getElementById(id);

let id = $("id");

let name = $("name");

let ext = $("ext");

let email = $("email");

let department = $("department");

let empForm = $("empForm");

 

empForm.addEventListener('submit', (e) => {

  e.preventDefault();

  console.log(`ID: ${id.value}`);

  console.log(`Name: ${name.value}`);

  console.log(`Extension: ${ext.value}`);

  console.log(`Email: ${email.value}`);

  console.log(`Department: ${department.value}`);

})