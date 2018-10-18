var re = /\'/g;

var text = "At the English lesson we speak, \'read and write\'. We speak about school, " +
    "pupils and teachers, about lessons\n, \'animals and nature\', about our friends, sports " +
    "and games. We read \'books and stories\' about children";

text = text.replace(re, "\"");


console.log(text);