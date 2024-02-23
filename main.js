function palindrome(str) {

    const reg = /(?!_)\w/ig;

    //Normalize the input and split it in half. I've two cases, one for even length strings, one for odd.
    const input = str.toLowerCase().match(reg);
    const halfOne = input.slice(0, Math.floor(input.length/2));

    //If the string length is even...
    if(input % 2 === 0) {

        //...get the second half and reverse it! Yes, I know I could split, 
        //reverse and join it, just testing out my own stuff.
        const preHalfTwo = input.slice(Math.ceil(input.length/2)-1);
        const halfTwo = [];
        for(const item of preHalfTwo) {
          halfTwo.unshift(item);
        }

        //Return the evaluation of their equality
        return halfOne.join('') === halfTwo.join('');
    
    //If the string length is odd...
    } else {

        //...do the same thing! No surprises here.
        const preHalfTwo = input.slice(Math.ceil(input.length/2));
        const halfTwo = [];
        for(const item of preHalfTwo) {
          halfTwo.unshift(item);
        }
        return halfOne.join('') === halfTwo.join('');
    
    }
}

console.log(palindrome("My age is 0, 0 si ega ym.")) //true
console.log(palindrome("Race car.")) //true
console.log(palindrome("abba")) //true
console.log(palindrome("Not a palindrome!")) //false