function checkPswd() {
        var confirmPassword = "007pphead";
        var password = document.getElementById("pswd").value;
        if (password == confirmPassword) {
             window.location="resume.html";
        }
        else{
            alert("sorry! password was incorrect, please try again :)");
        }
    }