import axios from "axios";

var domain = "https://localhost:44319/";
var apiRoute = "api/articles/";
var pageSize = 10;

export function GetArticleById(id, callback) {
    const data={
        Name:"name1",
        Description:"desc1"
    }
    callback(data);
    return;
}

export function GetArticlesByPage(page, callback)
{
    const data = [
        {
            Id:1,
            GraphycData:[
                    { name: '30.09.2021', 'Текущее значение': 65, "Целевое значение": 80 },
                    { name: '01.10.2021', 'Текущее значение': 66, "Целевое значение": 80 },
                    { name: '04.10.2021', 'Текущее значение': 66, "Целевое значение": 80 },
                    { name: '05.10.2021', 'Текущее значение': 73, "Целевое значение": 80 },
                    { name: '06.10.2021', 'Текущее значение': 71, "Целевое значение": 80 },
                ],
            Name:"Управление квотами. Процент заполнения квот.",
            CircleData:[
                { name: '1', value: 0 },
                { name: '2', value: 1 }
            ],
            Description:"Какой объем клиентских квот заполнен реальными заказами",
            TargetValue:">80%"
        },
        {
            Id:3,
            GraphycData:[
                    { name: '30.09.2021', 'Текущее значение': 65, "Целевое значение": 85 },
                    { name: '01.10.2021', 'Текущее значение': 66, "Целевое значение": 85 },
                    { name: '04.10.2021', 'Текущее значение': 66, "Целевое значение": 85 },
                    { name: '05.10.2021', 'Текущее значение': 73, "Целевое значение": 85 },
                    { name: '06.10.2021', 'Текущее значение': 71, "Целевое значение": 85 },
                ],
            Name:"Управление квотами. Загрузка оборудования",
            CircleData:[
                { name: '1', value: 0 },
                { name: '2', value: 1 }
            ],
            Description:"Средний уровень загрузки оборудования по критичным агрегатам за первые 14 дней горизонта",
            TargetValue:">85%"
        },
        {
            Id:4,
            GraphycData:[
                    { name: '30.09.2021', 'Текущее значение': 65, "Целевое значение": 91 },
                    { name: '01.10.2021', 'Текущее значение': 66, "Целевое значение": 91 },
                    { name: '04.10.2021', 'Текущее значение': 66, "Целевое значение": 91 },
                    { name: '05.10.2021', 'Текущее значение': 73, "Целевое значение": 90 },
                    { name: '06.10.2021', 'Текущее значение': 71, "Целевое значение": 86 },
                ],
            Name:"Календарное планирование. Плановый OTIF.",
            CircleData:[
                { name: '1', value: 0 },
                { name: '2', value: 1 }
            ],
            Description:"Процент заказов клиентов запланированных в окне обещания",
            TargetValue:">90%"
        },
        {
            Id:5,
            GraphycData:[
                    { name: '30.09.2021', 'Текущее значение': 75, "Целевое значение": 80 },
                    { name: '01.10.2021', 'Текущее значение': 74, "Целевое значение": 80 },
                    { name: '04.10.2021', 'Текущее значение': 71, "Целевое значение": 80 },
                    { name: '05.10.2021', 'Текущее значение': 80, "Целевое значение": 80 },
                    { name: '06.10.2021', 'Текущее значение': 83, "Целевое значение": 80 },
                ],
            Name:"Управление квотами. Загрузка компаний.",
            CircleData:[
                { name: '1', value: 2 },
                { name: '2', value: 3 }
            ],
            Description:"Уровень заполнения ручных кампаний при планировании",
            TargetValue:">80%"
        },
        {
            Id:2,
            GraphycData:[
                    { name: '30.09.2021', 'Текущее значение': 15, "Целевое значение": 15 },
                    { name: '01.10.2021', 'Текущее значение': 20, "Целевое значение": 15 },
                    { name: '04.10.2021', 'Текущее значение': 21, "Целевое значение": 15 },
                    { name: '05.10.2021', 'Текущее значение': 22, "Целевое значение": 15 },
                    { name: '06.10.2021', 'Текущее значение': 15, "Целевое значение": 15 },
                ],
            Name:"Календарное планирование. Нарушение уровней запасов",
            CircleData:[
                { name: '1', value: 3 },
                { name: '2', value: 2 }
            ],
            Description:"Процент случаев, когда в ближайшие 14 дней нарушается минимальный или максимальный уровень запасов на складе",
            TargetValue:"<15%"
        },
        {
            Id:6,
            GraphycData:[
                    { name: '30.09.2021', 'Текущее значение': 75, "Целевое значение": 80 },
                    { name: '01.10.2021', 'Текущее значение': 93, "Целевое значение": 80 },
                    { name: '04.10.2021', 'Текущее значение': 91, "Целевое значение": 80 },
                    { name: '05.10.2021', 'Текущее значение': 80, "Целевое значение": 80 },
                    { name: '06.10.2021', 'Текущее значение': 83, "Целевое значение": 80 },
                ],
            Name:"Комбинирование заказов. Формирование и передача комбинаций.",
            CircleData:[
                { name: '1', value: 3 },
                { name: '2', value: 2 }
            ],
            Description:"Процент создания комбинаций для заказов",
            TargetValue:"<90%"
        },
        {
            Id:7,
            GraphycData:[
                    { name: '30.09.2021', 'Текущее значение': 81, "Целевое значение": 80 },
                    { name: '01.10.2021', 'Текущее значение': 83, "Целевое значение": 80 },
                    { name: '04.10.2021', 'Текущее значение': 81, "Целевое значение": 80 },
                    { name: '05.10.2021', 'Текущее значение': 80, "Целевое значение": 80 },
                    { name: '06.10.2021', 'Текущее значение': 83, "Целевое значение": 80 },
                ],
            Name:"Графикование горячих цехов. Уровень резервирования.",
            CircleData:[
                { name: '1', value: 4 },
                { name: '2', value: 1 }
            ],
            Description:"Процент корректно зарезервированных запасов",
            TargetValue:">80%"
        }
    ]
    callback(data);
    return;
}

export function GetArticlesByCategoryId(id, page, callback)
{
    let requestUrl = domain + apiRoute + `GetArticlesPreviewsByCategory?categoryId=${id}&page=${page}&pageSize=${pageSize}`;
    axios.get(requestUrl)
    .then(function (response) {
        callback(response.data);
    })
    .catch((error) => console.warn(error));
    console.log("request sent");
}

export function GetArticlesByUserId(id, page, callback)
{
    let requestUrl = domain + apiRoute + `GetArticlesPreviewsByAuthor?authorId=${id}&page=${page}&pageSize=${pageSize}`;
    axios.get(requestUrl)
    .then(function (response) {
        callback(response.data);
    })
    .catch((error) => console.warn(error));
}

export function UpdateArticleById(articleJson, callback) {
    
    let requestUrl = domain + apiRoute + `UpdateArticleById`;
    axios.post(requestUrl, articleJson)
    .then(function (response) {
        callback(response.data);
    })
    .catch((error) => console.warn(error));
}

export function GetCategoriesByPage(page, callback)
{
    let requestUrl = domain + apiRoute + `getcategories?page=${page}&pageSize=${pageSize}`;
    axios.get(requestUrl)
    .then(function (response) {
        callback(response.data);
    })
    .catch((error) => console.warn(error));
}

export function GetUsersByPage(page, callback)
{
    let requestUrl = domain + apiRoute + `getusers?page=${page}&pageSize=${pageSize}`;
    axios.get(requestUrl)
    .then(function (response) {
        callback(response.data);
    })
    .catch((error) => console.warn(error));
}