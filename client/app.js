const SERVERURL = "http://127.0.0.1:5000"

function handleLogin(response) {
    // Google returns a JWT credential aka ID token
    console.log(response)
    //localStorage.setItem("token", response.credential);
}

function onLinkAdsAccount() {
    token = localStorage.getItem("token");
    window.location.href = `${SERVERURL}/authorize?token=${token}`;
}