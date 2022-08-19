console.log("Hello World!\n==========\n");

// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

const numbers = [2, 22, 12, 17, 18, 39, 129];

function arraySum(arr) {
    let sum = 0;
    //   OPTION 1
    // for (let i = 0; i < arr.length; i++) {
    //     sum += arr[i];


    /*   OPTION 2
    function updateSum(num) {
        sum += num;
    }

    arr.forEach(updateSum);
    */
    arr.forEach ((num) => {
        sum += num;
    })
    return sum;
}
let sum1 = arraySum (numbers);
let sum2 = arraySum ([1, 2, 3, 4, 5]);

console.log (sum1, sum2);

// function arraySum () {
//     let sum = 0;
//     numbers.forEach((number, index) => {
//         sum += number
//     })
//         console.log (sum)
// }
// arraySum ()

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");

// let book = {};
// book.title = `The Hobbit by JRR Tolkien`
// book.pages = 295
// book.readCount = 3
// book.info = function () {
//     console.log (`My favorite book is ${book.title}`)
// } 

// console.log (book);
// book.info ();

let book = {
    title: `The Hobbit by JRR Tolkien`,
    bookPages: 295,
    readCount: 3,
    info: function () {
        return `${this.title} is ${this.bookPages} pages long, and has been read ${this.readCount} times.`;
    },
};

book.readCount++;
console.log(book.info());

// Exercise 3 Section
console.log("EXERCISE 3:\n==========\n");

let sentence = "The quick brown fox jumps over the lazy dog";
// function to reverse string
function reverseStr(str) {
    let reversedStr = "";
    for (let i = 0; i< str.length; i++){
        reversedStr= str[i] + reversedStr;
    }
    return reversedStr;
}
//function reverse words from sentence
function reverseWordsFromSentence(sentence) {
    let words = sentence.split(" ");
    let reversedWords = words.map(function (word){
    return reverseStr(word);
    });



return reversedWords.join(" ");

}

console.log (reverseWordsFromSentence(sentence))

// console.log(reverseWordsFromSentence(sentence));
// split a sentence into words

// reverse each word in the sentence

// recombine into sentence

// Exercise 4 Section
console.log("EXERCISE 4:\n==========\n");

let csvData = "name,age\nFrodo,50\nSam,38\nMerry,36\nPippin,26";
console.log (csvData);

function toJSON (){
let dataArr = csvData.split ("\n");
let headers = dataArr [0];
//each record
let records = dataArr.slice(1);

console.log (headers, records);

}

function getNames (records)
for (let i =0; i < records.length; i++){
    let names
}
toJSON (csvData)

names.splice()

