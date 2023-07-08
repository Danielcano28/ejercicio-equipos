const users = [
	{
		name: "brayan stiven",
		age: 23,
		ocuation: "dev",
		perfil: `Desarrollador Full Stack Web con 3 años de experiencia. Apasionado por la programación, domina el front-end y el back-end. Adora los gatos y disfruta aprender sobre su comportamiento. También es entusiasta de la observación del cielo, fascinado por las estrellas y el universo. Busca oportunidades para crecer y crear soluciones innovadoras.`,
		hobbies: ["learn", "read", "eat", "run"],
	},
	{
		name: "Edwar",
		age: 33,
		ocuation: "Dev in progress",
		perfil: `Estudiante promedio y canson`,
		hobbies: ["ya no es ella", "soy yo", "XD", "A gozar"],
	},
	{
		name: "Carlos",
		age: 25,
		ocuation: "Web fullstack develpment",
		perfil: `Dev Junior`,
		hobbies: ["code", "football", "videogame", "exercises"],
	},
	{
		name: "Gustavo Alberto Molano Ruiz",
		age: 54,
		ocuation: "FrontEnd Developer",
		perfil: `Me gusta mucho desarrollar aplicaciones en FrontEnd y además de eso disfruto viajar y conducir motos`,
		hobbies: ["motos", "cine", "cocinar", "viajar"],
	},
	{
		name: "Juan",
		age: 60,
		ocuation: "tradef",
		perfil: `comerciante profesional en el intercambio de bienes electronicos`,
		hobbies: [
			"jugar fornai",
			"ver cómo BTC se cae",
			"ir a comer hamburguesas",
			"juzgar a la gente ",
		],
	},
	{
		name: "Danilo-COONUX",
		age: 25,
		ocuation: "Estudiante",
		perfil: "desempleado",
		hobbies: ["p", "g", "l", "programador"],
	},
	{
		name: "Angel Nieto",
		age: 29,
		ocuation: "Maestro Matematicas",
		perfil: `desarrollador de HTML`,
		hobbies: ["CSS", "JavaScript", "matematicas", "ver Naruto sin relleno"],
	},
	{
		name: "Martin",
		age: 18,
		ocuation: "Ex professional e-sports player",
		perfil: `Estudiante decidido pero lento `,
		hobbies: ["Videojuegos", "Boxeo", "Gym", "Boxeo x2"],
	},
	{
		name: "Juan",
		age: 27,
		ocupation: "Dev ",
		perfil: "Estudiante",
		hobbies: ["correr", "tomar", "leer", "raves"],
	},
	{
		name: "Kevin Polo",
		age: 19,
		ocuation: "amo de la silla",
		perfil: `quiere trabajar por dinero`,
		hobbies: ["ejercicio", "programacion", "dibujo", "cocina"],
	},
	{
		name: "Juan carlos",
		age: 38,
		ocuation: "Ingeniero Mecanico",
		perfil: "Me gusta aprender a programar en diferentes tipos de lenguajes, realizar viajes, manejar autos .... ",
		hobbies: ["futbol", "musica", "baile", ""],
	},
];

function printHobbies(hobbies) {
	let html = "";

	for (const hobby of hobbies) {
		html += `
        <li>${hobby}</li>
        `;
	}

	return html;
}

function printUsers(array) {
	let html = "";

	for (const { age, hobbies, name, ocuation, perfil } of array) {
		html += `
            <div class="user">
                <p>${name} - ${age}</p>
                <p>${ocuation}</p>
                <p>
                    <small>${perfil}</small>
                </p>
                <ul>
                    ${printHobbies(hobbies)}
                </ul>
            </div>
         `;
	}

	document.querySelector(".users").innerHTML = html;
}

document.querySelector(".buttons").addEventListener("click", function (e) {
	if (e.target.classList.contains("btn")) {
		if (e.target.id === "btnAZ") {
			const arrayAux = structuredClone(users).sort((a, b) =>
				a.name.localeCompare(b.name)
			);
			printUsers(arrayAux);
		}

		if (e.target.id === "btnZA") {
			const arrayAux = structuredClone(users).sort((a, b) =>
				b.name.localeCompare(a.name)
			);
			printUsers(arrayAux);
		}

		if (e.target.id === "btnAgesMin") {
			const arrayAux = structuredClone(users).sort(
				(a, b) => a.age - b.age
			);
			printUsers(arrayAux);
		}

		if (e.target.id === "btnAgesMax") {
			const arrayAux = structuredClone(users).sort(
				(a, b) => b.age - a.age
			);
			printUsers(arrayAux);
		}

		if (e.target.id === "btnOriginal") {
			printUsers(users);
		}
	}
});

printUsers(users);
