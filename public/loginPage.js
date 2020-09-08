"use strict";

let userLog = new UserForm();

userLog.loginFormCallback = ({login, password}) => {
    ApiConnector.login({
        login,
        password,
    }, response => {
        if (response.success) {
            location.reload();
        } else {
            userLog.setLoginErrorMessage(response.error);
        }
      });
    console.log(`Логин: ${login} Пароль: ${password}`);  
}


userLog.registerFormCallback = ({login, password}) => {
    ApiConnector.register({
        login,
        password,
    }, response => {
        if (response.success) {
            location.reload();
        } else {
            userLog.setRegisterErrorMessage(response.error);
        }
    });
    console.log(`Логин: ${login} Пароль: ${password}`);
}