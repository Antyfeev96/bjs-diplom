"use strict";

let userForm = new UserForm();

userForm.constructor = {
    login: "oleg@demo.ru",
    password: "demo"
};

userForm.loginFormCallback = data => {
    data = userForm.constructor;
    ApiConnector.login({
        login: "oleg@demo.ru",
        password: "demo"
    });

}