function mapToNegativize(sourceArray) {
  for (let i = 0; i < sourceArray.length; i++) {
    sourceArray[i] *= -1; //negative the array item
  }
  return sourceArray;
}

function mapToNoChange(sourceArray) {
  return sourceArray;
}
function mapToDouble(sourceArray) {
  for (let i = 0; i < sourceArray.length; i++) {
    sourceArray[i] *= 2; // double value of array item
  }
  return sourceArray;
}

function mapToSquare(sourceArray) {
  for (let i = 0; i < sourceArray.length; i++) {
    sourceArray[i] **= 2; // double value of array item
  }
  return sourceArray;
}

function reduceToTotal(sourceArray, startingPoint = 0) {
  let sum = startingPoint;
  for (let elem of sourceArray) {
    sum += elem;
  }
  return sum;
}

function reduceToAllTrue(sourceArray) {
  // check if all array elements are truthy or falsy
  //   return sourceArray.every(Boolean);
  for (let i = 0; i < sourceArray.length; i++) {
    if (!!sourceArray[i] === false) {
      return false;
    }
  }
  return true;
}

function reduceToAnyTrue(sourceArray) {
  for (let i = 0; i < sourceArray.length; i++) {
    if (sourceArray[i] === true) {
      return true;
    }
  }
  return false;
}
