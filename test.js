function Prime(n) {

if (n >= 2) {

for (var i = 2; i < n; i++) {
if(n % i === 0) {

return false;
}
}

return true;
}

return false;
}

console.log(Prime(7));
