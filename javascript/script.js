function startGame() {
    let userName = document.getElementById('fullName').value;
    let password = document.getElementById('password').value;
    
    if (userName == 'abcd' && password == '1234') {
        window.location.replace('../soduku project/gamePage.html');
    }
    if (userName != 'abcd') {


        document.getElementById('changeName').innerHTML = 'Name should be abcd';
    }
    if (password != '1234') {
        document.getElementById('changePass').innerHTML = 'Password should be 1234';
    }
}