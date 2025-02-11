export default function nextItem(drawer, setter, list, direction) {
  if (direction === "forward") {
    const nextIndex = (drawer + 1) % list.length;
    setter(nextIndex);
  } else if (direction === "backward") {
    const nextIndex = (drawer - 1 + list.length) % list.length;
    setter(nextIndex);
  }
}
