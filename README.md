# Задание 4

Выполнить верстку страницы вакансии

[Ссылка на макет](https://www.figma.com/file/AyVCs1fzbJhhBsy4L8mKBa/%D0%A1%D1%82%D0%B0%D0%B6%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0---%D0%97%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-4?type=design&node-id=0%3A1&mode=design&t=olJFS2i67ctGl2jE-1)  
**Срок выполнения: 1 неделя**

1) С помощью [fetch API](https://developer.mozilla.org/ru/docs/Web/API/Fetch_API/Using_Fetch) получить информацию о текущем количестве просмотров и откликов на вакансию  
Для этого необходимо выполнить GET запрос по адресу `/stats` и значения из полученного объекта вставить в соответствующие элементы верстки
   - Ожидаемый ответ от сервера:
     ```json
     {
         "views": 123,
         "responses": 12
     }
     ```

2) С помощью [fetch API](https://developer.mozilla.org/ru/docs/Web/API/Fetch_API/Using_Fetch) выполнить отправку формы и обработать полученный ответ от сервера
    - **Форма должна отправляться без перезагрузки страницы**
    - Необходимо отправить POST запрос по адресу `/form`, полученное сообщение о сервера вывести под формой для информирования пользователя
    - Если сервер вернул ошибку (Статус 422), то текст сообщения сделать красным, если получен успех (Статус 200) - зелёный цвет
    - Необходимо отправить объект с двумя полями: `email`(string) и `confirm`(boolean).   
      Например:
      ```js
      {
          email: "test@gmail.com",
          confirm: true  
      }
      ``` 

В текущем задании все запросы направляются к локальному серверу, в сборке которого заранее прописана обработка запросов  
    
> Дополнительно:
> 
> Ответ от сервера возвращается с задержкой 5с  
> На время ожидания ответа, реализовать визуальное отображение загрузки данных в виде любого из [лоадеров](https://codepen.io/vineethtrv/pen/NWxZqMM?editors=1100)

## Работа с компонентами

### Создание компонента

Для генерации pug, scss, js файлов компонента необходимо ввести команду:
```shell
npm run component:create [название-компонента]
```
**[название-компонента]** - произвольное название компонента, записанное латиницей  

Например:
```shell
npm run component:create example-button
```
Таким образом в папке `src/components` будет создана папка `example-button` с готовыми для работы pug, scss, js файлами внутри.  
Все созданные файлы будут добавлены в сборщик автоматически

> Для инициализации js-скриптов компонентов необходимо вручную добавить импорт в файл `/src/app/js/common.js` и добавить созданный компонент в объект `allComponents`

### Удаление компонента
Для удаления существующего компонента необходимо ввести команду:
```shell
npm run component:remove [название-компонента]
```
**[название-компонента]** - произвольное название компонента, записанное латиницей

Например:
```shell
npm run component:remove example-button
```
Таким образом в папке `src/components` будет удалена папка `example-button`  
Все pug, scss файлы, относящиеся к компоненту будут удалены из сборщика автоматически

## Работа с проектом

### Требования к системе
- Node.js (v.16+)
- npm (v.7+)

### Запуск проекта
1) Установить зависимости
    ```shell
    npm i
    ```
2) Запустить локальную dev-сборку
    ```shell
    npm run dev
    ```
    Запущенный локальный сервер будет доступен в браузере по адресу [localhost:3000](http://localhost:3000/)

### Краткое описание файловой структуры
```
/
├── build_modules
└── src
    ├── app
    │   ├── js
    │   │   └── base
    │   └── common.js
    ├── assets
    │   ├── fonts
    │   ├── icons
    │   ├── images
    │   └── videos
    ├── components
    └── pages
```
- `build_modules` - служебная директория, необходимая для сборки и запуска проекта. **В рамках задания изменять содержимое папки нельзя**
- `src` - основная рабочая директория, содержащая исходный код проекта
- `src/app` - директория, содержащая основные файлы приложения
- `src/app/js` - директория, содержащая основную логику приложения
- `src/app/common.js` - основной js-файл, точка входа для всех скриптов приложения
- `src/app/base` - директория для хранения базовых js-классов
- `src/assets` - необязательная директория для хранения статичных ресурсов (шрифты, изображения, видео, иконки)
- `src/components` - директория для хранения исходного кода компонентов. Каждый компонент располагается в отдельной папке и может состоять из pug, scss и ts файлов
- `src/pages` - директория для хранения статичных страниц
