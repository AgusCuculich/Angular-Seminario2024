import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent implements AfterViewInit  {

  ngAfterViewInit() {
    //texto sobre la empresa.
    let text1 = document.getElementById('usInfo') as HTMLElement;
    //texto sobre las propiedades de las papas.
    let text2 = document.getElementById('potatoeProperties') as HTMLElement;

    //Contenedor que mostrará el texto de la empresa o la info nutricional.
    let container = document.getElementById('info-us') as HTMLElement;

    //botón asociado a la info de la empresa
    let btn1 = document.getElementById('usInfo-btn') as HTMLElement;
    //botón asociado a las propiedades de las papas.
    let btn2 = document.getElementById('potatoeProperties-btn') as HTMLElement;

    /*El siguiente código se encarga de concatenar el texto1 al contenedor padre
    (container) ni bien cargue el componente. A su vez, le quita la hidden al mismo
    y le añade la clase hidden al texto2 (esto es para que el html del texto2 no 
    ocupe espacio en la página).*/
    container.appendChild(text1);
    text1.classList.remove('hidden');
    text2.classList.add('hidden');
    
    /*Al hacer click en el botón1, primero se vereficará que el contenedor no este
    relleno con el texto1. Si no es así, limpiará el html que contenia y concatenará
    el html en text1. Se cumpla o no la condición, se añadirá la clase hidden al texto2
    y se le quitará la misma al texto1.*/
    btn1.addEventListener("click", () => {
      if (!container.contains(text1)) {
        container.innerHTML = '';  // Limpia el contenido actual
        container.appendChild(text1);  // Mueve text1 al contenedor
      }
      text1.classList.remove('hidden');
      text2.classList.add('hidden');
    });
    
    /*Cumple la misma función y sigue los mismos pasos que lo explicado con el btn1 pero
    al revés.*/
    btn2.addEventListener("click", () => {
      if (!container.contains(text2)) {
        container.innerHTML = '';  // Limpia el contenido actual
        container.appendChild(text2);  // Mueve text2 al contenedor
      }
      text2.classList.remove('hidden');
      text1.classList.add('hidden');
    });
  }
}
