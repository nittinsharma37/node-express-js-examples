// const amount  = 7;

// if (amount <= 10) {
//     console.log(`smaller number `);
// } else{
//     console.log(`Larger number `);
// }




// process.argv.forEach((val, index) => {
//     console.log(`${index}: ${val}`)
// })

// const args = process.argv.slice(2)
// args[0]

// const  args = require('minimist')(process.argv.slice(2));
// args['name'];


// const x = 'x';
// const y = 'y';
// console.log(x,y);


// console.log('My %s has %d years','cat',2.45);

// console.log('%o', Number);
// console.clear()
// console.count()

// const oranges = ['orange','orange','orange','orange'];
// const apples = ['just one apple',];

// oranges.forEach(fruit => {
//     console.count(fruit);
// });


// apples.forEach(fruit => {
//     console.count(fruit);
// });


// console.countReset('orange');

// oranges.forEach(fruit => {
//     console.count(fruit);
// });


// const function2 = () => console.trace()
// const function1 = () => function2()
// function1()

// const doSomething = () => console.log('test')
// const measureDoingSomething = () => {
//   console.time('doSomething()')
//   //do something, and measure the time it takes
//   doSomething()
//   console.timeEnd('doSomething()')
// }
// measureDoingSomething()


// console.log('\x1b[33m%s\x1b[0m', 'hi!')


// const chalk = require('chalk');

// console.log(chalk.redBright("Hello "));


// const ProgressBar = require('progress');

// const bar = new ProgressBar(':bar', {total : 100});

// const timer = setInterval(() => {
//     bar.tick();
//     if (bar.complete) {
//         clearInterval(timer);
//     }
// }, 5);


// const readline = require('readline').createInterface({
//     input: process.stdin,
//     output: process.stdout
//   })
  
// console.log("Enter your name : ");

//   readline.question(`What's your name?`, name => {
//     console.log(`Hi ${name}!`)
//     readline.close()
//   })

// const inquirer = require('inquirer')

// var questions = [
//   {
//     type: 'input',
//     name: 'name',
//     message: "What's your name?"
//   }
// ]

// inquirer.prompt(questions).then(answers => {
//   console.log(`Hi ${answers['name']}!`)
// })



// function sayHello(){
//     console.log("Hello there ! its an export ");
// }

// module.exports = {sayHello};

function addNumbers(x,y){
    return x + y;
}

function subNumbers(x,y){
    return x - y;
}

module.exports = {addNumbers,subNumbers}
