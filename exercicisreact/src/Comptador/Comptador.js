import {usestate} from "react";
import "./Comptador.css";

<script type="text/javascript">
        /* Declaramos las variables en las que llamaremos a todos los ids, mas declararemos el contador que vamos a usar */
        var btnElm = document.getElementById('btnClick'),
            btnClear = document.getElementById('btnClear'),
            pElm = document.getElementById('contarClick')
            sect = document.getElementById('sect'),
            contar = 0;
        /* Declaramos una constante sbg con una funcion para generar un color aleatorio y se lo agregamos la variabole "sect" que representa la seccion completa del contenido. */
        const sbg = function(){
            const randColor = Math.floor(Math.random() * 16777215).toString(16);
            sect.style.backgroundColor = "#" + randColor;
        }
        /* introducimos el valor inicial del contador para que no este vacio */
        pElm.textContent = 0;
        /* agregar el evento onclick para comenzar a contar, cada vez que se haga click en el boton se aumenta el valor de la variable contar, se muestra ese valor en el parrafo, y se ejecuta la funcion sbg() para cambiar el color del fondo. */
        btnElm.onclick = function(){
            contar++;
            pElm.textContent = contar;
            sbg();
        }
        /* Para devolver el contador a cero y el fondo a blanco */
        btnClear.onclick = function(){
            pElm.textContent = 0;
            contar = 0;
            sect.style.backgroundColor = "white";
        }
    </script><section id="sect">
        <div class="midl">
            <div>
                <h1>Contador de click sobre un boton</h1>
            </div>
            <button id="btnClick">Cuenta</button>
            <button id="btnClear">Reset</button>
            <p id="contarClick"></p>
        </div>
    </section>