const readFileFn = function (path) {
  return new Promise((resolve, reject) => {
    require('fs').readFile(path, (err, data) => {
      if (err) reject(err);
      resolve(data.toString());
    });
  });
};
readFileFn('./01-Promise使用.tx')
  .then((value) => {
    console.log(value, '成功');
  })
  .catch((err) => {
    console.log(err);
  });
