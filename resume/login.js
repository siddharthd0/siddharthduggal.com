function checkPswd() {
        var confirmPassword = "admin";
        var password = document.getElementById("pswd").value;
        if (password == confirmPassword) {
             window.location="resume.html";
        }
        else{
            alert("sorry! password was incorrect, please try again :)");
        }
    }