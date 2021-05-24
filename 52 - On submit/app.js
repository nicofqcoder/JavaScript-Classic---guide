function validate(){
    var name = document.getElementById("txtName").value;
    var surname = document.getElementById("txtSurname").value;

    if(name.length < 1){
        return false;
    }

    if(surname.length < 1){
        return false;
    }

    return true;
}