
function personal() {
    //Calling id and store in variable
    var name = document.getElementById('Firstname').value;
    var last = document.getElementById('Lastname').value;
    var out = document.getElementById('Output');
    var out1 = document.getElementById('Output1');


    //This is output method
    out.innerHTML = "Lastname: " + last;
    out1.innerHTML = "Firstname: " + name;
}