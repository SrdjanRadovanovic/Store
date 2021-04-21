function fun(){
	var ime = document.querySelector("input[name='ime']").value;
	var prezime = document.querySelector("input[name='prezime']").value;
	var mejl = document.querySelector("input[name='mejl']").value;
	var poruka = document.querySelector("textarea[name='poruka']").value;
	
	alert("Vase ime je: "+ime+","+"Vase prezime: " + prezime+","+"Vas mejl: " + mejl+","+"Vasa poruka je: "+poruka);
}
