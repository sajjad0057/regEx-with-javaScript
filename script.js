// Regular Expression :

// Pattern Matching Technique :

let re;
let str;

// Shorthand Character classes : 

re = /\w/; // matches Word Character - alpha numeric or _

str = "sajjad"
str ="3435"
str = "_"
str = "$"



re = /\w+/; //one or more;

str = "sajjad hossain"

re = /\W/ ; // Non word Character ;
re = /\W+/; //One or more \;

str = 'fdgjdfg'
str = "^&(*(&&^  |**"  // matched jusr non word character;

re = /\d/ ; // digit;
re = /\d+/; //one or more digit character;
re = /\D/ ; // non digit;
re = /\D+/;
re = /\s/ ; // match white space;
re = /\S/; // Match non white space;
re = /hello\b/; //word boundary  
re = /\bhello\b/; 





str = "^&(*(&&^  |**" 
str = " fjggk kfl"
str = "fdjs"
str = "hello"
str = "hello    7586"
str = "hello4r"
str = "hello "


// Assertions :

re = /x(?=y)/; // matched x only if x is before y
re = /x(?!y)/;  // matched if don't have x before y




str = "x"
str = "fkjdjxfkj"
str = "ghfhy"











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
