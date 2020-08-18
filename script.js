//definimos constantes para obetener los ID's de las etiquetas HTML
const btnEmpezar = document.getElementById('btnEmpezar')
const celeste = document.getElementById('celeste')
const violeta = document.getElementById('violeta')
const naranja = document.getElementById('naranja')
const verde = document.getElementById('verde')
const ULTIMO_NIVEL = 5

//clase principal
class Juego{
  //constructor
    constructor(){
      //invocamos los metodos
      this.inicializar()
      this.generarSecuencia()
      setTimeout(this.siguienteNivel, 500)
      }

      inicializar(){
        this.siguienteNivel = this.siguienteNivel.bind(this)

        //atamos el this al metodo elegir color para usar el this del juego
        this.elegirColor = this.elegirColor.bind(this)

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
        //usamos el metodo map para mapear cada posicion del array con un valor
        //multiplicamos *4 para que devuelva numeros del 1 al 3
       
        //this.secuencia = new Array(10).fill(0).map(n => Math.floor(Math.random()*4))
        this.secuencia = new Array(ULTIMO_NIVEL).fill(0).map(function n(){
          return Math.floor(Math.random()*4)
          }) 
      }

      siguienteNivel(){
        this.subnivel = 0
        this.asignarColor()
        this.agregarEventosClick()
      }

        tranformarNumeroAColor(num){
          //convertimos los numeros del array en un string para asigar un color
          switch (num) {
            case 0:
              return 'celeste'
            case 1:
              return 'violeta'
            case 2:
              return 'naranja'
            case 3:
              return 'verde'
          }
        }

        tranformarColorANumero(color){
          //convertimos los colores del array para asigar un numero
          switch (color) {
            case 'celeste':
              return 0
            case 'violeta':
              return 1
            case 'naranja':
              return 2
            case 'verde':
              return 3
          }
        }

        asignarColor(){
          //asiganamos un color a cada posicion del array con un for
          //usamos let en el for para conservar los valores en cada itecacion
          for (let i = 0; i < this.nivel; i++) {
            let color = this.tranformarNumeroAColor(this.secuencia[i]);
            setTimeout(() => {
              this.iluminarColor(color)
            }, 1000 * i);
            
          }
        }
        
        iluminarColor(color){
          //agregamos la clase light a las etiquetas del HTML
          this.colores[color].classList.add('light')
          setTimeout(() => this.apagarColor(color), 350)
        }

        apagarColor(color){
          //removemos la clase light de las etiquetas para seguir con el juego
          this.colores[color].classList.remove('light')
        }

        agregarEventosClick(){
          //usamos el evento click del mouse con addEventListener para cada uno de los colores

          // var _this = this
          //this.colores.celeste.addEventListener('click', this.elegirColor.bind(_this))
          this.colores.celeste.addEventListener('click', this.elegirColor)
          this.colores.violeta.addEventListener('click', this.elegirColor)
          this.colores.naranja.addEventListener('click', this.elegirColor)
          this.colores.verde.addEventListener('click', this.elegirColor)
        }

        eliminarEventosClick(){
          this.colores.celeste.removeEventListener('click', this.elegirColor)
          this.colores.violeta.removeEventListener('click', this.elegirColor)
          this.colores.naranja.removeEventListener('click', this.elegirColor)
          this.colores.verde.removeEventListener('click', this.elegirColor)
        }

        elegirColor(ev){

          console.log(ev);
          //console.log(ev);

          const nombreColor = ev.target.dataset.color
          const numeroColor = this.tranformarColorANumero(nombreColor)

          this.iluminarColor(nombreColor)

          //logica
          if(numeroColor === this.secuencia[this.subnivel]){
            this.subnivel++
            if(this.subnivel === this.nivel){
              this.nivel++
              this.eliminarEventosClick()
              if(this.nivel === (ULTIMO_NIVEL + 1)){
                //GANO!
              }else{
                setTimeout(this.siguienteNivel, 1500)
                
              }
            }
          }else{
            //listo perdiste
          }
        }
      }
  

  function empezarJuego() {
     window.juego = new Juego()
  }