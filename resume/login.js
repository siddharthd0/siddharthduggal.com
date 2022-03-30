function checkPswd() {
        var confirmPassword = "sadikIsNoobXd";
        var password = document.getElementById("pswd").value;
        if (password == confirmPassword) {
             window.location="resume.html";
        }
        else{
            alert("sorry! password was incorrect, please try again :)");
        }
    }