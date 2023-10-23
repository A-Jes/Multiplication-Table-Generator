let generate = document.querySelector('.generate')

generate.addEventListener( 'click', function(){

let output = ''
let no_of_table = Number(document.querySelector('.table').value)
let table_length = Number(document.querySelector('.table-length').value)

if (no_of_table <= 0 || table_length <= 0) {
	alert ('Kindly input a higher number than 0')
} else {
	for (let start_table_from = 1; start_table_from <= no_of_table; start_table_from++ ) {
	output += '<div class="innerHTML">'
		output += `<h4 class= h4>${start_table_from} Multiplication table</h4>`

		

		for (let start_length_from = 1; start_length_from <= table_length; start_length_from++ ) {

			let multiplication_result = (start_table_from*start_length_from)
			output += `${start_table_from} X ${start_length_from} = ${multiplication_result} <br><hr>`

			
		}

		
	output += '</div>'
}
}

document.querySelector('.table-container').innerHTML = output

})



