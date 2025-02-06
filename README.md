# Real Estate

Esta aplicación expone endpoints para CRUD de inmuebles, y consultas de ciudades y países. Está construído con node, express y prisma.

## Instalación

Instalar node versión 18 o superior y git

* Clona el repositorio
```bash
    git clone https://github.com/blascorrea/real_estate_back.git
```
* Ir a la carpeta clonada en el PC e instala las dependencias
```bash
    cd /path/to/project
    npm install
```
* Configura el motor de base de datos (para una configuración sencilla utiliza SQLite), crea un archivo .env en la raíz del proyecto y agrega la url de la base de datos
```bash
    DATABASE_URL="file:./database.sqlite"
```

* Crea la migración de la base de datos con el siguiente comando
```bash
    npx prisma migrate dev --name init
```

* Genera la base de datos
```bash
    npx prisma generate
```

* Opcionalmente se pueden cargar algunos datos de prueba
```bash
    node prisma/seed.js
```

* Finalmente ejecuta la aplicación con el comando
```bash
    npm start
```

Esto levantará un servicio en un puerto 3000 en caso de que no esté siendo ocupado por otra aplicación, se puede configurar también en el archivo .env con la variable PORT
