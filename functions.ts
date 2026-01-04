// function example in ts(giving types to the parameters and the return type)
function sum(num1: number, num2: number): number {
    return num1 + num2;
}

const ResultSum = sum(4,8);

console.log(ResultSum);


// function example in ts(giving types to the parameters and the return type)
function getName(firstName: string, lastName: string): string {
    return `${firstName} ${lastName}`;
}

const ResultName = getName("khashayar", "mobarez");
console.log(ResultName);


// function example in ts(no parameters and no return type)
function getDate(): Date {
    return new Date();
}

const ResultDate = getDate();
console.log(ResultDate);

function getTimeStamp(date: Date): number {
    return date.getTime();
}

const ResultTimeStamp = getTimeStamp(new Date());
console.log(ResultTimeStamp);


// function example in ts(any type)
function logger(value: any): void {
    console.log(value);
}

logger("khashi");



function runFunction (fn: Function) : Function {
    return fn()
}


runFunction (() => logger("a function running another function"));