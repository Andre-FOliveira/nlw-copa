function createGame(player1, hour, player2) {
    return `
        <li>
            <figure>
                <img src="./src/logo-${player1}.svg" alt="Bandeira do ${player1}">
                <figcaption>${player1}</figcaption>
            </figure>
            
            <strong>${hour}</strong>
            
            <figure>             
                <img src="./src/logo-${player2}.svg" alt="Bandeira do ${player2}">
                <figcaption>${player2}</figcaption>
            </figure>   
        </li>    
    `
}

let delay = -0.4;
function createCard(date, day, fase, games) {
    delay = delay + 0.4;
    return `
        <div class="card" style="animation-delay: ${delay}s">
            <h2>${date} <span>${day}</span></h2>
            <h3> ${fase}</h3>
            <ul>
                ${games}     
            </ul>
        </div>
    `
}

document.querySelector("#cards").innerHTML =

    createCard("20/11", "domingo", "Fase de Grupo", createGame("catar", "13:00", "equador")) +

    createCard("21/11", "segunda", "Fase de Grupo", createGame("inglaterra", "10:00", "ira") +
        createGame("Senegal", "13:00", "Holanda") +
        createGame("Usa", "16:00", "Gales")) +

    createCard("22/11", "terça", "Fase de Grupo", createGame("argentina", "07:00", "arabia") +
        createGame("Dinamarca", "10:00", "Tunisia") +
        createGame("Mexico", "13:00", "Polonia") +
        createGame("Franca", "16:00", "Australia")) +

    createCard("23/11", "quarta", "Fase de Grupo", createGame("marrocos", "07:00", "croacia") +
        createGame("Alemanha", "10:00", "Japao") +
        createGame("Espanha", "13:00", "Costarica") +
        createGame("Belga", "16:00", "Canada")) +


    createCard("24/11", "quinta", "Fase de Grupo", createGame("suica", "07:00", "camaroes") +
        createGame("Uruguai", "10:00", "Corea") +
        createGame("Portugal", "13:00", "Gana") +
        createGame("Brasil", "16:00", "Servia")) +

    createCard("25/11", "sexta", "Fase de Grupo", createGame("gales", "07:00", "ira") +
        createGame("Catar", "10:00", "Senegal") +
        createGame("Holanda", "13:00", "Equador") +
        createGame("Inglaterra", "16:00", "Usa")) +

    createCard("26/11", "sabado", "Fase de Grupo", createGame("tunisia", "07:00", "australia") +
        createGame("Polonia", "10:00", "Arabia") +
        createGame("Franca", "13:00", "Dinamarca") +
        createGame("Argentina", "16:00", "Mexico")) +

    createCard("27/11", "domingo", "Fase de Grupo", createGame("japao", "07:00", "costarica") +
        createGame("Belga", "10:00", "Marrocos") +
        createGame("Croacia", "13:00", "Canada") +
        createGame("Espanha", "16:00", "Alemanha")) +

    createCard("28/11", "segunda", "Fase de Grupo", createGame("camaroes", "07:00", "servia") +
        createGame("Corea", "10:00", "Gana") +
        createGame("Brasil", "13:00", "Suica") +
        createGame("Portugal", "16:00", "Uruguai")) +

    createCard("29/11", "teça", "Fase de Grupo", createGame("equador", "12:00", "senegal") +
        createGame("Holanda", "12:00", "Catar") +
        createGame("Ira", "16:00", "Usa") +
        createGame("Gales", "16:00", "Inglaterra")) +

    createCard("30/11", "quarta", "Fase de Grupo", createGame("tunisia", "12:00", "franca") +
        createGame("Australia", "12:00", "Dinamarca") +
        createGame("Polonia", "16:00", "Argentina") +
        createGame("Arabia", "16:00", "Mexico")) +

    createCard("01/12", "quinta", "Fase de Grupo", createGame("Croacia", "12:00", "Belga") +
        createGame("Canada", "12:00", "Marrocos") +
        createGame("Japao", "16:00", "Espanha") +
        createGame("Costarica", "16:00", "Alemanha")) +

    createCard("02/12", "sexta", "Fase de Grupo", createGame("Corea", "12:00", "Portugal") +
        createGame("Gana", "12:00", "Uruguai") +
        createGame("Servia", "16:00", "Suica") +
        createGame("Camaroes", "16:00", "Brasil")) +

    createCard("03/12", "sabado", "Oitavas de Final", createGame("confirmar", "12:00", "confirmar") +
        createGame("confirmar", "16:00", "confirmar")) +

    createCard("04/12", "domingo", "Oitavas de Final", createGame("confirmar", "12:00", "confirmar") +
        createGame("confirmar", "16:00", "confirmar")) +

    createCard("05/12", "segunda", "Oitavas de Final", createGame("confirmar", "12:00", "confirmar") +
        createGame("confirmar", "16:00", "confirmar")) +

    createCard("06/12", "terça", "Oitavas de Final", createGame("confirmar", "12:00", "confirmar") +
        createGame("confirmar", "16:00", "confirmar")) +

    createCard("09/12", "sexta", "Quartas de Final", createGame("confirmar", "12:00", "confirmar") +
        createGame("confirmar", "16:00", "confirmar")) +

    createCard("10/12", "sabado", "Quartas de Final", createGame("confirmar", "12:00", "confirmar") +
        createGame("confirmar", "16:00", "confirmar")) +

    createCard("13/12", "terça", "Semifinal", createGame("confirmar", "16:00", "confirmar")) +

    createCard("14/12", "quarta", "Semifinal", createGame("confirmar", "16:00", "confirmar")) +

    createCard("17/12", "sabado", "Disputa 3º Lugar", createGame("confirmar", "12:00", "confirmar")) +


    createCard("18/12", "domingo", "final", createGame("confirmar", "12:00", "confirmar"))

const btnChangeColor = document.querySelector('#button-theme');

let bgdColors = ["yellow", "blue", "green"];
let position = 0;

btnChangeColor.addEventListener("click", function (event) {
    position = (position + 1) % bgdColors.length;
    event.target.parentNode.parentNode.parentNode.className = bgdColors[position]
})
