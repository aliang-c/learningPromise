function Promise(executor) {
  // 添加属性
  this.PromiseState = 'pending';
  this.PromiseResult = null;

  //保存实例对象的this的值
  let self = this;

  function resolve(data) {
    // 1.修改对象的属性(promiseState)
    //2.设置对象结构值(promiseResult)

    // this指向window 需要修改this指向
    // this.PromiseState = 'fulfilled';
    // this.PromiseResult = data;
    // console.log(this, self);
    self.PromiseState = 'fulfilled';
    self.PromiseResult = data;
  }

  function reject(data) {
    self.PromiseState = 'rejected';
    self.PromiseResult = data;
  }

  //抛出错误的时候设置状态为失败
  try {
    // 执行器函数是同步执行的
    executor(resolve, reject);
  } catch (error) {
    reject(error);
  }
}

Promise.prototype.then = function (onResolved, onRejected) {};
