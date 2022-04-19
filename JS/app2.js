let question_1 = prompt('Do you love JS ? , please answer with yes or no')
let question_2 = prompt('Do you like tutorials ? , please answer with yes or no')
let question_3 = prompt('do you consider yourself a self-taught person ? , please answer with yes or no')

let arr_1 = []
arr_1.push(question_1)


let function_1 = (arr_1) => {
  for (let i = 0; i < arr_1.length; i++) {
    const ans = arr_1[i];
    if (ans.toLowerCase() == 'yes') {
      console.log('====================================');
      console.log(`${ans}`);
      console.log('====================================');
    } else if (ans.toLowerCase() == 'no') {
      console.log('====================================');
      console.log(`${ans}`);
      console.log('====================================');
    } else {
      console.log('====================================');
      console.log('invalid');
      console.log('====================================');
    }
  } return;
};

let arr_2 = []
arr_2.push(question_2)

let function_2 = (arr_2) => {
  for (let i = 0; i < arr_2.length; i++) {
    const ans = arr_2[i];
    if (ans.toLowerCase() == 'yes') {
      console.log('====================================');
      console.log(`${ans}`);
      console.log('====================================');
    } else if (ans.toLowerCase() == 'no') {
      console.log('====================================');
      console.log(`${ans}`);
      console.log('====================================');
    } else {
      console.log('====================================');
      console.log('invalid');
      console.log('====================================');
    }
  } return;
};


let arr_3 = []
arr_3.push(question_3)

let function_3 = (arr_3) => {
  for (let i = 0; i < arr_3.length; i++) {
    const ans = arr_3[i];
    if (ans.toLowerCase() == 'yes') {
      console.log('====================================');
      console.log(`${ans}`);
      console.log('====================================');
    } else if (ans.toLowerCase() == 'no') {
      console.log('====================================');
      console.log(`${ans}`);
      console.log('====================================');
    } else {
      console.log('====================================');
      console.log('invalid');
      console.log('====================================');
    }
  } return;
};




console.log(arr_1);
console.log(arr_2);
console.log(arr_3);

function_1(arr_1);
function_2(arr_2);
function_3(arr_3);