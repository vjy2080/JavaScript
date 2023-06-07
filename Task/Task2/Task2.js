function login() {

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var birthdate = document.getElementById("birthdate").value;
    var phone = document.getElementById("phone").value;
    var email = document.getElementById("email").value;
    console.log("username => " + username)
    console.log("password => " + password)
    console.log("birthdate => " + birthdate)
    console.log("phone => " + phone)
    console.log("email => " + email)

    if (username == "") {
        document.getElementById("usernameerror").innerText = "Username required"
    } else {
        document.getElementById("usernameerror").innerText = ""
    }

    if (password == "") {
        document.getElementById("passworderror").innerText = "Password required"
    }

    else {
        document.getElementById("passworderror").innerText = ""
    }

    if (birthdate == "") {
        document.getElementById("birthdateerror").innerText = "Birth date required"
    } else {
        document.getElementById("birthdateerror").innerText = ""
    }

    if (phone == "") {
        document.getElementById("phoneerror").innerText = "Phone No. required"
    } else {
        document.getElementById("phoneerror").innerText = ""
    }

    if (email == "") {
        document.getElementById("emailerror").innerText = "Email required"
    }

    else {
        document.getElementById("emailerror").innerText = ""
    }

}