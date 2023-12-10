export default function countMatches(x) {
  let count = 0;
  let numTeams = x;
  while (numTeams >= 2) {
    if (numTeams % 2 === 0) {
      numTeams = numTeams / 2;
      count += numTeams;
    } else {
      numTeams = Math.floor((numTeams / 2)) + 1;
      count += (numTeams - 1);
    }
  }

  return count;
}
