// handling errors in JS

/* let a = 7 * undefined / "panama";
console.log(a); */

/* function beforeTryCatch() {
  let obj = undefined;

  console.log(obj.b);

  console.log(
    "If the previous line of code throws an exception you'llnever see this."
  );
}
beforeTryCatch(); */
/* 
function afterTryCatch() {
  try {
    let obj = undefined;

    console.log(obj.b);

    console.log(
      "If the previous line of code throws an exception you'llnever see this."
    );
  } catch (error) {
      console.log("I caught an exception: " + error.message);
  } finally {
      console.log("This would happen no matter what.")
  }
  console.log(`My application isstill running`);
}

afterTryCatch(); */


function performCalculation(obj) {
    if (!obj.hasOwnProperty('b')) {
        throw new Error('Object missing property');
    }
    // continue with the calculation usingobj/b
    return 6;
};

function performHigherLevelOperation() {
    let obj = {};
    let value = 0;
    try {
        value = perfomCalculation(obj);
    } catch (error) {
        console.log(error.message);
    }

    if (value == 0){
        // contigency
        // retry logic
    }
}

performHigherLevelOperation();
//6:17:35