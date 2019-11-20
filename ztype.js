let i = setInterval(() => {
  for (let l of ig.game.entities.map(w => w.remainingWord).join('')) {
    ig.game.shoot(l);
  }
}, 200);
// clearInterval(i);
