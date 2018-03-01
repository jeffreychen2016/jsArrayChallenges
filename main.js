// Challange 1
var alphabet = [];
var allValueArry = [];
var comparisonArry =[];

//creating 26 alphabet letters
for(var i = 97; i < 123; i++)
{
    alphabet.push(String.fromCharCode(i));
}

var value = 0;
var userInput = 'cba abc f';
var userInputArry = userInput.split(' ');

for(var j = 0; j<userInputArry.length;j++)
{
    //split the userInput into individual word and loop through each letter for its value
    var stringArry = userInputArry[j].split('');
    for(var k = 0; k<stringArry.length; k++)
    {
        //find the total value of all letters for one word
        value += alphabet.indexOf(stringArry[k])+1;
    }

    //add total value of each word to array for sorting
    allValueArry.push(value); 
    comparisonArry[userInputArry[j]] = value; 
    
    // reset the value after loop through each word
    value = 0; 
}

//sort the value from lowest to highest then find the highest one
allValueArry.sort(function(a,b){return a - b});
var largestNumber = allValueArry[allValueArry.length-1];

//find the highest value among all words, if they have same value, will pick first occurence
for(var key in comparisonArry)
{
    if(largestNumber === comparisonArry[key])
        {
        var domString = '<h1>' + key + '</h1>';
        document.getElementById('challenge-1').innerHTML = domString;
        break;
        }
    
}














