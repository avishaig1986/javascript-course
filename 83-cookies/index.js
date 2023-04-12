console.log(navigator.cookieEnabled)


//document.cookie = "firstName=Patrick; expires=Sun, 1 January 2030 12:00:00 UTC; path=/"
//document.cookie = "lastName=Star; expires=Sun, 1 January 2030 12:00:00 UTC; path=/"

console.log(document.cookie)

setCookie("firstName2", "SpongeBob", 365)


function setCookie(name, value, daysToLive){
    const date = new Date()
    date.setTime(date.getTime() + (daysToLive * 24 * 60 * 60 * 1000))
    let expires = "expires=" + date.toUTCString();
    document.cookie = `${name}=${value}; ${expires}; path=/ `
}

function deleteCookie(name){
    setCookie(name, null, null);

}

function getCookie(name){
    const cDecoded = decodeURIComponent(document.cookie);
    console.log(cDecoded)
}