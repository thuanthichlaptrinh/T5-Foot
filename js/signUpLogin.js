//Signup && Login Form

// Chuyen doi qua lai SignUp & Login
const logregBox = document.querySelector('.logreg-box');
const loginLink = document.querySelector('.login-link');
const signUpLink = document.querySelector('.signup-link');

signUpLink.addEventListener('click', () => {
    logregBox.classList.add('active');
    document.querySelector('.form-description').innerHTML = "Đăng ký thành viên để mua hàng và nhận những ưu đãi đặc biệt từ chúng tôi ";
    document.querySelector('.sign-login-title').innerHTML = "Đăng ký";
    document.querySelector('.login-form').style.display = 'none';
    document.querySelector('.sign-up-form').style.display = '';
});

loginLink.addEventListener('click', () => {
    logregBox.classList.remove('active');
    document.querySelector('.form-description').innerHTML = "Đăng nhập thành viên để mua hàng và nhận những ưu đãi đặc biệt từ chúng tôi";
    document.querySelector('.sign-login-title').innerHTML = "Đăng nhập";
    document.querySelector('.sign-up-form').style.display = 'none';
    document.querySelector('.login-form').style.display = '';
});

// kiem tra link
window.onload = showPage();

function showPage() {
    let functionID = new URLSearchParams(window.location.search).get('id');
    if (functionID == 'signup') {
        logregBox.classList.add('active');
        document.querySelector('.form-description').innerHTML = "Đăng ký thành viên để mua hàng và nhận những ưu đãi đặc biệt từ chúng tôi ";
        document.querySelector('.sign-login-title').innerHTML = "Đăng ký";
    }
}

// Chức năng đăng ký
let signupButton = document.getElementById('signup-button');
let loginButton = document.getElementById('login-button');
signupButton.addEventListener('click', () => {
    let user = {
        fullname: 'Demo',
        phone: "0783374678",
        password: "123456",
        address: '',
        email: '',
        status: 1,
        join: new Date(),
        cart: [],
        userType: 0
    };
    if (confirm("Bạn có chắc chắn muốn đăng ký tài khoản ?") == true) {
        localStorage.setItem('currentuser', JSON.stringify(user));
        toast({ title: 'Thành công', message: 'Tạo thành công tài khoản !', type: 'success', duration: 3000 });
        setTimeout(() => {
            window.location.replace('./index.html');
        }, 1500);
    }

})


function checkAdmin() {
    let user = JSON.parse(localStorage.getItem('currentuser'));
    if (user && user.userType == 1) {
        window.location.replace('./admin.html');
    }
}

// Dang nhap
loginButton.addEventListener('click', () => {
    let user = {
        fullname: 'Demo',
        phone: "0783374678",
        password: "123456",
        address: '',
        email: '',
        status: 1,
        join: new Date(),
        cart: [],
        userType: 0
    };
    localStorage.setItem('currentuser', JSON.stringify(user));
    toast({ title: 'Success', message: 'Đăng nhập thành công', type: 'success', duration: 3000 });
    setTimeout(() => {
        window.location.replace('./index.html');
    }, 1500);
})