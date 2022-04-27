function checkPswd() {
        var confirmPassword = "resumepassword39";
    // imagine viewing the source code to get the password, wowoowowow. but whatever idrc
        var password = document.getElementById("pswd").value;
        if (password == confirmPassword) {
             window.location="resume.html";
        }
        else{
            alert("Sorry! The password was incorrect, please try again or contact Siddharth for a new password.");
        }
    }