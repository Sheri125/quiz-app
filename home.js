const data = JSON.parse(localStorage.getItem("user"));
let Username = document.getElementById('name');
let ImageProfile = document.getElementById('img');

const showData = () => {
    const { username, userProfile } = data;
    console.log(userProfile)
    Username.innerText = username;
    ImageProfile.src = userProfile;
}
showData();

const logout = () => {
    localStorage.clear();

    
    setTimeout(() => {
        // loader.style.display = "none";
    window.location.href = "..signin.html"
      }, 1500);
}
