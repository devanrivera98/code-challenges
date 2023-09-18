export default function validTime(time) {
  const pattern = /[^0-9]/;
  time = time.split(pattern);

  if (Number(time[0]) > 23 || Number(time[1]) > 59) {
    return false;
  } else {
    return true;
  }
}
