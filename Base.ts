// Подтип(suptype) - не может наследовать у Надтипа(supertype), хотя Надтип может наследовать у Подтипа
// Супертип — это родительский узел в иерархии типов, а подтип — дочерний. 
// Например, если есть супертип «Транспортное средство» и подтип «Автомобиль», то «Автомобиль» является подтипом «Транспортного средства». 

//any(не работать), снимает ограничитель типа


//  unknown с помошью проверок, когда приходят неизвестные данные, 
// обробатывать и получать известные
// function logData(data: unknown){
//     let value: string
//     if(typeof data === "string"){
//         value = data
//     }
//     console.log(data)
// }

//  never никогда не может быть 
//1
// enum Values {
//     First,
//     Second
// }

// function fn1(value: Values){
//     switch(value){
//         case Values.First:
//             return value;
//         case Values.Second:
//             return value;
//         default: 
//             const Check: never = value
//             return value
//     }
// }

// fn1(Values.First)
// fn1(Values.Second)

// void - ф-ия ничего не возвращает

// function fn2(){
//     console.log()
// }

// type Fn = (arg: number, arg2: string) => void // - часто


// // Описание типа объекта
// interface Address{
//     city?: string,
//     street?: string,
//     cords: number[]
// }

// type User = {
//     firstname: string,
//     age?: number,
//     address: Address,
// }
// const user: User = {
//     address: {
//         cords: [4, 4]
//     },
//     firstname: "Anton"
// }

// Литираллы
// Строковые, числовые и булевые
// type Boolen = true | false 
// type Color = 'red' | 'green' | 'blue' | 3 // - Составной 

// const color: Color = "red"

// const color2 = {
//     color: 'green'
// } as const;

// // Шаблонные строки
// type EvenName = 'click' | "change"

// type EvenrHandler = `on${EvenName}`

// Generics(Обобщение)
// interface MetaData{
//     data: string
// }
// interface User{
//     username: string
// }
// interface Article{ 
//     title: string
// }

// interface ApiResponse<T> {
//     status?: 'error' | 'succsee'
//     meta?: MetaData,
//     requestId?: string,
//     data: T,
// }

// const responseFromUserApi: ApiResponse<User> = {
//     data: {
//         username: 'Anton'
//     }
// }
// const responseFromArticleApi: ApiResponse<Article> = {
//     data: {
//         title: 'title'
//     }
// }

// Условные типы
// type isArray<T> = T extends any[] ? true : false

// const first:isArray<string> = false
// const second:isArray<string[]> = true


// type guards
// interface Car { 
//     maxSpeed: number;
//     width: number;
// }
// interface Person{
//     age: number;
//     name: string;
// }

// function isCar(value: Car | Person): value is Car{
//     return "maxSpeed" in value && "width" in value
// }

// function fn(data: Car | Person): data is Car{
//     data
// }

  

//Преоброзование типов

// Явное
// interface Person{
//     age: number;
//     username: string;
//     password: string;
// }

// const obj = {
//     age: 25,
//     username: 'Anton',
// } as Person; // <- не желательно

// const obj2 = {
//     age: 25,
//     username: 'Anton',
//     password: 'fadsdafaaeee23'
// } satisfies Person; // <- лучше так 
//

// 1
// function JsonParse<T>(data: string): T {
//     return JSON.parse(data) as T;
// }

// const parsedJson = JsonParse<Person>("{age: 25}")

// async function fn(){
//     const data = await fetch('')
//     const parsedData = await data.json()
// }

// 2 -  часто
// const Person2 = {
//     age: 'age',
//     username: 'username',
//     password: 'password',
// } as const;

// // const key =  Object.keys(obj)

// function key<T extends object>(data: T): Array<keyof T>{
//     return Object.keys(data) as Array<keyof T>
// }
// const k = key(obj) 



// typeof
// const obj = {
//     name: "Anton",
//     age: 25,
// }
// type Person = typeof obj;

// // const preson: Person {// <-- навести на Person

// // }


// function getData(user: Person): number {
//     return 5
// }

// type GetDataRetirnValue = ReturnType<typeof getData>


//keyof
// const obj = {
//     name: "Anton",
//     age: 25,
// }

// type PersonKey = keyof typeof obj;

// function getByKey<T, K extends keyof T>(obj: T, key: K): T[K]{
//     return obj[key];
// }


// Optional - ?. - status?: 'error' | 'succsee'


// Non-Null assertion - !. - person.address!.street 



// Переисления - enam

// const Color = {
//     RED: 'red',
//     GREEN: 'green',
//     BLUE: 'blue'
// }

// const enum Color2 {
//     RED = 'red',
//     GREEN ='green',
//     BLUE = 'blue'
// }

// function setColor(color: Color2) {
// //   backgraung = Color.red;  
// }

// setColor(Color2.BLUE)


// 1:38:34
// Разница между type & interface

// type Literal = 'red' | "green"
// type Id = number

// interface Base {
//     username: string;
//     age: number
// }

// //1
// interface User extends Base {
//     password: string;
// } 

// //2
// type User2 = Base & {
//     password: string;
// }


// mapped types
// 1
// interface User {
//     name: string,
//     age: number,
// }

// type RedonlyType<T> = {
//     readonly [Key in keyof T]?: T[Key];
// }

// type NewUser = RedonlyType<User>

// type ArrayType<T> = {
//     [Key in string]: T;
// }

// const array: ArrayType<string> = {
//     '1232': '21312',
//     2: "32"
// }

//2 
// interface User {
//     name: string,
//     age: number,
//     type: string,
// }
// interface Car {
//     name: string,
//     type: string,
// }
// interface RandomObj {
//     name: string,
//     type: string,
// }

// type WithoutType<T> = {
//     [K in keyof T as Exclude<K, "type">]: T[K];
// }

// const withoutType: WithoutType<Car> = {

// }


// Utility Types {

//Awaited - разворачивает рекурсивно промисы и достовать содержимое, похож на await
//Partial - делает для типа все поля опциональные
//Required - делает для типа все поля обязательными
//Readonly - пометить свойство или переменную как доступные только для чтения 
//Pick - точечно выбирает поля
    // interface User {
    //     name: string,
    //     age: number,
    //     type: string,
    // }
    // type NewUser1 = Pick<User, 'name' | 'age'>
//Omit - точечно удаляет поля
    // type NewUser2 = Omit<User, 'name' | 'age'>
//Exclude - 
    // type Color = 'red' | 'green'

    // type NarrowColor1 = Exclude<Color, 'red'>
//Extract - 
    // type NarrowColor2 = Extract<Color, 'red'>
//ReturnType - 
    // function fn(arg: number): string {
    //     return ''
    // }
    // type ReturnTypeFn = ReturnType<typeof fn>
//Parameters - 
    // type ParametersFn = Parameters<typeof fn>
//Record - 
    // type Color = 'red' | 'green'

    // const colorArray: Record<Color, string[]> = {
    //    red: ['4'],
    //    green: ['34'], 
    // }

// }


// assert {

// interface User {
//     name: string,
//     age: number,
// }


// asserts condition

// function assertNotNull(value: unknown): asserts value {
//     if (value === null || value === undefined) {
//         throw new Error("Value is null or undefined");
//     }
// }

// try {
//    assertNotNull(null) 
// } catch(e) {
//     // logErr()
// }



// asserts value is Type
  
// function assertIsUser (data: any): asserts data is User { 
//     if (typeof data !== "object" || data === null) {
//         throw new Error("Object expected");
//     }
//     if (typeof data.name !== "string") {
//         throw new Error("Property 'name' must be a string")
//     }
//     if (typeof data.age !== "number") {
//         throw new Error("Property 'age' must be a number")
//     }
// }

// function prepareUser(obj: User){
//     console.log(obj)
// }

// const obj = {
//     name: 'Anton'
// }

// // prepareUser(obj) - Ошибка

// assertIsUser(obj)
// prepareUser(obj)

//}


// Перегрузка ф-ции

// function makeDate(timestamp: number): Date;
// function makeDate (m: number, d: number, y: number): Date;
// // function makeDate (m: number, d?: number, y?: number): Date; <-- лучше так
// function makeDate(mOrTimestamp: number, d?: number, y?: number): Date { 
//     if ( d!== undefined && y !== undefined ) {
//         return new Date(y, mOrTimestamp, d);
//     } else {
//         return new Date(mOrTimestamp)
//     }

// }
// const d1 = makeDate(12345678);
// const d2 = makeDate(5, 5, 5); 
// const d3 = makeDate(1, 3);



// Условные типы и infer

// function fn(arg1: string, arg2: number): string {
//     return ''
// }

// type MyParam<T> = T extends (...arg: infer U) => any ? U : never
// type MyReturnType<T> = T extends (...arg: any) => infer U ? U : never

// type FnArg = MyParam<typeof fn>
// type FnReturnType = MyReturnType<typeof fn>

// const array: string[] = []
// type GetArrayItem<T extends any[]> = T extends (infer ItemType)[] ? ItemType : never
// type ArrayItem = GetArrayItem<typeof array>