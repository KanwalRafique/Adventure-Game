#!/usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import figlet from "figlet";


(function heading() {
  console.clear();
  console.log(chalk.bold.yellowBright(figlet.textSync('Welcome   to   Adventure   Game', { font: 'Big'})));
})();

console.log(
  chalk.bold.cyan("\n******************------------------------------ 🏴‍☠️  👽  💀  🧟   🏴‍☠️----------------------------------**************\n")
);

//Class of player
class Player {
  name: string;
  fuel: number = 100;
  constructor(name: string) {
    this.name = name;
  }
  fuelDecrease(){
    let fuel = this.fuel  -25
    this.fuel = fuel
  }
  fuelIncrease(){
    this.fuel = 100
  }
}

//Class of opponent
class Opponent {
  name: string;
  fuel: number = 100;
  constructor(name: string) {
    this.name = name;
  }
  fuelDecrease(){
    let fuel = this.fuel  -25
    this.fuel = fuel
  }
}

//Name of Player
let player = await inquirer.prompt({
        type: "input",
        name: "name",
        message: "Please enter your name:"
})

//Selection of opponent
let opponent = await inquirer.prompt({
  type: "list",
  name: "select",
  message: "Select your Opponent:",
  choices: ["Skeleton☠️", "Assassian🤺", "Zombie🧟"]
});

//Gathering data
let p1 = new Player(player.name)
let o1 = new Opponent(opponent.select)


do{
  //OPPONENT SKELETON
  if (opponent.select == "Skeleton☠️"){
    console.log(`${chalk.bold.green(p1.name)} vs ${chalk.bold.red(o1.name)}`);
    let ask = await inquirer.prompt({
      type: "list",
      name: "opt",
      message: "Select your Opponent",
      choices: ["Attack🤺", "Drink Portion🍻", "Run for Life.....🏃🏻‍♀️🏃🏻"],
  });

  if (ask.opt == "Attack🤺"){
    let num = Math.floor(Math.random() * 2)
    if (num > 0) {
        p1.fuelDecrease()
        console.log(`${chalk.bold.greenBright(p1.name)} fuel is ${p1.fuel}`);
        console.log(`${chalk.bold.redBright(o1.name)} fuel is ${o1.fuel}`);
        if (p1.fuel<= 0 ){
          console.log(chalk.bold.redBright.italic("GAME OVER😱😱😱😱, TRY AGAIN!!!!!!😏 "));
          process.exit();       
        }
    }

    if (num <= 0) {
      o1.fuelDecrease()
      console.log(`${chalk.bold.redBright(o1.name)} fuel is ${p1.fuel}`);
      console.log(`${chalk.bold.greenBright(p1.name)} fuel is ${o1.fuel}`); 
      if (o1.fuel<= 0 ){
        console.log(chalk.greenBright.bold.italic("BRAVO!!!!!!😍  You won the Game.....😍👍 "))
        process.exit()          
      }     
    }  

  } 
    if (ask.opt == "Drink Portion🍻"){
    p1.fuelIncrease()
    console.log(chalk.bold.red.italic.green(`You drink health portion🍹🍷🍻, Your fuel is ${p1.fuel}`));
    
  }
   if (ask.opt === "Run for Life.....🏃🏻‍♀️🏃🏻"){
        console.log(chalk.red.bold.italic("GAME OVER😱😱😱😱, TRY AGAIN!!!!!!😏 "))
        process.exit()
    }

   }

//OPPONENT ASSASSIN
if (opponent.select == "Assassian🤺"){
  console.log(`${chalk.bold.green(p1.name)} vs ${chalk.bold.red(o1.name)}`);
  let ask = await inquirer.prompt({
    type: "list",
    name: "opt",
    message: "Select your Opponent",
    choices: ["Attack🤺", "Drink Portion🍻", "Run for Life.....🏃🏻‍♀️🏃🏻"],
});

if (ask.opt == "Attack🤺"){
  let num = Math.floor(Math.random() * 2)
  if (num > 0) {
      p1.fuelDecrease()
      console.log(`${chalk.bold.greenBright(p1.name)} fuel is ${p1.fuel}`);
      console.log(`${chalk.bold.redBright(o1.name)} fuel is ${o1.fuel}`);
      if (p1.fuel<= 0 ){
        console.log(chalk.bold.redBright.italic("GAME OVER😱😱😱😱, TRY AGAIN!!!!!!😏 "));
        process.exit();       
      }
  }

  if (num <= 0) {
    o1.fuelDecrease()
    console.log(`${chalk.bold.redBright(o1.name)} fuel is ${p1.fuel}`);
    console.log(`${chalk.bold.greenBright(p1.name)} fuel is ${o1.fuel}`); 
    if (o1.fuel<= 0 ){
      console.log(chalk.greenBright.bold.italic("BRAVO!!!!!!😍  You won the Game.....😍👍 "))
      process.exit()          
    }     
  }  

} 
  if (ask.opt == "Drink Portion🍻"){
  p1.fuelIncrease()
  console.log(chalk.bold.red.italic.green(`You drink health portion🍹🍷🍻, Your fuel is ${p1.fuel}`));
  
}
 if (ask.opt === "Run for Life.....🏃🏻‍♀️🏃🏻"){
      console.log(chalk.red.bold.italic("GAME OVER😱😱😱😱, TRY AGAIN!!!!!!😏 "))
      process.exit()
  }

 }

   
//OPPONENT ZOMBIE
if (opponent.select == "Zombie🧟"){
  console.log(`${chalk.bold.green(p1.name)} vs ${chalk.bold.red(o1.name)}`);
  let ask = await inquirer.prompt({
    type: "list",
    name: "opt",
    message: "Select your Opponent",
    choices: ["Attack🤺", "Drink Portion🍻", "Run for Life.....🏃🏻‍♀️🏃🏻"],
});

if (ask.opt == "Attack🤺"){
  let num = Math.floor(Math.random() * 2)
  if (num > 0) {
      p1.fuelDecrease()
      console.log(`${chalk.bold.greenBright(p1.name)} fuel is ${p1.fuel}`);
      console.log(`${chalk.bold.redBright(o1.name)} fuel is ${o1.fuel}`);
      if (p1.fuel<= 0 ){
        console.log(chalk.bold.redBright.italic("GAME OVER😱😱😱😱, TRY AGAIN!!!!!!😏 "));
        process.exit();       
      }
  }

  if (num <= 0) {
    o1.fuelDecrease()
    console.log(`${chalk.bold.redBright(o1.name)} fuel is ${p1.fuel}`);
    console.log(`${chalk.bold.greenBright(p1.name)} fuel is ${o1.fuel}`); 
    if (o1.fuel<= 0 ){
      console.log(chalk.greenBright.bold.italic("BRAVO!!!!!!😍  You won the Game.....😍👍 "))
      process.exit()          
    }     
  }  

} 
  if (ask.opt == "Drink Portion🍻"){
  p1.fuelIncrease()
  console.log(chalk.bold.red.italic.green(`You drink health portion🍹🍷🍻, Your fuel is ${p1.fuel}`));
  
}
 if (ask.opt === "Run for Life.....🏃🏻‍♀️🏃🏻"){
      console.log(chalk.red.bold.italic("GAME OVER😱😱😱😱, TRY AGAIN!!!!!!😏 "))
      process.exit()
  }

 }


}

while(true)









