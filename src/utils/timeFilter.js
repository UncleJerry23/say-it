export function timeFilter(hours, thoughts) {
  const timeBack = hours * 100 * 60 * 60;
  // console.log(thoughts);
  return thoughts.filter(i => {
    // console.log('timeback', timeBack);
    // console.log('now', Date.now());
    // console.log('thought time', Date.parse(i.time));
    // console.log((Date.now() - timeBack) < Date.parse(i.time));
    if((Date.now() - timeBack) < i.time) return i;
  });
}
