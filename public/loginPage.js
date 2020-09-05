"use strict";

let enter = new UserForm();

enter.loginFormCallback = ({login, password}) => {
    ApiConnector.login({
        login,
        password,
    }, response => console.log(response));
    console.log(`Логин: ${login} Пароль: ${password}`);
    if (ApiConnector._parseResponseBody(response)) {
        location.reload();
    } else {
        throw new Error("Неудачная попытка авторизации");
    }
}


enter.registerFormCallback = ({login, password}) => {
    ApiConnector.register({
        login,
        password,
    }, response => console.log(response));
    console.log(`Логин: ${login} Пароль: ${password}`);
    if (ApiConnector._parseResponseBody(response)) {
        location.reload();
    } else {
        throw new Error("Неудачная попытка регистрации");
    }
}