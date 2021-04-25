
   var removeRow=function(){
	var row = this.parentNode.parentNode;

	row.parentNode.removeChild(row);

}


function addRow() {
	var expenseName = document.getElementById("new-expense").value;
	var date = document.getElementById("new-expense-date").value;
	var price = document.getElementById("new-expense-price").value;


	var table = document.getElementsByTagName("table")[0];
	var newRow = table.insertRow(table.rows.length);
	
	var cell0 = newRow.insertCell(0);
	var cell1 = newRow.insertCell(1);
	var cell2 = newRow.insertCell(2);
	var cell3 = newRow.insertCell(3);
	var cell4 = newRow.insertCell(4);

	cell0.innerHTML=table.rows.length -1;
	cell1.innerHTML=expenseName;
	cell2.innerHTML=date;
	cell3.innerHTML=price + " Rs";

	var btn = document.createElement('button');
	btn.classList.add("cross");
	btn.textContent= "X";
	cell4.appendChild(btn);

	btn.onclick = removeRow;

}




  