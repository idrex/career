function promiseAll(arrayPromise) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(arrayPromise)) return new TypeError('arrayPromise is array');
    let count = 0;
    const result = [];
    arrayPromise.forEach(item => {
      Promise.resolve(item).then((res, index) => {
        count ++;
        result[index] = res
        if (count === arrayPromise.length) {
          resolve(result)
        }
      }).catch(reror => reject(reror))
    })
  })
}

promiseAll([1, 2, 4]).then(res => console.log(res))