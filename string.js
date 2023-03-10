//Extract the first four characters from the string below;
// "beautiful"
let x= "beautiful"
let result =x.substring(-9,4);
console.log(result);


// Insert the following string at the tenth index of the below variable:
// "eat"
// const food = "I did not have appetite today"
const food = "I did not have appetite today"
let y = "eat"
console.log(`I did not ${y} have appetite today`)
console.log(food.search("have"))


// Count how many times the following string appears in the string variable:
// 1. "the"
// 2."s"
// const story= "She sells sea shells at the sea shore"




const story= "She sells sea shells at the sea shore";
const story1="the";
const story2= story.split(story1).length-1;
console.log(story2);

const story3="s";
const story4= story.split(story3).length-1;
console.log(story4);


// Convert the following strings into the specified format:
// 1. UpperCase: "CONfidant"
// 2. LowerCase: "amazing", "beautiFUL"
// 3. Title case "A busy office"

let a="CONfidant";
console.log(a.toUpperCase());

let b=["amazing","beautiFUL"];
let lower= b.map(b =>b.toLowerCase());
console.log(lower);

let c= "A busy office";
let title = c.split(' ').map(w =>w[0].toUpperCase()+ w.substring(1).toLowerCase())
let d = title.toString()
let k = " "
let e = d.substring(0,1) +k+d.substring(2,6) +k+d.substring(7)
console.log(e);




// Using JavaScript, find the following words from the following strings:
// 1. "market"
// const string1 = "The lady went to the market with her sister";
// 2. "season"
// const string2 = "My favorite season is spring"
const string1 = "The lady went to the market with her sister"
let search1 = string1.search("market");
console.log(search1);

const string2 = "My favorite season is spring"
let search2 = string2.search("season")
console.log(search2);
