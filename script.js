//definimos constantes para obetener los ID's de las etiquetas HTML
const btnEmpezar = document.getElementById('btnEmpezar')
const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')

class Juego{
    constructor(){
      this.inicializar()
      this.generarSecuencia()
      }

      inicializar(){
        //ocultamos el boton de empezar al dar click con la 
        //propiedad display:none definida en el .css
        btnEmpezar.classList.add('hide')
        this.nivel = 1
        this.colores= {
            celeste,
            violeta,
            naranja,
            verde
        } 
      }

      generarSecuencia(){
        //generamos un array de 10 posicones
        //usamos el metodo fill para inciializar en 0 las diez posiciones
        //metodo map
        //multiplicamos *4 para que devuelva numeros del 1 al 3
       
        //this.secuencia = new Array(10).fill(0).map(n => Math.floor(Math.random()*4))
        this.secuencia = new Array(10).fill(0).map(function n(){
          return Math.floor(Math.random()*4)
          }) 
        }
      }
  

  function empezarJuego() {
    debugger
     window.juego = new Juego()
  }