const fs = require('fs');

// fs.writeFile('./01-Promise使用.txt', '这是一个测试文件', (err) => {
//   if (err) throw err;
//   console.log('文件已被保存');
// });
// console.log('结尾');

// 回调函数形式
// fs.readFile('./01-Promise使用.txt', (err, data) => {
//   if (err) throw err;
//   console.log(data.toString());
// });
// console.log('结尾');

// 采用promise
const p = new Promise((resolve, reject) => {
  let file = fs.readFile('./01-Promise使用.txt', (err, data) => {
    if (err) throw err;
    resolve(data.toString());
  });
});
p.then((value) => {
  console.log(value, '成功');
}).catch((err) => {
  console.log(err);
});
