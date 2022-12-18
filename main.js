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
                <figcaption>${player2}   </figcaption>
            </figure> 
        </li>    
    `
}

function createResultado(res) {
    return `
                
        <strong class="pl">${res}</strong>
    
    `
}


document.querySelector("#cards").innerHTML =

    createCard("20/11", "domingo", "Fase de Grupo", createGame("Catar", "13:00", "Equador"), createResultado("0  x  2"))+

    createCard("21/11", "segunda", "Fase de Grupo", createGame("Inglaterra", "10:00", "Ira"), createResultado("6  x  2") +
        createGame("Senegal", "13:00", "Holanda")+ createResultado("0  x  2") +
        createGame("Usa", "16:00", "Gales")+ createResultado("1  x  1")) +

    createCard("22/11", "terça", "Fase de Grupo", createGame("Argentina", "07:00", "Arabia"), createResultado("1  x  2") +
        createGame("Dinamarca", "10:00", "Tunisia") + createResultado("0  x  0")+
        createGame("Mexico", "13:00", "Polonia") + createResultado("0  x  0")+
        createGame("Franca", "16:00", "Australia") + createResultado("4  x  1")) +

    createCard("23/11", "quarta", "Fase de Grupo", createGame("Marrocos", "07:00", "Croacia"), createResultado("0  x  0")+
        createGame("Alemanha", "10:00", "Japao") + createResultado("1  x  2")+
        createGame("Espanha", "13:00", "Costarica") + createResultado("7  x  0")+
        createGame("Belga", "16:00", "Canada")+ createResultado("1  x  0")) +


    createCard("24/11", "quinta", "Fase de Grupo", createGame("Suica", "07:00", "Camaroes"), createResultado("1  x  0")+
        createGame("Uruguai", "10:00", "Corea") + createResultado("0  x  0")+
        createGame("Portugal", "13:00", "Gana") + createResultado("3  x  2")+
        createGame("Brasil", "16:00", "Servia") + createResultado("2  x  0"))+

    createCard("25/11", "sexta", "Fase de Grupo", createGame("Gales", "07:00", "Ira"), createResultado("0  x  2")+
        createGame("Catar", "10:00", "Senegal") + createResultado("1  x  3")+
        createGame("Holanda", "13:00", "Equador") + createResultado("1  x  1")+
        createGame("Inglaterra", "16:00", "Usa")+ createResultado("0  x  0")) +

    createCard("26/11", "sabado", "Fase de Grupo", createGame("Tunisia", "07:00", "Australia"), createResultado("0  x  1")+
        createGame("Polonia", "10:00", "Arabia") + createResultado("2  x  0")+
        createGame("Franca", "13:00", "Dinamarca") + createResultado("2  x  1")+
        createGame("Argentina", "16:00", "Mexico")+ createResultado("2  x  0") ) + 

    createCard("27/11", "domingo", "Fase de Grupo", createGame("Japao", "07:00", "Costarica"), createResultado("0  x  1")+
        createGame("Belga", "10:00", "Marrocos") +createResultado("0  x  2")+
        createGame("Croacia", "13:00", "Canada") +createResultado("4  x  1")+
        createGame("Espanha", "16:00", "Alemanha")+createResultado("1  x  1")) +

    createCard("28/11", "segunda", "Fase de Grupo", createGame("Camaroes", "07:00", "Servia"), createResultado("3  x  3")+
        createGame("Corea", "10:00", "Gana") +createResultado("2  x  3")+
        createGame("Brasil", "13:00", "Suica") +createResultado("1  x  0")+
        createGame("Portugal", "16:00", "Uruguai")+createResultado("2  x  0")) +

    createCard("29/11", "terça", "Fase de Grupo", createGame("Equador", "12:00", "Senegal"), createResultado("1  x  2")+
        createGame("Holanda", "12:00", "Catar") +createResultado("2  x  0")+
        createGame("Ira", "16:00", "Usa") +createResultado("0  x  1")+
        createGame("Gales", "16:00", "Inglaterra") +createResultado("0  x  3")) +

    createCard("30/11", "quarta", "Fase de Grupo", createGame("Tunisia", "12:00", "Franca"),createResultado("1  x  0")+
        createGame("Australia", "12:00", "Dinamarca") + createResultado("1  x  0")+
        createGame("Polonia", "16:00", "Argentina") +createResultado("0  x  2")+
        createGame("Arabia", "16:00", "Mexico") + createResultado("1  x  2")) +

    createCard("01/12", "quinta", "Fase de Grupo", createGame("Croacia", "12:00", "Belga"), createResultado("0  x  0")+
        createGame("Canada", "12:00", "Marrocos") + createResultado("1  x  2")+
        createGame("Japao", "16:00", "Espanha") +createResultado("2  x  1")+
        createGame("Costarica", "16:00", "Alemanha")+createResultado("2  x  4")) +

    createCard("02/12", "sexta", "Fase de Grupo", createGame("Corea", "12:00", "Portugal"), createResultado("2  x  1")+
        createGame("Gana", "12:00", "Uruguai") +createResultado("0  x  2")+
        createGame("Servia", "16:00", "Suica") +createResultado("2  x  3")+
        createGame("Camaroes", "16:00", "Brasil")+createResultado("1  x  0")) +

    createCard("03/12", "sabado", "Oitavas de Final", createGame("Holanda", "12:00", "Usa"), createResultado("3  x  1")+
        createGame("Argentina", "16:00", "Australia")+createResultado("2  x  1")) +

    createCard("04/12", "domingo", "Oitavas de Final", createGame("Franca", "12:00", "Polonia"),createResultado("3  x  1")+
        createGame("Inglaterra", "16:00", "Senegal")+createResultado("3  x  0")) +

    createCard("05/12", "segunda", "Oitavas de Final", createGame("Japao", "12:00", "Croacia"),createResultado("1  x  1")+
        createGame("Brasil", "16:00", "Corea")+createResultado("4  x  1")) +

    createCard("06/12", "terça", "Oitavas de Final", createGame("Marrocos", "12:00", "Espanha"),createResultado("0 x  0")+
        createGame("Portugal", "16:00", "Suica")+createResultado("6  x  1")) +

    createCard("09/12", "sexta", "Quartas de Final", createGame("Brasil", "12:00", "Croacia"),createResultado("1  x  1")+
        createGame("Holanda", "16:00", "Argentina")+createResultado("2  x  2")) +

    createCard("10/12", "sabado", "Quartas de Final", createGame("Marrocos", "12:00", "Portugal"),createResultado("1  x  0")+
        createGame("Franca", "16:00", "Inglaterra")+createResultado("2  x  1")) +

    createCard("13/12", "terça", "Semifinal", createGame("Croacia", "16:00", "Argentina"),createResultado("0  x  3")) +

    createCard("14/12", "quarta", "Semifinal", createGame("Marrocos", "16:00", "Franca"),createResultado("0  x  2")) +

    createCard("17/12", "sabado", "Disputa 3º Lugar", createGame("Croacia", "12:00", "Marrocos"),createResultado("2  x  1")) +


    createCard("18/12", "domingo", "final", createGame("Argentina", "12:00", "Franca"),createResultado("3  x  3 "))

const btnChangeColor = document.querySelector('#button-theme');

let bgdColors = ["yellow", "blue", "green"];
let position = 0;

btnChangeColor.addEventListener("click", function (event) {
    position = (position + 2) % bgdColors.length;
    event.target.parentNode.parentNode.parentNode.className = bgdColors[position]
})
