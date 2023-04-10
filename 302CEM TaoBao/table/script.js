fetch("products.json")
.then(function(response){
	return response.json();
})
.then(function(products){
	let placeholder = document.querySelector("#data-output");
	let out = "";
	for(let product of products){
		out += `
			<tr>
				<td>${product.OID}</td>
				<td>${product.customer_id}</td>
				<td>${product.item_no}</td>
				<td>${product.item_quantity}</td>
				<td>${product.address}</td>
			</tr>
		`;
	}

	placeholder.innerHTML = out;
});