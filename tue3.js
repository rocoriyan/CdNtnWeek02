let birthday = new Date('December 23, 1986'), today = new Date();
let dayDiff = Math.round((today - birthday) / 1000 / 86400) - 1;
console.log(`It's been ${dayDiff} days since I was born!`);