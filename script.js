let simbolo = 'X';
let gameEnd = false;

const casillas = document.querySelectorAll('.casilla');
const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];
function aparecerBoton(){
    if(!document.getElementById('boton')){
    const COMENZAR = document.getElementById("Comenzar");
    const  ITEM = document.createElement('button');
    ITEM.className = 'boton';
    ITEM.id ='boton';
    ITEM.innerText ="Comenzar de nuevo";
    COMENZAR.appendChild(ITEM);
    const BOTON = document.getElementById('boton');
    BOTON.addEventListener("click",()=>{
            if(gameEnd===true){
                casillas.forEach(casilla =>  { 
                    casilla.textContent = "";            
                })
                simbolo = 'X'
                gameEnd = false;
                COMENZAR.removeChild(ITEM);
            }
        });
    }
}
  casillas.forEach(casilla => {
    casilla.addEventListener("click", () => {     
      if (gameEnd) { 
        
        aparecerBoton();    
        return;
      }
      if (casilla.textContent === "") {
        casilla.textContent = simbolo;
        if (checkWin()) {
          gameEnd = true;
          alert(`${simbolo} es el ganador!`);
        } else if (checkEmpate()) {
          gameEnd = true;
          alert("Excelente juego, es un empate!");
        } else {
            simbolo = simbolo === "X" ? "O" : "X";
        }
      }
      
    });
  });  

function checkWin(){
    return winConditions.some(condicion =>{
        return condicion.every(index=> {
            return casillas[index].textContent === simbolo;
        });
    });
}
function checkEmpate(){
    return Array.from(casillas).every(casilla => {
        return casilla.textContent !== "";
    })
}
