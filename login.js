let formFields = document.querySelectorAll("form input");
const [loginEmail, loginPassword] = formFields;

const data = JSON.parse(localStorage.getItem("user"));
console.log(data, "data");

const login = (event) => {
    event.preventDefault();
    const { email, password } = data;

    if ((email === loginEmail.value) && (password === loginPassword.value)) {
        console.log("login");
        setTimeout(() => {
            window.location.href = '../home.html';
        }, 2000);
    } else {
        alert("Invalid Credentials");
    }
};

// Form submit event listener
document.querySelector("form").addEventListener("submit", login);
