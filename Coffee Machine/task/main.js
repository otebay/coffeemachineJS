const input = require('sync-input');

let Water = 400;
let Milk = 540;
let Beans = 120;
let DisposableCups = 9;
let Money = 550;

let Espresso = {
    water: 250,
    beans: 16,
    cost: 4
}

let Latte = {
    water: 350,
    milk: 75,
    beans: 20,
    cost: 7
}

let Cappuccino = {
    water: 200,
    milk: 100,
    beans: 12,
    cost: 6
}

let NewCoffee = {
    water: 150,
    milk: 150,
    beans: 15,
    cost: 20
}

function remaining(){
    console.log(`\nThe coffee machine has: \n${Water} ml of water\n${Milk} ml of milk\n${Beans} g of coffee beans\n${DisposableCups} disposable cups\n$${Money} of money\n`);
    return start();
}

function buy(){
    let value = Number(input("\nWhat do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, 4 - New Coffee : \n"));
    if(value === 1){
        if (Espresso.water <= Water && Espresso.beans <= Beans && DisposableCups > 0){
            Water -= Espresso.water;
            Beans -= Espresso.beans;
            Money += Espresso.cost;
            DisposableCups -= 1;
            console.log(`I have enough resources, making you a coffee!\n`)
        }
        else if(Espresso.water && Espresso.beans && DisposableCups){
            if (Espresso.water > Water){
                console.log(`Sorry, not enough water!`);
            }
            else if (Espresso.beans > Beans){
                console.log(`Sorry, not enough beans!`);
            }
            else if (DisposableCups === 0){
                console.log(`Sorry, not enough disposable cups!`);
            }
        }

    }
    else if(value === 2){
        if (Latte.water <= Water && Latte.milk < Milk && Latte.beans <= Beans && DisposableCups > 0){
            Water -= Latte.water;
            Milk -= Latte.milk;
            Beans -= Latte.beans;
            Money += Latte.cost;
            DisposableCups -= 1;
            console.log(`I have enough resources, making you a coffee!\n`)
        }
        else if(Latte.water && Latte.milk && Latte.beans && DisposableCups){
            if (Latte.water > Water){
                console.log(`Sorry, not enough water!\n`);
            }
            else if (Latte.milk > Milk){
                console.log(`Sorry, not enough milk!\n`);
            }
            else if (Latte.beans > Beans){
                console.log(`Sorry, not enough beans!\n`);
            }
            else if (DisposableCups === 0){
                console.log(`Sorry, not enough disposable cups!\n`);
            }
        }
    }
    else if (value === 3){
        if (Cappuccino.water <= Water && Cappuccino.milk < Milk && Cappuccino.beans <= Beans && DisposableCups > 0){
            Water -= Cappuccino.water;
            Milk -= Cappuccino.milk;
            Beans -= Cappuccino.beans;
            Money += Cappuccino.cost;
            DisposableCups -= 1;
            console.log(`I have enough resources, making you a coffee!\n`)
        }
        else if (Cappuccino.water && Cappuccino.milk && Cappuccino.beans && DisposableCups){
            if (Cappuccino.water > Water){
                console.log(`Sorry, not enough water!\n`);
            }
            else if (Cappuccino.milk > Milk){
                console.log(`Sorry, not enough milk!\n`);
            }
            else if (Cappuccino.beans > Beans){
                console.log(`Sorry, not enough beans!\n`);
            }
            else if (DisposableCups === 0){
                console.log(`Sorry, not enough disposable cups!\n`);
            }
        }

        else if (value === 4){
            if (Cappuccino.water <= Water && Cappuccino.milk < Milk && Cappuccino.beans <= Beans && DisposableCups > 0){
                Water -= Cappuccino.water;
                Milk -= Cappuccino.milk;
                Beans -= Cappuccino.beans;
                Money += Cappuccino.cost;
                DisposableCups -= 1;
                console.log(`I have enough resources, making you a coffee!\n`)
            }
            else if (NewCoffee.water && NewCoffee.milk && NewCoffee.beans && DisposableCups){
                if (NewCoffee.water > Water){
                    console.log(`Sorry, not enough water!\n`);
                }
                else if (NewCoffee.milk > Milk){
                    console.log(`Sorry, not enough milk!\n`);
                }
                else if (NewCoffee.beans > Beans){
                    console.log(`Sorry, not enough beans!\n`);
                }
                else if (DisposableCups === 0){
                    console.log(`Sorry, not enough disposable cups!\n`);
                }
            }
        }
        return start();
    }
}

function fill(){
    console.log("\n");
    let AddWater = Number(input("Write how many ml of water you want to add: \n"));
    let AddMilk = Number(input("Write how many ml of milk you want to add: \n"));
    let AddBeans = Number(input("Write how many grams of coffee beans you want to add: \n"));
    let AddDisposableCups = Number(input("Write how many disposable cups you want to add: \n"));
    Water = Water + AddWater;
    Milk = Milk + AddMilk;
    Beans = Beans + AddBeans;
    DisposableCups = DisposableCups + AddDisposableCups;
    console.log("\n");
    return start();
}

function take(){
    console.log(`I gave you $${Money}\n`);
    Money-=Money;
    return start();
}

function start(){
    let value1 = input("Write action (buy, fill, take, remaining, exit):\n");
    switch (value1) {
        case 'buy':
            buy();
            break;
        case 'fill':
            fill();
            break;
        case 'take':
            take();
            break;
        case 'remaining':
            remaining();
            break;
        case 'exit':
            break;
    }

}

start();
