let namesymbol = /^[a-zA-Z./-_]+$/;
let surnamesymbol = /^[a-zA-Z0-9./-_]+$/;
let gmail = /[A-Za-z0-9@gmail.com]/;
let passwordsymbol = /^[0-9./]+$/;
let name = document.getElementById('name');
let surname = document.getElementById('surname');
let email = document.getElementById('email');
let password = document.getElementById('password');
let btn = document.getElementById('btn');
let nameText = document.getElementById('nametext');
let snText = document.getElementById('sntext');
let emailText = document.getElementById('emailtext');
let passwordText = document.getElementById('passwordtext');
btn.onclick = function f1 (){
    if(namesymbol.test(name.value)){
        console.log('true');
        nameText.innerHTML = ('Good job!');
        f2 ();
    } else {
        console.log('false');
        nameText.innerHTML = ('false');
        f2 ();
    }
};
function f2 (){
    if(gmail.test(email.value)){
        console.log('true');
        emailText.innerHTML = ('Good job!');
        f3 ();
    } else {
        console.log('false');
        emailText.innerHTML = ('false');
        f3 ();
    }
};
function f3 (){
    if(passwordsymbol.test(password.value)){
        console.log('true');
        passwordText.innerHTML = ('Good job!');
        f4 ();
    } else {
        console.log('false');
        passwordText.innerHTML = ('false');
        f4 ();
    }
};
function f4 (){
    if(surnamesymbol.test(surname.value)){
        console.log('true');
        snText.innerHTML = ('Good job!');
    } else {
        console.log('false');
        snText.innerHTML = ('false');
    }
};