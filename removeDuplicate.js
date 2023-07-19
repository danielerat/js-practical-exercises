function removeDuplicate(array) {
  const newArray = [];
  array.forEach((element) => {
    if (newArray.indexOf(element) === -1) {
      newArray.push(element);
    }
  });
  return newArray;
}
console.log(removeDuplicate([1, 2, 22, 3, 3]));
