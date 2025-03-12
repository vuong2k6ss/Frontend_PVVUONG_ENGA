const greet = (name, callback) => {
  
    console.log(`hello ${name}`);
    callback();
  
};

const sayHello = () => {
    console.log("say helllo");
};

greet("ahihiiiiii", sayHello);

const readNumber = () => {
    for(let i = 0;i<=10;i++){
        console.log(i);
    }
};

const renderNumber = (callback) => {
    callback();
};

renderNumber(readNumber);