[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/HEVN0QSv)
[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=16748328&assignment_repo_type=AssignmentRepo)
# P5 project
This repository is the starting point of the assignments given in the course [Computergrafica per l'Information Design](https://www11.ceda.polimi.it/schedaincarico/schedaincarico/controller/scheda_pubblica/SchedaPublic.do?&evn_default=evento&c_classe=834257&lang=IT&__pj0=0&__pj1=9c10fe379e96db59d55d49b6b4252c5e).

# Assignmentt 1

## Vera Molnar, 1974, dalla serie (Des)ordres 1

 Questo progetto è una reinterpretazione dell'opera di Vera Molnar, parte della serie "(DES)ordres", realizzata nel 1974. Molnar, pioniera dell'arte generativa, esplora le interazioni tra ordine e caos per creare opere visive dinamiche. La mia versione, sviluppata in p5, mantiene questi temi, integrando elementi di randomicità attraverso il codice.
  
 ### Setup Iniziale

  Ho strutturato il mio canvas tremite un griglia quadrata 17x17 con "gridSize". Pero ogni cella della grigia ho pensato di creare un ciclo di quadrilateri irregolri, tramite la funzione random del posizionamento dei vertici, concentrici. 
  Inizialmente avevo impostato per ogni ciclo un numero base di quadrilateri concentrici pari a 9; in seguito mi sono resa conto che, nell' oper di Ver Molnar non tutti i cicli presentavano lo stesso numero di quadrilateri. Così ho pensato di creare una funzione che mi permettesse di randomicizzare e diminuire il numero di quadrilateri in circa 2/3 dei cicli. 

 ### Array "randomReduction"
 
 Dopo le considerazioni iniziali, ho deciso di utllizzare un array (seguendo anche alcuni tutorial). L'array "randomReduction" è utilizzato per memorizzare le posizioni dei cicli nella griglia che subiscono una riduzione casuale nel numero di quadrilateri concentrici disegnati. 

 ### Disegno della Griglia

 Tramite un ciclo annidato ho disegnato i quadrilateri in ogni punto della griglia centrata nel canvas. 
 La gabbia è strutturata in modo tale che quando un ciclo si trova in "randomReduction", il numero di quadrilateri da disegnare per quel punto diventa casuale, variando tra 3 e 8 (che sia quindi un valore inferiore a quello scelto di base).

 ### Funzione "drawQuadCycle"

 Con questa funzione ho disegnato i quadrilateri concentrici, con un fattore di riduzione "shrinkFactor" che varia per ciascun quadrato, creando l'effetto di quadrilateri sempre più piccoli verso il centro di ogni ciclo.

 ### Generazione dei Vertici

 Ho posizionato i vertici dei quadrilateri in modo casuale, con piccole variazioni nelle loro posizioni, grazie alla funzione "random", contribuendo a un effetto dinamico.

 ### Ridimensionamento del Canvas

 Ho veerificato che il canvas si ridimensionasse in base al display su cui viene visualizzato, mantenendo l'opera sempre visibile tramite la funzione "window".

