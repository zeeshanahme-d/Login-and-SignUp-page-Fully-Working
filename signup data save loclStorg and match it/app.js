const loginPage = document.getElementById('loginPage');
const signUpPage = document.getElementById('signupPage');
const signUpBtn = document.getElementById('signupBtn');
const loginBtn = document.getElementById('loginBtn');
const loginEmail = document.getElementById('loginEmail');
const loginPassword = document.getElementById('loginPass')
const signUpEmail = document.getElementById('signupEmail');
const signUpPassword = document.getElementById('signPass');
const homepage = document.getElementById('indexPage');




signUpBtn.addEventListener('click', function signupValue() {
    var email = signUpEmail.value;
    var password = signUpPassword.value;
    var test = /^([0-9a-zA-Z]([-\.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/
    if (test.test(email) && password.length >= 6) {
      localStorage.setItem('signupEmail', email);
        localStorage.setItem('signupPass', password);
        showLoginPage()
    } else {
        swal("Error;", "...Plz Enter A Valid Email and Password :: Password must be at least 6 characters")
        signUpEmail.value = '';
        signUpPassword.value = '';
    }
})



loginBtn.addEventListener('click', function loginValue() {
    var email = loginEmail.value;
    var password = loginPassword.value;
    emailData = localStorage.getItem('signupEmail');
    passData = localStorage.getItem('signupPass');
    console.log(`${emailData} ${passData}`);
    var test = /^([0-9a-zA-Z]([-\.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,9})$/

    if (test.test(email) && password.length >= 6) {
        if (emailData === email && passData === password) {
            console.log(`${emailData} ${passData}`);
            loginPage.style.display = 'none';
            loginEmail.value = '';
            loginPassword.value = '';
            homepage.style.display = 'block'
        }else{
            swal("User Not Found;", "...Plz Enter A Valid Email and Password or First SignUP::");
            loginEmail.value = '';
            loginPassword.value = '';
        }
    }else{
        swal("Error!", "...Plz Enter A Valid Email and Password or First SignUP::");
        loginEmail.value = '';
        loginPassword.value = '';
    }

})





let btn1 = document.getElementById('btns1');
let btn2 = document.getElementById('btns2');

function showLoginPage() {
    signUpEmail.value = '';
    signUpPassword.value = '';
    loginPage.style.display = 'block';
    signUpPage.style.display = 'none';
    btn1.style.display = 'none';
    btn2.style.display = 'none';
}

function showSignUpPage() {
    signUpPage.style.display = 'block';
    loginPage.style.display = 'none';
    btn1.style.display = 'none';
    btn2.style.display = 'none';
}

function goback() {
    loginPage.style.display = 'none';
    signUpPage.style.display = 'none';
    btn1.style.display = 'block';
    btn2.style.display = 'block';
}

function logout(){
    homepage.style.display = 'none';
    btn1.style.display = 'block';
    btn2.style.display = 'block';
}




