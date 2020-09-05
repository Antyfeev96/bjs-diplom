
const myLogout = new LogoutButton();


// Выход из личного кабинета
myLogout.action = () => {
    ApiConnector.logout(() => {
        if (ApiConnector._parseResponseBody(response)) {
            location.reload();
        }
})}


// Получение информации о пользователе
ApiConnector.current(() => {
    if (ApiConnector._parseResponseBody(response)) {
        enter
    }
})

// Получение текущих курсов валюты

const actualValues = new RatesBoard();

giveValues = () => {
    ApiConnector.getStocks(() => {
        if (ApiConnector._parseResponseBody(response)) {
            actualValues.clearTable();
            actualValues.fillTable(data);
        }
    })
}

giveValues();

setInterval(giveValues, 60000);
