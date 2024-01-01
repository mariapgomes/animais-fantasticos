export default function debounce(callback, delay) {
  let timer;

  return (...arr) => {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      callback(...arr);
      timer = null;
    }, delay);
  };
}
