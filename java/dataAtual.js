/* JavaScript que controla Data Atual no topo da Tela, lado esquerdo */
type="text/javascript"

	dayName = new Array("Domingo", "Segunda-feira", "Terça-feira", 
		"Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado")

		monName = new Array("janeiro", "fevereiro", "março", "abril", "maio", 
		"junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro")

now = new Date
			
type="text/javascript"

	document.write("" + dayName[now.getDay()]
		+ ", " + now.getDate() + " de " + monName[now.getMonth()] + " de " 
		+ now.getFullYear() + "")
				