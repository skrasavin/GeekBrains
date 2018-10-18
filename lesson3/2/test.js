var re = /[\']/;

var text = "a'rent 's' 'asdasd'";

text = text.replace(re, "\"");


console.log(text);