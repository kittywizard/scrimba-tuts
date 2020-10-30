// function caseInsensitivePalindrome(str) {
//     //  write code here.
//     const str2 = str.toLowerCase();
//     const strArr = str2.split('').reverse().join('');
//     console.log(str2);
//     console.log(strArr);

//     //i think the key here is to not actually make the original string an array
//     //but simply reverse it and return it as a string to compare

//     return str2 === strArr;

// }

// let str = "tacocats";

// caseInsensitivePalindrome(str);

function firstDigit(str) {
    //  write code here.
    const regex = /\d/g;
        
    const results = str.match(regex);
    return results[0];
    
}