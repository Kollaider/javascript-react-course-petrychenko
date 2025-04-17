'use strict';

const id = Symbol('id');

const user = {
    name: 'Alex',
    surname: 'Smith',
    birthday: '20/04/1993',
    id: '123', // обычное свойство
    [id]: 'symbolId', // свойство с Symbol в качестве ключа
    showPublicData: function() {
        console.log(`${this.name} ${this.surname}`);
    }
};

/*
Флаги свойств объекта:
1. writable - можно ли изменять значение свойства
2. enumerable - будет ли свойство перечисляться в циклах
3. configurable - можно ли удалять свойство и менять его флаги
*/

// 1. Получение дескриптора свойства
console.log(Object.getOwnPropertyDescriptor(user, 'name'));
/*
{
  value: "Alex",
  writable: true,
  enumerable: true,
  configurable: true
}
*/

// 2. Изменение флагов свойства
Object.defineProperty(user, 'name', {writable: false});
// user.name = 'New'; // Ошибка в strict mode (writable: false)

// 3. Добавление нового свойства с флагами
Object.defineProperty(user, 'gender', {value: 'male'});
console.log(Object.getOwnPropertyDescriptor(user, 'gender'));
/*
{
  value: "male",
  writable: false,    // по умолчанию false при defineProperty
  enumerable: false,  // по умолчанию false при defineProperty
  configurable: false // по умолчанию false при defineProperty
}
*/

// 4. Скрытие метода от перечисления
Object.defineProperty(user, 'showPublicData', {enumerable: false});
for (let key in user) console.log(key); // showPublicData не выводится

// 5. Пример системного неизменяемого свойства
console.log(Object.getOwnPropertyDescriptor(Math, 'PI'));
/*
{
  value: 3.141592653589793,
  writable: false,
  enumerable: false,
  configurable: false
}
*/

// 6. Массовое изменение свойств
Object.defineProperties(user, {
    name: {writable: false},
    surname: {writable: false}
});

// 7. Методы контроля объектов
Object.preventExtensions(user); // Запрещает добавление новых свойств
Object.seal(user);             // Запрещает добавление/удаление свойств (configurable: false)
Object.freeze(user);           // Запрещает любые изменения (writable: false, configurable: false)

// Проверочные методы
console.log(Object.isExtensible(user)); // false
console.log(Object.isSealed(user));     // true
console.log(Object.isFrozen(user));     // true

// 8. Работа со Symbol свойствами
console.log(Object.getOwnPropertyDescriptor(user, id));
/*
Даже если явно установить флаги в true, Symbol свойства:
- Всегда неперечисляемы (enumerable: false)
- Не участвуют в Object.keys(), for..in и т.д.
*/

// 9. Полезные методы работы с объектами
console.log(Object.keys(user));      // Только перечисляемые свойства
console.log(Object.values(user));    // Значения перечисляемых свойств
console.log(Object.entries(user));   // Пары [ключ, значение]
console.log(Object.assign({}, user)); // Копирование объекта

/*
Лучшие практики:
1. Используйте defineProperty для точного контроля свойств
2. Для "защищенных" объектов применяйте seal/freeze
3. Symbol свойства всегда неперечисляемы
4. Для итерации по всем свойствам (включая Symbol) используйте:
   - Object.getOwnPropertyNames() + Object.getOwnPropertySymbols()
5. Для копирования объектов предпочитайте spread оператор {...obj}
   или Object.assign({}, obj)
*/