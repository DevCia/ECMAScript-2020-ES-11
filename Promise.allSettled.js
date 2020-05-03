const promessa1 = new Promise(
  (res, rej) => setTimeout(res, 1000),
);

const promessa2 = new Promise(
  (res, rej) => setTimeout(res, 2000),
);

Promise
  .allSettled([promessa1, promessa2])
  .then(data => console.log(data))
  .catch(error => console.log(error));
