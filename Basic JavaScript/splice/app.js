const month = ['jan', 'march', 'april', 'may', 'june', 'august', 'september', 'october', 'november', 'december'];
month.splice(1, 0, 'feb');
console.log(month);

month.splice(6, 2, 'july');
console.log(month);