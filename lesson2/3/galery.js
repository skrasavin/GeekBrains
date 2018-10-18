var xhr = new XMLHttpRequest();
xhr.open("GET", "http://127.0.0.1:8080/photoGallery.txt");

xhr.send();

console.log(xhr.onreadystatechange);