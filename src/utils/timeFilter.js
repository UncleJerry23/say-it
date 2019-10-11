export function timeFilter(hours, thoughts) {
  const timeBack = hours * 100 * 60 * 60;
  return thoughts.filter(i => {
    if((Date.now() - timeBack) < Date.parse(i.time)) return i;
  });
}
