console.log('Hello TypeScript!')

// ## 1. イントロダクション

// 3 + [] // error

// let obj = {}
// obj.foo // error

// function a(b: number) {
//     return b / 2
// }
// a("2") // error

// ## 2. TypeScript: 全体像

// let a = 1 + 3
// let b = a + 3
// let c = {
//     apple: a,
//     banana: b
// }
// let d = c.apple + 4

// ## 型について

// function squareOf(n: number) {
//     return n * n
// }

// squareOf(2)
// squareOf('z') // error

// ### any
// let a:any = 666
// let b:any = ['danger'] 
// let c = a + b


// ### unknown
// let a: unknown = 30
// let b = a === 123
// let c = a + 10 // error
// if (typeof a === 'number') {
//     let d = a + 10
// }


// ### boolean
// let a = true
// var b = false
// const c = true
// let d: boolean = true
// let e: true = true
// let f: true = false //error

// ### number
// let a = 1234
// var b = Infinity * 0.10
// const c = 5678
// let d = a < b
// let e: number = 100
// let f: 26.218 = 26.218
// let g: 26.218 = 10 //error


// ### biging
// ES2020が必要
// let a = 1234n
// const b = 5678n
// var c = a + b
// let d = a < 1235
// let e = 88.5n //error
// let f: bigint = 100n
// let g: 100n = 100n
// let h: bigint = 100 //error

// ### string
// let a = 'hello'
// var b = 'billy'
// var c = '!'
// let d = a + '' + b + c
// let e: string = 'zoom'
// let f : 'john' = 'john'
// let g: 'john' = 'zoe' // error

// ### object
// let a: object = {
//     b: 'x'
// }

// a.b


// let a = {
//     b: 'x'
// }
// a.b

// let b = {
//     c: {
//         d: 'f'
//     }
// }

// let a: {b: number} = {
//     b: 12
// }

// const a: {b: number} = {
//     b: 12
// }




// let  c: {
//     firstName: string,
//     lastName: string
// } = {
//     firstName: 'john',
//     lastName: 'barrowman'
// }

// class Person {
//     constructor(
//         public firstName: string,
//         public lastName: string
//     ) {}
// }

// c = new Person('matt', 'smith')


// let a: {b: number}
// // a = {}
// a = {
//     b: 1,
//     c: 2
// }



// let a: {
//     b: number
//     c?: string
//     [key: number]: boolean
// }

// a = {b: 1}
// a = {b: 1, c: undefined}
// a = {b: 1, c: 'd'}
// a = {b: 1, 10: true}
// a = {b: 1, 10: true, 20: false}
// a = {10: true} // error
// a = {b: 1, 33: 'red'} // error


// let user: {
//     readonly firstName: string
// } = {
//     firstName: 'abby'
// }

// user.firstName
// user.firstName = 'abby with an e' // error

// let danger: {}
// danger = {}
// danger = {x: 1}
// danger = []
// danger = 2


// ### 練習問題
// let a = 1042
// let b = 'apples and oranges'
// const c = 'pineapples'
// let d = [true, true, false]
// let e = {type: 'ficus'}
// let f = [1, false]
// const g = [3]
// let h = null


// ## 4. 関数

// function add(a: number, b: number) {
//     return a + b
// }

// function greet(name: string) {
//     return 'hello' + name
// }

// let greet2 = function(name: string) {
//     return 'hello' + name
// }

// let greet3 = (name: string) => {
//     return 'hello' + name
// }

// let greet4 = (name: string) =>
//     'hello' + name


// let greet5 = new Function('name', 'return "hello" + name')

// add(1, 2)
// greet('Crystal')

// add(1) //error
// add(1, 'a') //error


// ### オプションパラメーターとデフォルトパラメーター

// function log(message: string, userId?: string) {
//     let time = new Date().toLocaleTimeString()
//     console.log(time, message, userId || 'Not sign in')
// }

// log('Page Loaded')
// log('User signin', 'da763be')


// function log(message: string, userId='Not sign in') {
//     let time = new Date().toLocaleTimeString()
//     console.log(time, message, userId)
// }

// log('User clicked on a button', 'da763be')
// log('User signed out')


// function sum(numbers: number[]): number {
//     console.log(numbers)
//     return numbers.reduce((total, n) => total + n, 0)
// }
// console.log(sum([1,2,3]))


// function sumVariadic():number {
//     return Array
//         .from(arguments)
//         .reduce((total, n) => total + n, 0)
// }

// consoel.log(sumVariadic(1, 2, 3))


// function sumVariadicSafe(...numbers: number[]): number {
//     console.log(numbers)
//     return numbers.reduce((total, n) => total + n, 0)
// }
// console.log(sumVariadicSafe(1,2,3))