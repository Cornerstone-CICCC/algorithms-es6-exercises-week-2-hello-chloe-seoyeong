/*Caze Maker II
We will still be given an input string to convert. However, this time, we'll also be given a casing style to work with. The following code block will describe all the casing styles to support. We may also receive an array of casing styles, and each of these should be applied.

Instruction
Create a function named makeCaze that will receive an input string and one or more casing options. Return a new string that is formatted based on casing options:

Precedence of each of the casing styles are as follows, values higher in the list should be processed first:

camel, pascal, snake, kebab, title
vowel, consonant
upper, lower
Our function should be able to handle all of these cases.

For more information on casing styles, read Wikipedia's Special Case Styles for a list of various casing examples.

*/

const makeCaze = function (input, caze) {
  // Put your solution here
  let cazeArray = [];
  let resultCaze = "";

  if((typeof caze) !== "object") {
    cazeArray.push(caze);
  } else {
    cazeArray = caze;
  }

  let newCaze = cazeArray.map((cazeItem, index) => {
    if (index > 0) {
      result = checkType(cazeItem, result);
    } else {
      result = checkType(cazeItem, input);
    }
    return result;
  })

  if (cazeArray.length > 1) {
    newCaze = newCaze[cazeArray.length -1];
  }

  return newCaze.toString();
};

const checkType = function (caze, input) {
  let text = "";
  let splitText = [];
  if (caze !== "upper" || caze !== "lover") {
    splitText = input.split(" ");
  }
  
  if (caze === "upper") {
    text = input.toUpperCase(input);
  } else if (caze === "lower") {
    text = input.toLowerCase(input);
  } else if (caze === "snake") {
    text = splitText.join("_");
  } else if (caze === "kebab") {
    text = splitText.join("-");
  } else {
    text = makeUpperCase(splitText, caze);
  }
  // else if (caze === "pascal") {
  //   text = makeUpperCase(splitText, caze);
  // } else if (caze === "camel") {
  //   text = makeUpperCase(splitText, caze); 
  // } else if (caze === "title") {
  //   text = makeUpperCase(splitText, caze);
  // } else if (caze === "vowel") {
  //   text = makeUpperCase(splitText, caze); 
  // }

  return text;
}

const makeUpperCase = function (input, type) {
  let cazeWord = "";
  const vowelCharacter = ["a", "e", "i", "o", "u"];

  const resultArray = input.map((word, index) => {
    if (type === "pascal" || type === "title") {
      word = word.split("");
      word[0] = word[0].toUpperCase();
      word = word.join("");
    } else if (type === "camel") {
      if (index !== 0) {
        word = word.split("");
        word[0] = word[0].toUpperCase();
        word = word.join("");
      } else  {
        word = word;
      }
    } else if (type === "vowel") {
      word = word.split("");
      word.forEach((element, index) => {
        for(let i = 0; i < vowelCharacter.length; i++) {
          if(element === vowelCharacter[i]) {
            word[index] = element.toUpperCase();
          }
        }
      });
      word = word.join("");
    } else if (type === "consonant") {
      word = word.split("");
      word.forEach((element, index) => {
        for(let i = 0; i < vowelCharacter.length; i++) {
          if(element.toLowerCase() === vowelCharacter[i]) {
            word[index] = element.toLowerCase();
          }
        }
      });
      word = word.join("");
    }
    return word;
  })

  if (type === "title" || type === "vowel" || type === "consonant") {
    cazeWord = resultArray.join(" ");
  } else {
    cazeWord = resultArray.join("");
  }

  return cazeWord;
}

console.log(makeCaze("this is a string", "camel")); // thisIsAString
console.log(makeCaze("this is a string", "pascal")); // ThisIsAString
console.log(makeCaze("this is a string", "snake")); // this_is_a_string
console.log(makeCaze("this is a string", "kebab")); // this-is-a-string
console.log(makeCaze("this is a string", "title")); // This Is A String
console.log(makeCaze("this is a string", "vowel")); // thIs Is A strIng
console.log(makeCaze("this is a string", "consonant")); // THiS iS a STRiNG
console.log(makeCaze("this is a string", ["upper", "snake"])); // THIS_IS_A_STRING

module.exports = makeCaze;
