// import inquirer from "inquirer";
// // step 1 player
// class Hero {
//    name: string;
//     health = 100;

//     constructer(name:string){
// this.name = name
//         this.health = -20
//     }
//     increasehealth() {
//         this.health = 100
//     }
// }


// class Enemy {
//    name: string;
//     health = 100;

//     constructer(name:string){
//     }
//     decreasehealth() {
//         this.health = -20
//     }
//     increasehealth() {
//         this.health = 100
//     }
// }

// // step 2 player object
// async function main() {
//     const {heroName} = await inquirer.prompt([
//         {
//             name: "input",
//             type:"heroName",
//             message:"Enter your heroName:"
//         }
//     ])
// }
// // enemy object
// const {enemyType} = await inquirer.prompt([
// {
//     type:"list",
//     name:"enemyType",
//     choices:["alian", "witch", "zombee"],
//     message:"select the enemy you fight with:"

// }
// ])
// //step 3 battle field
// const hero: = new  Hero (heroName);
// const enemy: = new enemy (enemyType);

// console.log('$ {enemy.name' v/s'${hero.name}')



import inquirer from "inquirer";

// Define Player class
class Player {
    name: string;
    health: number;

    constructor(name: string) {
        this.name = name;
        this.health = 100;
    }

    // Method to decrease player's health
    decreaseHealth(amount: number) {
        this.health -= amount;
        if (this.health < 0) {
            this.health = 0;
        }
    }

    // Method to increase player's health
    increaseHealth(amount: number) {
        this.health += amount;
        if (this.health > 100) {
            this.health = 100;
        }
    }
}

// Define Enemy class
class Enemy {
    name: string;
    health: number;
    damage: number;

    constructor(name: string, damage: number) {
        this.name = name;
        this.health = 100;
        this.damage = damage;
    }

    // Method to attack the player
    attack(player: Player) {
        player.decreaseHealth(this.damage);
        console.log(`${this.name} attacks ${player.name} for ${this.damage} damage!`);
        console.log(`${player.name}'s health: ${player.health}`);
    }
}

// Main game logic
async function main() {
    console.log("Welcome to the Adventure Game!");

    const { playerName } = await inquirer.prompt([
        {
            name: "playerName",
            type: "input",
            message: "Enter your name:"
        }
    ]);

    const player = new Player(playerName);

    console.log(`Hello, ${player.name}!`);

    // Create enemies
    const enemies: Enemy[] = [
        new Enemy("Goblin", 20),
        new Enemy("Skeleton", 30),
        new Enemy("Orc", 40)
    ];

    let gameOver = false;

    while (!gameOver) {
        const { action } = await inquirer.prompt([
            {
                name: "action",
                type: "list",
                message: "What would you like to do?",
                choices: ["Attack", "Run"]
            }
        ]);

        if (action === "Attack") {
            const enemy = enemies[Math.floor(Math.random() * enemies.length)];
            enemy.attack(player);
            if (player.health <= 0) {
                console.log("Game over! You have been defeated.");
                gameOver = true;
            }
        } else if (action === "Run") {
            console.log("You run away from the enemies.");
            gameOver = true;
        }
    }
}

main(); // Start the game
