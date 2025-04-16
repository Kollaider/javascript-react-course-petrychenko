"use strict";

/*
Разница между атрибутами defer и async при загрузке скриптов:

=== defer ===
1. Скрипты с defer не блокируют парсинг HTML
2. Выполняются после построения DOM-дерева (до события DOMContentLoaded)
3. Сохраняют порядок выполнения (в порядке их объявления в HTML)
4. Идеально подходят для скриптов, зависящих от DOM

Пример использования:
<body>
    <script defer src="js/script.js"></script>
    <script defer src="js/test.js"></script>
</body>
*/

// Благодаря defer можем получить доступ к DOM элементам
const paragraphs = document.querySelectorAll('p');
console.log(paragraphs); // NodeList с найденными элементами

/*
=== async ===
1. Скрипты загружаются параллельно с парсингом HTML
2. Выполняются сразу после загрузки, не ждут DOM
3. Порядок выполнения не гарантирован (кто загрузится первым, тот и выполнится)
4. Подходят для независимых скриптов (аналитика, метрики)

Пример использования:
<body>
    <script async src="js/analytics.js"></script>
    <script async src="js/metrics.js"></script>
</body>
*/

/*
Динамическая загрузка скриптов:
1. По умолчанию динамически созданные скрипты ведут себя как async
2. Чтобы сохранить порядок выполнения, нужно явно указать async=false
*/

function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    script.async = false; // Важно для сохранения порядка выполнения
    
    // Дополнительные настройки:
    script.type = 'text/javascript';
    script.defer = true; // Можно комбинировать с async=false
    
    // Добавляем обработчики событий
    script.onload = () => console.log(`Скрипт ${src} загружен`);
    script.onerror = () => console.error(`Ошибка загрузки ${src}`);
    
    document.body.append(script);
}

// Загрузка с сохранением порядка выполнения
loadScript("js/test.js");
loadScript("js/some.js");

/*
Лучшие практики:
1. Основные скрипты - с defer в <head>
2. Независимые скрипты - с async
3. Критический код - inline перед закрывающим </body>
4. Динамические скрипты - с async=false для важного порядка

Особенности:
- Современные браузеры поддерживают module скрипты (type="module")
- Атрибут nomodule для обратной совместимости
- Для оптимальной производительности комбинируйте разные способы загрузки
*/