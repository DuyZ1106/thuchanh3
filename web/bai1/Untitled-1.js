document.addEventListener('DOMContentLoaded', function() {
    // Check if cookie exists
    let username = getCookie("username");
    if (username !== "") {
        document.getElementById("greeting").innerText = "Xin chào " + username + "!";
    }

    // Add event listener for form submission
    document.getElementById("nameForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent form submission
        let name = document.getElementById("name").value;
        setCookie("username", name, 30); // Set cookie with username
        document.getElementById("greeting").innerText = "Xin chào " + name + "!";
    });
});

// Function to set a cookie
function setCookie(cname, cvalue, exdays) {
    let d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

// Function to get a cookie
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

// Function to delete the cookie
function deleteCookie() {
    document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.getElementById("greeting").innerText = "";
}
