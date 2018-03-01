// Challange 1
var alphabet = [];
var allValueArry = [];
var comparisonArry =[];
for(var i = 97; i < 123; i++)
{
    alphabet.push(String.fromCharCode(i));
}
console.log(alphabet);

var value = 0;
var userInput = 'pppppppp jumbo shrimp';
var userInputArry = userInput.split(' ');
for(var j = 0; j<userInputArry.length;j++)
{
    console.log('indivisual string:',userInputArry[j]);
    
    var stringArry = userInputArry[j].split('');
    console.log('stringArry:', stringArry)
    for(var k = 0; k<stringArry.length; k++)
    {
        console.log('value for each letter:',alphabet.indexOf(stringArry[k])+1);
        value += alphabet.indexOf(stringArry[k])+1;
        console.log(value);
    }
    console.log('value for each string:',value, 'for string:' ,userInputArry[j]);

    allValueArry.push(value); 
    console.log('string : value -',allValueArry);

    comparisonArry[userInputArry[j]] = value; 
    console.log('string : value -',comparisonArry);
    
    value = 0; // reset the value after each string loop
}

allValueArry.sort(function(a,b){return a - b});

var largestNumber = allValueArry[allValueArry.length-1];
console.log(largestNumber);


for(var key in comparisonArry)
{
    if(largestNumber === comparisonArry[key])
        {
        var domString = '<h1>' + key + '</h1>';
        document.getElementById('challenge-1').innerHTML = domString;
        }
}














