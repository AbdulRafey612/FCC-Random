function Hello(){
let xhr = new XMLHttpRequest();
console.log(xhr.readyState);
xhr.open("GET","https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json",true);
console.log(xhr.readyState);
console.log(document.getElementById("demo"));	
console.log(document.getElementById("demo"));
}
setTimeout(Hello,3000);

