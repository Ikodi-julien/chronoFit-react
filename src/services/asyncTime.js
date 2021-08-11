export const asyncTime = {
  wait100ms : () => new Promise((resolve) => {
    setTimeout(() => resolve(), 100);
  }),
}