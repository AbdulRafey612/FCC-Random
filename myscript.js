let resp;
let org_resp;
let colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
const random_num = ()=>{
	let num = Math.floor(Math.random() * 101);
	return num;
};	
function Hello(){
	console.log("Execution Begun");
let xhr = new XMLHttpRequest();
xhr.onreadystatechange = ()=>{
	console.log(xhr.readyState);
	if(xhr.readyState == 4){
		resp = xhr.response; 
		org_resp = JSON.parse(resp);
		let r_num = random_num();
		let current_color = colors[Math.floor(Math.random() * 12)];
		$(".colr").css("background-color",current_color); 
		document.getElementById('text').innerHTML = "\"" + org_resp.quotes[r_num].quote;
		document.getElementById('author').innerHTML = org_resp.quotes[r_num].author;
				
	}
};
xhr.open("GET","https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json",true);
xhr.send();
}

$('document').ready(Hello());
