// Regular Expression :

// Pattern Matching Technique :

let re;
let str;
re = /hello/i;   // i = caseInsensitive              

// /'regex'/   .... starting "/"   and Ending "/"  generally contain regular Expression

// console.log(re);       //   result=>   /hello/
// console.log(re.source);   // result =>  hello


str = 'Hello world';
str = "again Hello world"
str = "fdshellodjfj world"
str = "again Hello world hello"


/*
exec() func --> returns result in an array or null.If matching, this array contain matchig value , index and full str,
The exec() method tests for a match in a string.
This method returns the matched text if it finds a match, otherwise it returns null.
*/


let result = re.exec(str)
console.log("exec() return:",result);


/*
The test() method tests for a match in a string.
This method returns true if it finds a match, otherwise it returns false.
*/ 

result = re.test(str)
console.log("test() retuen:",result);



/*
match() same as exec() function, difference between their Syntax.
The match() method searches a string for a match against a regular expression,
and returns the matches, as an Array object.
Syntax:
string.match(regexp)
*/

result = str.match(re)
console.log("match() return:",result);



/*
The search() method searches a string for a specified value, and returns the position of the match.
The search value can be string or a regular expression.
This method returns -1 if no match is found.
Syntax:
string.search(searchvalue)

*/

result = str.search(re)
console.log("search() return :", result);


/*
The replace() method searches a string for a specified value,
or a regular expression, and returns a new string where the specified values are replaced.
Syntax:
string.replace(searchvalue, newvalue)
*/

result = str.replace(re,"hi")
console.log("str:",str);
console.log("replace() return:",result);

