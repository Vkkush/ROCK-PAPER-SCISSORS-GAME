
let userscore = 0;
let comscore = 0;

let choices = document.querySelectorAll(".choice");
let msg = document.querySelector("#msg");
const userScorep = document.querySelector("#user-score");
const compScorep = document.querySelector("#comp-score");

const compChoice = () => {
    const options = ["rock", "paper", "scissors"];
    const rndmIdx = Math.floor(Math.random() *3);
    return options[rndmIdx];
}

const draw = () => {
    // console.log("draw");
    msg.innerText = "DRAW";
}

const playGmae= (userchoice) => {
    // console.log("userchoice=", userchoice);
    // get computer choice => modular way programing (break code in parts)
    const compChoiceId = compChoice();
    // console.log("compChoice=", compChoiceId);

    if (userchoice === compChoiceId) {
        draw();
        msg.style.backgroundColor = "#f7b733";
    } else if (userchoice === "rock" && compChoiceId === "scissors") {
        // console.log("you win");
        msg.innerText = `YOU WIN! ${userchoice} beats ${compChoiceId}`;
        msg.style.backgroundColor = "green";
        userScorep.innerText = ++userscore;
    } else if (userchoice === "paper" && compChoiceId === "rock") {
        // console.log("you win");
        msg.innerText = `YOU WIN! ${userchoice} beats ${compChoiceId}`;
        msg.style.backgroundColor = "green";
        userScorep.innerText = ++userscore;
    } else if (userchoice === "scissors" && compChoiceId === "paper") {
        // console.log("you win");
        msg.innerText = `YOU WIN! ${userchoice} beats ${compChoiceId}`;
        msg.style.backgroundColor = "green";
        userScorep.innerText = ++userscore;
    } else {
        // console.log("you lose");
        msg.innerText = `YOU LOSE! ${compChoiceId} beats ${userchoice}`;
        msg.style.backgroundColor = "red";
        compScorep.innerText = ++comscore;
    }
    if (userscore === 5) {
        msg.innerText = "YOU WIN THE GAME";
        msg.style.backgroundColor = "green";
    } else if (comscore === 5) {
        msg.innerText = "YOU LOSE THE GAME";
        msg.style.backgroundColor = "red";
    }
}

    choices.forEach((choice) => {
        choice.addEventListener("click", () => {
            const userchoice = choice.getAttribute("id");
            // console.log("clicked", choiceId);
            playGmae(userchoice);
        }) 
    })

    // class toyotaCar {
    //     constructor(brand , model) {
    //         console.log("car creating...");
    //         this.brand = brand;
    //         this.model = model;
    //     }
    //     start() {
    //         console.log("car started");
    //     }
    //     stop() {
    //         console.log("car stopped");
    //     }
        // setbrand (brand) {
        //     this.brand= brand;
        // }
    // }
    // let car = new toyotaCar("fortunar", "2023");
    // // car.setbrand("toyota");
    // console.log(car);

    // let DATA = "seceret key";

    // class user {
    //     constructor (name , email) {
    //         this.name = name;
    //         this.email = email;
    //     }
    //     viewdata() {
    //         console.log(DATA);
    //     }
    // }
    //   class admin extends user {
    //     constructor (name,email) {
    //         super(name,email);
    //     }
    //     editdata() {
    //         DATA = "new data";
    //     }
    //   }

    //  let student1 = new user("sahil", "sahil@123");

    //  let admin1 = new admin("vikas", "vk@123.com");

    // synchronus >> it will execute line by line
    // asynchronous >> it will execute line by line but not in order
    //callback hell >> 
    
    // console.log("hello world1");
    // console.log("hello world2");

    // setTimeout(() => {
    //     console.log("hello world");
    // }, 2000)

    // console.log("hello world3");

    // function getdata (dataId,getnxtdata){
    //     return new Promise ((resolve,reject) => {
    //         setTimeout(()=> {
    //             console.log("dataId=",dataId);
    //             resolve("success");
    //             // if (getnxtdata){
    //             //     getnxtdata();
    //             // }
    //         },2000);
    //     })
    // }
    // if you want to run code automatically the use IIFFI function (FUNCTION)();
    // (async function getalldata() {
    //     await getdata(1);
    //     await getdata(2);
    //     await getdata(3);
    //     console.log("done");
    // })();
    // getalldata();
    // getdata(1,()=>{
    //     getdata(2,()=>{
    //         getdata(3);
    //     });
    // });

    // promise chaining
    // getdata(1).then((res) => {
    //     return getdata(2);
    // }).then((res) => {
    //     return getdata(3);
    // }).then((res) => {
    //     console.log("done");
    // })
    class polygon {
        constructor (height,width) {
            this.area = height * width;
        }
    }
        // static area(height,width) 
           class woods extends polygon {
               constructor (height,width,depth) {
                   super(height,width);
                   this.depth = depth;
                   
               }
           } 
        
    console.log(new woods(10,10,10));
    // console.log(new polygon(10,10));
    // let area = new polygon(10,10);





