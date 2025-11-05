Guía acá --> https://angular.dev/tutorials/first-app

# Documentación: Elementos relevantes de Angular empleados en el RetoCasas

Recopilación de los elementos, comandos, estructuras, conceptos y archivos principales de Angular.+

## Elementos y Funciones de Angular Relevantes

### Comandos de Angular CLI

- **`npx ng serve`**  
  Arranca el servidor en el puerto 4200.

- **`npm install @angular/cli`**  
  Para instalar angular.

- **`npx ng new casasArrayFotosWeb `**  
  Creacion de la carpeta.

  **`npx ng generate interface housinglocation `**  
  **`npx ng generate service housing `**  
  **`npx ng generate component home --standalone `**  
  Genera los componentes de Angular necesarios con los archivos básicos (TS, HTML, CSS)

---

### Decoradores

- **`@Component`**  
  Declara una clase como un componente de Angular.

- **`@Input()`**  
  Permite recibir datos desde un componente padre al hijo.

- **`@Output()`**  
  Permite emitir eventos personalizados del hijo al componente padre.

- **`@Injectable()`**  
  Declara una clase como inyectable, lo usamos para los servicios.

---

### Directivas Estructurales y De Plantilla

- **`@if`** 
  Muestra o esconde partes del HTML..

- **`@for`** 
  Recorre arrays.

- **`*ngIf`**  
  La directiva *ngIf verifica la condición que indicamos entre comillas, en el caso de verificarse verdadero se agrega el elemento HTML que le digamos.
  Por ejemplo esto seria para añadir un 'p'.
  ` <p *ngIf="edad>=18">Es mayor de edad.</p>`

- **`*ngFor`**  
  La directiva *ngFor nos permite generar muchos elementos HTML repetidos a partir del recorrido de un array.

---

### Enlaces de Datos (Data Binding)

- **Interpolación** (`{{exp}}`)  
  Muestra valores del componente en la vista (ej.: `<h1>{{ title }}</h1>`).

- **Event Binding** (`(evento)="metodo()"`)  
  Permite ejecutar métodos del componente desde la vista, en respuesta a eventos (ej.: `<button (click)="accion()"></button>`).

- **Enlace bidireccional `[(ngModel)]`**  
  Sincroniza el valor entre un campo del formulario y una variable del componente para formularios reactivos y template driven.  
  (Usado p.ej. para los formularios de interesados).

---

### Routing y Navegación

- **`RouterModule`**  
  Configuración de rutas y asociación de componentes a URLs.

- **`ActivatedRoute`**  
  Servicio que expone parámetros de la ruta activa; lo estamos usando para navegar a detalles. (p.ej. `/houses/2`).

---

### Servicios

- **Servicios Angular**  
  Clases con lógica reutilizable, manejo de arrays, acceso a "API" (en este reto, fuentes locales/JSON), gestión de interesados por casa, etc.

---

### Interfaces

- **Interfaces TypeScript**  
  Se usan para dar tipado fuerte a los objetos (`HousingLocation`, `User`).

---

### Métodos Ciclo de Vida

- **`ngOnInit()`**  
  Método que se ejecuta al inicializar un componente; se usa para cargar información o preparar la vista inicial.

---

### Gestión de Recursos Estáticos

- **Carpeta `/public`**  
  Desde Angular 17 sustituye a `/assets`. Se usa para iconos, imágenes locales (casas), etc.  

---

### HTTP y Almacenamiento

- **`HttpClient`**  
  Servicio para realizar peticiones HTTP. En el proyecto `casasJson` se usa para cargar datos del archivo JSON simulando un backend.

- **LocalStorage**  
  API del navegador usada para guardar y recuperar información (array de interesados por casa) y mantener el estado tras recargar la página.

---

### Otras Prácticas

- **Filtrado de arrays**  
  Uso de `Array.prototype.filter()` para búsqueda por ciudad.

---

## Cambios y Adaptaciones

- Actualización de alguan sintaxis (directivas modernas como @id, @for)
- Reestructuración de recursos estáticos a la carpeta `/public`.
- Conversión de los accesos de datos: primero desde la web, luego desde imagenes en local, y luego desde un fichero JSON.
- Uso de servicios e interfaces para separar la lógica.
- Filtrado mejorado de ciudades (case-insensitive).