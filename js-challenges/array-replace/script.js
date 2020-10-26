function arrayReplace(array, elemToReplace, substitutionElem) {
    //  write code here.

        array.forEach(element => {
            console.log(element);
            if(element === elemToReplace) {
                element = substitutionElem;
             }
        });
}

const array = [1, 2, 1];
const elemToReplace = 1;
const substitutionElem = 3;

let result = arrayReplace(array, elemToReplace, substitutionElem);


console.log(result);