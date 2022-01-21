username = document.getElementById('username')
password = document.getElementById('password') 

function masuk () {
    
    if(username.value == "admin" && password.value == "admin")
    {
        alert('Berhasil login !')
        window.location = "admin.html";
    } else {
        alert('Login gagal')

        if(username.value != "admin" ){
    
            document.getElementById("username").style.borderColor = "red"
            document.getElementById("peringatan").innerHTML = "Isi dengan benar"
        } else {
            
            document.getElementById("username").style.borderColor = ""
            document.getElementById("peringatan").innerHTML = ""
        }
        
    }

    if(password.value != "123" ){
    
        document.getElementById("password").style.borderColor = "red"
        document.getElementById("danger").innerHTML = "Isi dengan benar"
    } else {
        
        document.getElementById("password").style.borderColor = ""
        document.getElementById("danger").innerHTML = ""
    }
    
}


