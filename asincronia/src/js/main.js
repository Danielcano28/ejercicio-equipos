const BASE_URL = "https://ecommercebackend.fundamentos-29.repl.co";

// fetch(BASE_URL)
// 	.then(function (data) {
// 		return data.json();
// 	})
// 	.then(function (res) {
// 		console.log(res);
// 	})
// 	.catch(function (error) {
// 		console.log(error, "este es el error");
// 	});

async function getApi() {
	try {
		const data = await fetch(BASE_URL);
		const res = await data.json();
		return res;
	} catch (error) {
		console.log(error, " => Esto es un error");
	}
}

function printProducts(products) {
	let html = "";

	for (const { image, name } of products) {
		html += `
			<div class="product">
				<div className="product__img">
					<img src="${image}" alt="${name}" />
				</div>
				<h2>${name}</h2>
			</div>
		`;
	}

	document.querySelector(".products").innerHTML = html;
}

async function main() {
	const products = await getApi();
	printProducts(products);
}

main();

// (async function (name) {
// 	console.log(name);
// 	const response = await getApi();
// 	console.log(response);
// })("brayan");
