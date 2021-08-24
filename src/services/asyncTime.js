const asyncTime = {
  wait : (ms) => new Promise((resolve) => {
    setTimeout(() => resolve(), ms);
  }),
}
export default asyncTime;