//map
const array = [1, 2, 3, 4, 5, 6]

const result = array.map((ele, idx ,arr) => {
  <li>{ele}</li>
})

//filter 過濾出偶數
const result = array.filter((elem, idx, arr) => {
  return elem % 2 === 0;
})

//reduce 匯總成一個結果  加總陣列
const result = array.reduce((accumulator, elem , idx, arr) => {
  return accumulator + elem;
}, 0);

const result = array.reduce((acc, value) => {
  return acc + value;
}, 0);

