// -------------------- Challange 1-------------------- //
var alphabet = [];
var allValueArry = [];
var comparisonArry =[];

//creating 26 alphabet letters
for(var i = 97; i < 123; i++)
{
    alphabet.push(String.fromCharCode(i));
}

var value = 0;
var userInput = 'jumbo shrimp';
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

// -------------------- Challange 2-------------------- //
var challengeTwoInputA = [1,2,3,4,5,6,7,8,9];  //[1,2,7,4,5,6,3,8,9];
var challengeTwoInputB = [12,13,14];  //[12,17,14];
var challengeTwoInputC = [9,2,4,7,3];  //[9,2,4,3,7];

//Turn the userinput into string
//covert the string into array that contains single digit number
//loop through each digit
//join the single digit back to a string
//spit the new string by comma and save them into result array
var inputString = challengeTwoInputA.join();
var convertedNewArray = inputString.split('');

for(var i = 0; i < convertedNewArray.length; i++)
{
    if(convertedNewArray[i] == 3)
    {
        convertedNewArray[i] = 7;
    }
    else if(convertedNewArray[i] == 7)
    {
        convertedNewArray[i] = 3;
    }
}
var newString = convertedNewArray.join('');
var resultArray = newString.split(',');

var domString = '<h>' + resultArray + '</h>';
document.getElementById('challenge-2').innerHTML = domString;
















