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
re = /hello\?/;   // by escaping use "/"  before   "?" , here "?"  has been as a part of pattern.






str = "he llo"
str = "hexllo"
str = "hello"
str = "hello?"

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
