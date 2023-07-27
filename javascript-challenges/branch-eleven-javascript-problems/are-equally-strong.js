export function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
  const yourBest = [yourLeft, yourRight];
  const friendsBest = [friendsLeft, friendsRight];
  if (Math.max(...yourBest) !== Math.max(...friendsBest) || Math.min(...yourBest) !== Math.min(...friendsBest)) {
    return false;
  } else {
    return true;
  }
}
