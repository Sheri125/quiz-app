let formFeild = document.querySelectorAll("form input");

const [userName, userEmail, userPassword,ConfirmPassord, userPic] = formFeild;

console.log(userName, userEmail, userPassword,ConfirmPassord);

let imgUrl;

const signup = ()=>{
    event.preventDefault();

    if(userName.value !== ""&& userEmail.value !== "" && userPassword.value !== "" && ConfirmPassord.value !== ""){
   let  obj = {
    email: userEmail.value,
    password: userPassword.value,
    username: userName.value,
    ConfirmPassord : ConfirmPassord.value,
    userProfile: imgUrl,
   }
   localStorage.setItem("user", JSON.stringify(obj));
        window.location.href = '../login.html'
    }
    else{
        alert('pleas fill the all field')
    }
}

console.log(window.location.href , 'window.location.href')

const uploadImage = () => {
    let img = userPic.files[0];
    console.log(userPic, img);
    let fileRead = new FileReader();
    console.log(fileRead)
    fileRead.onload = () => {
        imgUrl = fileRead.result;
        console.log(fileRead.result,"fileRead.result");
    }
    fileRead.readAsDataURL(img)
}



