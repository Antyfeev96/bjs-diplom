
const myLogout = new LogoutButton();

// Выход из личного кабинета
myLogout.action = () => {
    ApiConnector.logout(response => {
        if (response.success) {
            location.reload();
        }
})}


// Получение информации о пользователе
ApiConnector.current(response => {
    if (response.success) {
        ProfileWidget.showProfile(response.data);
    }
})

// Получение текущих курсов валюты

const actualValues = new RatesBoard();
giveValues = () => ApiConnector.getStocks(response => {
        if (response.success) {
            actualValues.clearTable();
            actualValues.fillTable(response.data);
        }
    })


setInterval(giveValues(), 60000);

// Операции с деньгами

const manager = new MoneyManager();

manager.addMoneyCallback = data => {
    ApiConnector.addMoney(data, response => {
      if (response.success) {
          ProfileWidget.showProfile(response.data);
          manager.setMessage(response.success, `Вы успешно добавили ${data.amount} ${data.currency}`);
      } else {
          manager.setMessage(response.success, response.error);
      }
    }
)}

manager.conversionMoneyCallback = data => {
    ApiConnector.convertMoney(data, response => {
      if (response.success) {
          ProfileWidget.showProfile(response.data);
          manager.setMessage(response.success, "Конвертация выполнена успешно");
      } else {
        manager.setMessage(response.success, response.error);
      }
    }
)}

manager.sendMoneyCallback = data => {
    ApiConnector.transferMoney(data, response => {
      if (response.success) {
          ProfileWidget.showProfile(response.data);
          manager.setMessage(response.success, "Cредства успешно переведены.");
      } else {
          manager.setMessage(response.success, response.error);
      }
    }
)}

// Работа с избранным 

const myFavorites = new FavoritesWidget();

ApiConnector.getFavorites(response => {
    if (response.success) {
        myFavorites.clearTable();
        myFavorites.fillTable(response.data);
        manager.updateUsersList(response.data);
    }
})

myFavorites.addUserCallback = data => {
    ApiConnector.addUserToFavorites(data, response => {
    if (response.success) {
        myFavorites.clearTable();
        myFavorites.fillTable(response.data);
        manager.updateUsersList(response.data);
        myFavorites.setMessage(response.success, "Пользователь успешно добавлен в избранное!");
    } else {
        myFavorites.setMessage(response.success, response.error);
    }
    
})
}

myFavorites.removeUserCallback = data => {
    ApiConnector.removeUserFromFavorites(data, response => {
    if (response.success) {
        myFavorites.clearTable();
        myFavorites.fillTable(response.data);
        manager.updateUsersList(response.data);
        myFavorites.setMessage(response.success, "Пользователь успешно удален.");
    } else {
        myFavorites.setMessage(response.success, response.error);
    }
    
})
}