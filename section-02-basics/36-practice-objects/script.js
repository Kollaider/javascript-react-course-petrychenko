/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    
    start: function() {
        let filmsCount;
        do {
            filmsCount = prompt('Сколько фильмов вы уже посмотрели?', '').trim();
        } while (!filmsCount || isNaN(filmsCount));
        
        this.count = Number(filmsCount);
    },
    
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const film = prompt('Один из последних просмотренных фильмов?', '').trim();
            const rating = prompt('На сколько оцените его?', '').trim();
        
            if (film && rating && film.length < 50) {
                this.movies[film] = rating;
                console.log('Данные сохранены');
            } else {
                console.log('Ошибка ввода');
                i--;
            }
        }
    },
    
    detectPersonalLevel: function() {
        if (this.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (this.count < 30) {
            console.log("Вы классический зритель");
        } else if (this.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    
    showMyDB: function() {
        if (!this.private) {
            console.log(this);
        }
    },
    
    writeYourGenres: function() {
        for (let i = 1; i <= 3; i++) {
            let genre;
            do {
                genre = prompt(`Ваш любимый жанр под номером ${i}`).trim();
            } while (!genre);
            
            this.genres[i-1] = genre;
        }
        
        this.genres.forEach((genre, index) => {
            console.log(`Любимый жанр #${index + 1} - это ${genre}`);
        });
    },
    
    toggleVisibleMyDB: function() {
        this.private = !this.private;
    }
};

// Пример использования:
personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.detectPersonalLevel();
personalMovieDB.writeYourGenres();
personalMovieDB.showMyDB();