# Guía para Crear el Proyecto casasArrayFotosLocal en Angular

## Objetivo

Desarrollar una aplicación Angular que muestre un listado de casas usando datos locales y fotografías almacenadas localmente.

## Requisitos

- Node.js y npm instalados
- Angular CLI instalado (`npm install -g @angular/cli`)
- Cuenta en GitHub (opcional, para subir el proyecto a un repositorio)

## Pasos

### 1. Crear el proyecto Angular

```bash
npx ng new casasArrayFotosLocal
```
- Elige CSS como formato de estilos.
- Elige no usar routing (se puede configurar manualmente después si lo necesitas).

### 2. Añadir la estructura de carpetas y archivos

```bash
cd casasArrayFotosLocal
```

Genera la interfaz y el servicio:

```bash
npx ng generate interface housinglocation
npx ng generate service housing
```

Genera los componentes standalone:

```bash
npx ng g c home --standalone
npx ng g c details --standalone
npx ng g c housing-location --standalone
```

Confirma que la estructura creada sea similar a:

```
casasArrayFotosLocal/
  src/
    app/
      home/
        home.component.ts
        home.component.html
        home.component.css
      details/
        details.component.ts
        details.component.html
        details.component.css
      housing-location/
        housing-location.component.ts
        housing-location.component.html
        housing-location.component.css
      housing.service.ts
      housinglocation.ts
      app.routes.ts
```

### 3. Añadir imágenes locales

- Descarga 10 fotos de casas y nómbralas casa0.jpg, casa1.jpg, ..., casa9.jpg.
- Coloca las imágenes en la carpeta `public` en la raíz del proyecto.

### 4. Configurar el servicio con rutas locales

Edita `housing.service.ts` para que la propiedad `photo` de cada casa apunte a la imagen local, por ejemplo:

```typescript
photo: '/casa0.jpg'
```

Asegúrate de actualizar toda la lista.

### 5. Subir a GitHub (opcional)

Inicializa el repositorio git en la carpeta raíz del proyecto:

```bash
git init
git add .
git commit -m "Initial commit"
git branch -M main
git remote add origin <URL-de-tu-repositorio>
git push -u origin main
```

Asegúrate de tener un `.gitignore` que incluya `/node_modules`, `/dist` y otros archivos generados.

### 6. Probar la aplicación

Inicia el servidor de desarrollo de Angular:

```bash
npx ng serve
```

Abre http://localhost:4200 en tu navegador para ver la aplicación funcionando.

## Notas

- Puedes modificar los componentes y estilos según tus necesidades.
- Asegúrate de actualizar el archivo de rutas si cambias el flujo de navegación.
- Las rutas locales de las imágenes suponen que están en la carpeta `public` (Angular las mostrará automáticamente).
