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

function createCard(date, day, fase, games, placar) {
    delay = delay + 0.4;
    return `
        <div class="card" style="animation-delay: ${delay}s">
            <h2>${date} <span>${day}</span></h2>
            <h3> ${fase}</h3>
            <ul>
                ${games}
                ${placar}        
            </ul>
        </div>
    `
}

function createResultado(res) {
    return `
                
        <strong class="pl">${res}</strong>
    
    `
}


document.querySelector("#cards").innerHTML =

    createCard("24/11", "quinta", "Fase de Grupo",

        createGame("Brasil", "16:00", "Servia"), createResultado("2   x   0")) +

    createCard("28/11", "segunda", "Fase de Grupo",
        createGame("Brasil", "13:00", "Suica"), createResultado("1   x   0")) +

    createCard("02/12", "sexta", "Fase de Grupo",
        createGame("Camaroes", "16:00", "Brasil"), createResultado("1   x   0")) +
    
    createCard("05/12", "segunda", "Oitavas de Final", createGame("confirmar", "12:00", "confirmar"),createResultado("-  x  - ")+
        createGame("Brasil", "16:00", "Corea")+createResultado("-  x  - ")) 

/*  createCard("03/12", "sabado", "Oitavas de Final", createGame("confirmar", "12:00", "confirmar"), createResultado("-  x  - ")+
    createGame("confirmar", "16:00", "confirmar")+createResultado("-  x  - ")) +

    createCard("04/12", "domingo", "Oitavas de Final", createGame("confirmar", "12:00", "confirmar"),createResultado("-  x  - ")+
    createGame("confirmar", "16:00", "confirmar")+createResultado("-  x  - ")) +

    createCard("05/12", "segunda", "Oitavas de Final", createGame("confirmar", "12:00", "confirmar"),createResultado("-  x  - ")+
        createGame("Brasil", "16:00", "Korea")+createResultado("-  x  - ")) +

    createCard("06/12", "terça", "Oitavas de Final", createGame("confirmar", "12:00", "confirmar"),createResultado("-  x  - ")+
        createGame("confirmar", "16:00", "confirmar")+createResultado("-  x  - ")) +

    createCard("09/12", "sexta", "Quartas de Final", createGame("confirmar", "12:00", "confirmar"),createResultado("-  x  - ")+
        createGame("confirmar", "16:00", "confirmar")+createResultado("-  x  - ")) +

    createCard("10/12", "sabado", "Quartas de Final", createGame("confirmar", "12:00", "confirmar"),createResultado("-  x  - ")+
        createGame("confirmar", "16:00", "confirmar")+createResultado("-  x  - ")) +

    createCard("13/12", "terça", "Semifinal", createGame("confirmar", "16:00", "confirmar"),createResultado("-  x  - ")) +

    createCard("14/12", "quarta", "Semifinal", createGame("confirmar", "16:00", "confirmar"),createResultado("-  x  - ")) +

    createCard("17/12", "sabado", "Disputa 3º Lugar", createGame("confirmar", "12:00", "confirmar"),createResultado("-  x  - ")) +


    createCard("18/12", "domingo", "final", createGame("confirmar", "12:00", "confirmar"),createResultado("-  x  - "))

    */
