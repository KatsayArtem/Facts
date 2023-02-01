import type DataInterface from "./DataInterface"

export const datas: Array<DataInterface> = [
    {
        background: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/800px-Svelte_Logo.svg.png',
        color: '255, 100, 50, 0.35',
        router_name: 'SVELTE',
        color_router_name: '#FF6432',
        router: '/',
        title: 'Svelte',
        text_1: 'Svelte — это принципиально новый подход к созданию пользовательских интерфейсов.',
        text_2: 'Svelte позволяет создавать более быстрые и менее ресурсоемкие приложения, при этом параллельно упрощая процесс разработки.',
        facts: ['Реактивность', 'Меньше кода', 'Без виртуального DOM', 'Компонентный подход', 'Пререндеринг', 'Реактивный по умолчанию', 'Интересные особенности синтаксиса', 'Svelte-препроцессоры',]
    },
    {
        background: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1024px-React-icon.svg.png',
        color: '97, 218, 251, 0.35',
        router_name: 'REACT',
        color_router_name: '#61DAFB',
        router: '/react',
        title: 'React',
        text_1: 'React — это самая популярная JavaScript-библиотека для создания пользовательских интерфейсов.',
        text_2: 'React был разработан Facebook в 2011 году. Его поддерживает большое сообщество с открытым исходным кодом.',
        facts: ['Функциональные компоненты', 'Маштабируемость', 'Виртуальный DOM', 'Вспомогательные функции', 'Комментарии в JSX', 'Условный рендеринг', 'Лёгкая встраиваемость TypeScript']
    },
    {
        background: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png',
        color: '247, 223, 30, 0.35',
        router_name: 'JAVASCRIPT',
        color_router_name: '#F7DF1E',
        router: '/javascript',
        title: 'JavaScript',
        text_1: 'Функциями можно оперировать, как и любыми другими элементами. Их можно привязывать к переменным и, в более поздних версиях JavaScript, даже выбрасывать как исключения.',
        text_2: 'Язык Javascript был разработан Брендоном Айком за 10 дней. Первое название Javascript был -Mochа, после переименовали на Livescript. Язык JS не принадлежит определенной компании и организаций.',
        facts: ['Самая быстрая загрузка в браузере', 'один из самых популярных языков', 'Конструктор функции', 'JavaScript это не Java']
    },
    {
        background: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png',
        color: '49, 120, 198, 0.35',
        router_name: 'TYPESCRIPT',
        color_router_name: '#3178C6',
        router: '/typescript',
        title: 'TypeScript',
        text_1: 'TypeScript позволяет быстрее и проще писать комплексные решения, которые в дальнейшем будет легче развивать и тестировать.',
        text_2: 'TypeScript помогает избавиться от типичных проблем JavaScript: ошибок типов в рантайме и неконтролируемо разрастающегося кода, сигнатуры функций которого находятся в памяти разработчика, а в худшем и вовсе утрачены.',
        facts: ['Имеет открытый исходный код', 'TypeScript - это объектно-ориентированный язык', 'Cтатическая типизация', 'Обратно совместимый']
    },
    {
        background: 'https://1000logos.net/wp-content/uploads/2021/05/GitHub-logo-2048x1152.png',
        color: '0, 0, 0, 0.15',
        router_name: 'CONTACTS',
        color_router_name: '#000000',
        router: '/contacts',
        title: 'CONTACTS',
        text_1: '',
        text_2: '',
        facts: []
    },
]