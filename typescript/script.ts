export {}


//declare variable type
let bool: boolean = true;
let total: number = 10;
let str: string = "test";
let sentence: string = `You can use these too. ${str}`;

//also
let n:null = null;
let u:undefined = undefined;

//arrays
let list:number[] = [1, 2, 3];
let otherList:Array<number> = [4, 5, 6];
let nextArray: [string, number] = ['string', 123]; //fixed amount of elements, must match declaration order


console.log(sentence);

//
enum color {Red = 5, Green, Blue};
let c: color = color.Green;
console.log(c);

//any type
let random: any = 10; //won't throw errors for a lot of things

//unknown type
let newRandom: unknown = 10;
//type assertion
(newRandom as string).toLocaleUpperCase();