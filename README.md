# Tabla de contenido

[Introducción](#introducción)
[Estructura web](#estructura-web)
[Requisitos mínimos](#requisitos-mínimos)
[Estructura de directorios](#estructura-de-directorios-del-proyecto)
[Estructura del código](#estructura-del-código)
[Instalación local](#instalación-local)
[Proyecto en StackBlitz](#proyecto-en-stackblitz)
[Datos del alumno](#datos-del-alumno)
[Referencias y recursos](#referencias-y-recursos)

# Introducción

En este proyecto final desarrollado en Angular para el seminario de Angular 2024, simularemos el desarrollo de una página web resposive para una pyme que produce y comercializa una amplia gama de productos de papas.

### Estructura web:

* **Header**: compuesta del nombre de la pyme y una barra de navegación que permite un acceso sencillo y eficiente a los principales apartados de la página web.
* **Sección de productos**: presenta los productos en un formato de cartas donde se ve el nombre del producto, una foto del mismo y su precio tanto en pesos argentinos como en dólares, además de exhibir un botón que permite añadir el producto al carrito de compras.
* **Sección del carrito de compras**: nos permite visualizar los productos que el usuario desea comprar, aumentar o disminuir la cantidad de los mismos, o incluso eliminarlos. También presenta al usuario el precio unitario de los productos que añadió y el importe final. Momentáneamente, y al tratarse de una pyme, solo se podrán comprar un máximo de 5kg por producto.
* **Sección sobre nosotros**: compuesta por botones que al presionarlos presenta de manera dinámica la información que el usuario desea conocer. Actualmente hay dos botones: uno que muestra información sobre la empresa (podría ser su historia, compromiso con el medio ambiente, objetivos, etc) y otro que muestra información sobre el aporte nutricional de la papa.
* **Footer**: brinda información de contacto de la empresa, un pequeño formulario para que el usuario reciba ofertas a su correo de asi desearlo, y links hacia las redes sociales de la empresa.

# Requisitos mínimos

1. Ruteo: Implementar al menos dos secciones diferentes dentro de la aplicación, cada una con su propia ruta.
2. Componentes: Crear al menos una página que incluya al menos dos componentes distintos.
3. Interfaces: Utilizar interfaces para tipar los datos dentro de la aplicación.
4. Directivas o Control de Flujo: Emplear estructuras de control @for e @if (o directivas *ngFor y *ngIf) en las plantillas HTML para controlar el flujo de la renderización.
5. Comunicación entre Componentes: Implementar al menos una forma de comunicación entre componentes, ya sea mediante el uso de @Input/@Output o a través de un servicio compartido.
6. Servicios: Incluir al menos un servicio en el proyecto, que puede ser utilizado para la comunicación entre componentes, consumir una API externa o contener lógica de negocio aislada.

# Estructura de directorios del proyecto

Diagrama de estructura de directorios y archivos en Angular (con un ejemplo de lo que iría en cada carpeta).

```
/src
├── /app
│   ├── /components
│   │   ├── product-showcase
│   │   │   ├── product-showcase.component.ts
│   │   │   ├── product-showcase.component.html
│   │   │   └── product-showcase.component.scss
│   ├── /pages
│   │   ├── home-page
│   │   │   ├── home-page.component.ts
│   │   │   ├── home-page.component.html
│   │   │   └── home-page.component.scss
│   ├── /models
│   │   └── Product.ts
│   ├── /services
│   │   └── product-data.service.ts
│   ├── app-routing.module.ts
│   ├── app-component.html
│   ├── app-component.scss
│   ├── app-component.ts
│   ├── app.module.ts
├── /assets
│   ├── /img
```

* **/components** contiene los componentes más pequeños y reutilizables, además de aquellos que aparecen en todas las vistas de la página como son el caso del header y footer.

* **/pages** contiene los componentes de las páginas principales de la aplicación (como es el caso de home-page, el cual contiene tres componentes más chicos que se deben visualizar en la página principal).

* **/models** contiene clases e interfaces que definen la estructura de los datos.

* **/services** contiene los servicios de la aplicación.

# Estructura del código

### Componentes

**home-page** Sirve como contenedor para los componentes (product-showcase, about-us, shopping-cart) visualizados en la página principal.

**distributor-access** Contiene un form que lleva a una sección privada o protegida del sitio web destinada a distribuidores o socios comerciales (no es funcional, solo esta planteado conceptualmente para añadir distintas rutas a la aplicación).

**about-us** Muestra un contenedor con dos botones, cada uno al ser presionado muestra un texto predeterminado correspondiente. Esto se logra mediante una sencilla función la cual modifica el html del contenedor para mostrar el contenido deseado, y oculta el texto que no interesa observar.

**product-showcase** Utiliza la directiva @for junto con el pipe async para mostrar cada producto en una tarjeta que incluye su nombre, imagen, precios en dólares y pesos argentinos, y un botón para añadir el producto al carrito. Este componente no maneja directamente la visualización del precio, sino que se comunica con un componente hijo (currency) a través de enlace de datos (data binding) para delegar la responsabilidad de mostrar la información de precios.
Funcionalidades que cumple:
- Almacena en un atributo un observable el cual encapsula los datos de los productos solicitados desde una mockapi. Estos serán visualizados mediante la directiva @for junto con el pipe async.
- Maneja la suscripción al observable al crearse un componente y destruirse el mismo.
- Permite al usuario añadir productos al carrito de compras.

**currency** Se comunica con su componente padre "product-showcase" a través del decorator @Input. Este le pasa el precio de cada producto y la bandera del pais cuya moneda queremos exhibir.

**footer-content** Es un componente estático llamado desde app-component para que siempre sea visualizado en la página. Brinda información de contacto de la empresa, un pequeño formulario para que el usuario reciba ofertas a su correo de asi desearlo, y links hacia las redes sociales de la empresa.

**header-content** Es un componente estático llamado desde app-component para que siempre sea visualizado en la página. El mismo visualiza el nombre de la pyme y una barra de navegación que permite un acceso sencillo y eficiente a los principales apartados de la página web.

**shopping-cart** en este apartado se visualizan todos los productos añadidos desde su respectivo componente. 
Funcionalidades que cumple:
- Llama a una función que permite aumentar y disminuir la cantidad de cada producto.
- Llama a una función encargada de eliminar un producto del carrito de compras.
- Almacena en un atributo un observable que contendrá el valor total a pagar y que será visualizado en el precio final a pagar. Este valor cambiará antes los modificaciones (añadir, aumentar y disminuir cantidades o eliminar productos) en el carrito.

### Servicios y APIs

**product-cart** Maneja la lógica del carrito de compras. Contiene las funciones definidas para añadir productos, aumentar y disminuir las cantidades de los mismos, y eliminar productos del carrito de compras. 

- Atributos privados: 
    - Un arreglo que contendrá los productos del carrito de compras.
    - Un atributo que contendrá el total a pagar por el usuario.

Ambos atributos serán encapsulados en un BehaviourSubject el cual permitirá al resto de componentes que utilicen estos datos, suscribirse a los cambios de los mismos.

**product-data** Se encarga principalmente de manejar las solicitudes http de recursos necesarios para el product-showcase. Para esto dispone de dos métodos:

```typescript
getAll (): Observable<Product[]>    //Consume la mockapi creada para traer todos los productos en un json.
```

Api que consume:

<https://668b22000b61b8d23b08926e.mockapi.io/api/v1/products>

```typescript
getDollarRates(): Observable<JSON>    //Obtiene los datos actualizados del precio del dólar
```

Api que consume:

<https://dolarapi.com/v1/dolares/oficial>

### Modelos

**Product (Interface)** define la estructura de un objeto que representa un producto. 

```typescript
id: number,
name: string,
img: string,
price: number,
quantity: number,
```

# Instalación local

1. Clonar el repositorio

```bash
git clone https://github.com/AgusCuculich/Angular-Seminario2024.git
```

2. Instalar las dependencias necesarias para el proyecto

```bash
npm install
```

3. Levantar el servidor local en el puerto 4200 (Angular default)

```bash
ng serve
```

# Proyecto en StackBlitz

<https://stackblitz.com/~/github.com/AgusCuculich/Angular-Seminario2024>

# Datos del alumno

* **Nombre:** Agustina
* **Apellido:** Cuculich
* **DNI** 43980326
* **Email** cuculichagustina@gmail.com
* **Sede** Tandil

# Referencias y recursos

[Fetching Data from an API Using Reactive Programming in Angular with RxJS](https://blog.devgenius.io/fetching-data-from-an-api-using-reactive-programming-in-angular-with-rxjs-84e4a1e4bef7)

[Angular Router Fragmentation](https://medium.com/@xhulianmusaka00/angular-router-fragmentation-elevating-user-experience-with-angular-router-fragments-0cfbbf48b5f1)

[Setting up HttpClient](https://angular.dev/guide/http/setup)

[Cleanest way to subscribe to observable in OnInit](https://www.reddit.com/r/angular/comments/plnl6a/cleanest_way_to_subscribe_to_observable_in_oninit/)

[Api precio dolar](https://dolarapi.com/docs/argentina/)