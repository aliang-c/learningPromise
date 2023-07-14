function Promise(executor) {
  // 执行器函数是同步执行的
  function resolve(data) {}

  function reject(data) {}
}

Promise.prototype.then = function (onResolved, onRejected) {};
