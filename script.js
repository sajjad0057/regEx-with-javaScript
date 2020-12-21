// Regular Expression :

// Pattern Matching Technique :

let re;
let str;


// Check Postal Code :

re = /^[0-9]{4}$/

str = "4040"

// Check Phone Number :

re = /^01[0-9]{9}$/
re = /^(\+88)?01[0-9]{9}$/
re = /^(\+)?(88)?01[0-9]{9}$/


str = "01774354369"
str = "8801774354369"
str = "+8801774354369"



// Check Email address :
//sajjadhossain0057@gmail.com

re = /^([a-zA-Z0-9])+$/
re = /^([a-zA-Z0-9]+\.?_?)+[^\.]@$/
re = /^([a-zA-Z0-9]+\.?_?)+[^\.]@([a-zA-Z0-9]+\.?_?)+[^\.]$/

str="sajjadhossain0057"
str="sajjadhossain0057._"
str="sajjadhossain0057._fdg."
str="sajjadhossain0057._fdg@"
str = "sajjadhossain0057@gmail.com"






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
