// Regular Expression :

// Pattern Matching Technique :

let re;
let str;

//literal Character 
re = /hello/   // casesensitive
re = /hello/i;  // caseInsensitive
re = /lo W/i;

// Meta Characters :
re = /^hello/i;   //Must start with
re = /hello$/i;   // Must End With
re = /^hello$/;   // Must start and End with
re = /^he.llo$/;      //  match any one character the with "dot". position
re = /h*llo/;       // Zero or more  time  character match with "h" in  * position 
re = /he?llo/;    // by using ? means "e" optional here.
re = /he?a?llo/;   // by using ? means "e" and "a" optional here.
re = /hello\?/;   // by escaping use "/"  before   "?" ,here "?"  has been as a part of pattern.



// CharacterSet using Brackets []:

re = /h[eai]llo/; // must be one of them inside [] brackets. but not all of them
re = /[HA]ello/i;
re = /[^he]llo/i;     //by this anything accept inside the brackets instead of h and e characters
re = /^[he]llo/i;     // Must start with h or e but not h  , e at a time
re = /[a-z]llo/i;     // Must start with any letter 
re = /^[A-Z]ello/;   // first letter must be upper case
re = /^[a-z]ello/;   // first letter must be lower case
re= /[0-9]ello/;   //  first letter must be digit
re = /[^0-9]ello/; // No digit
re = /[0-9][0-9]ello/ ;  // use Two Digit
re = /^[0-9][0-9][0-9][0-9][0-9]/; // match 5 digit


// str = "he llo"
// str = "hexllo"
// str = "hello"
// str = "heallo?"
// str = "Aello"
// str = "hello"
// str = "fdghello"
// str = "hello"
// str = "Hello"


// Braces {} --- Quantifier :

re =/hel{2}o/;   // l Must occar Exactly {x} times

re = /hel{2,5}o/; // l occur (2 - 5) range  time
re = /hel{2,}o/; // At least 2 times



// str = "sajjad 9ello"
// str = "sajjad Hello"
// str = "sajjad 9ello"
// str = "03ello"
// str ="hello"
// str = "helllllllllllllo"



// Parentheses --- grouping :

re = /^([0-9]){5}/ // match 5 digit same as re = /^[0-9][0-9][0-9][0-9][0-9]/;
str = "312fjdkg"
str = "4546"
str = "h54687"

// check Bangladeshi Phone no :

re = /^01[0-9]{9}$/
re =/^(\+?88)?01[0-9]{9}$/
str = "8801774135876"
str = "01774185869"
str = "01774135469"


// another :

re = /^([0-9]x){3}[0-9]$/

str = "2x4x4x5"



























console.log(re.exec(str));

function reTest(re,str){
    if(re.test(str)){
        console.log(`'${str}' matches '${re.source}'`);
    }
    else{
        console.log(`'${str}' dosen't matches '${re.source}'`);
    }
}

reTest(re,str)
