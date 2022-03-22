//GLOBAL VARIABLES
let id
let Fname
let ext
let email
let department
let submit

//HELPER FUNCTION 
const $ = (id) => document.getElementById(id)

//GET ELEMENTS FROM THE DOM
id = $('id')
Fname = $('name')
ext = $('ext')
email = $('email')
department = $('department')
submit = $('submit')

//GET TEXTBOX VALUES
submit.addEventListener('click', (e) => {
    e.preventDefault()
    console.log(`ID: ${id.value}`)
    console.log(`Name: ${Fname.value}`)
    console.log(`Extension: ${ext.value}`)
    console.log(`Email: ${email.value}`)
    console.log(`Department: ${department.value}`)
})