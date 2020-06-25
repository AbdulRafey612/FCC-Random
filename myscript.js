let resp;
let org_resp;
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
		document.getElementById('text').innerHTML = org_resp.quotes[r_num].quote;
		document.getElementById('author').innerHTML = org_resp.quotes[r_num].author;
				
	}
};
xhr.open("GET","https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json",true);
xhr.send();
}

$('document').ready(Hello());

			