export default function electionWinner(votes, k) {
  const maxValue = Math.max(...votes);
  let count = 0;
  if (k === 0) {
    const [removedMaxValue] = votes.splice(votes.indexOf(maxValue), 1);
    console.log(removedMaxValue);
    if (removedMaxValue === Math.max(...votes)) {
      return 0;
    } else {
      return 1;
    }
  }
  for (let i = 0; i < votes.length; i++) {
    if ((votes[i] + k) > maxValue) {
      count++;
    }
  }
  return count;
}
