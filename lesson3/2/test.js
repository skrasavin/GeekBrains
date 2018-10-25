var re = /'\B|\B'/g;

var text = "They sing songs, 'dance', look at pictures 'in interesting' books, draw, " +
    "learn to get on with 'their' classmates. She is Sebastian Marlow, aren't you?";

text = text.replace(re, "\"");
console.log(text);

