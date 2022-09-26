/* eslint-disable no-param-reassign */
const data = [
  { name: 'a', amount: 1 },
  { name: 'a', amount: 2 },
  { name: 'a', amount: 3 },
  { name: 'b', amount: 2 },
  { name: 'b', amount: 3 },
  { name: 'c', amount: 3 },
  { name: 'c', amount: 2 },
  { name: 'c', amount: 3 },
];

const newData = data.reduce((prev, val) => {
  const elem = prev.findIndex(item => item && item.name === val.name);
  if (elem!==-1) {
    let element = prev[elem];
    element = {
      ...element,
      amount: (element.amount + val.amount) / (element.count + 1),
      count:element.count + 1
    };
    prev[elem]=element
    return prev
  }
  return [...prev, { ...val, count: 1 }];
}, []);
console.log(newData)
