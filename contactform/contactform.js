function submit_by_id() {
var firstname = document.getElementById("fname").value;
var lastname = document.getElementById("lname").value;
var phonenumber = document.getElementById("pnum").value;
var email = document.getElementById("email").value;
if (validation()) // Calling validation function
{
document.getElementById("form_id").submit(); //form submission
alert(" Name : " + name + " \n Email : " + email + " \n Form Id : " + document.getElementById("form_id").getAttribute("id") + "\n\n Form Submitted Successfully......");
}
}
