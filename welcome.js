if (document.cookie.includes("viewed?=44")) {
  alert("Welcome back!")
  
} else {  
  alert("Welcome To Quran Online!" )
  
}

function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}
function clearCookies(){
  
  alert("Clearing Cookies...")
  deleteAllCookies()
  console.log(document.cookie)
}
document.cookie = "viewed?=44"
