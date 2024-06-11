function calculateForageResult(wh, th, l) {
  wh = Number(wh);
  th = Number(th);
  l = Number(l);
  if (isNaN(wh) || isNaN(th) || isNaN(l)) {
      return "Invalid input";
  }
  if (wh < 2) {
      return "Well depth is too small.";
  } else if (wh > 200) {
      return "Well depth is too long.";
  } else {
      const result = (wh + th * l + 25) * 0.1 * 9810;
      return result.toFixed(2);
  }
}

function calculateWellResult(heightToTank) {
  const wh = Number(heightToTank);
  if (isNaN(wh)) {
      return "Invalid input";
  }

  switch (true) {
      case wh >= 2 && wh <= 49:
          return (wh + 25 * 0.1 * 9810).toFixed(2);
      case wh >= 50 && wh <= 99:
          return (wh + 25 * 0.2 * 9810).toFixed(2);
      case wh >= 100 && wh <= 149:
          return (wh + 25 * 0.3 * 9810).toFixed(2);
      case wh >= 150 && wh <= 199:
          return (wh + 25 * 0.4 * 9810).toFixed(2);
      case wh >= 200 && wh <= 100000:
          return "Can't generate this demand";
      default:
          return "Invalid input";
  }
}

module.exports = { calculateForageResult, calculateWellResult };
