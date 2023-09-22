# Burguercoffe-Campuslands 🍔

Sistema de inventario eficiente y automatizado para una cafetería de hamburguesas, satisfaciendo la demanda de los clientes de manera constante y oportuna, manteniendo un seguimiento preciso de los ingredientes y su fecha de vencimiento y minimizando el desperdicio de ingredientes y costos innecesarios, usando las tecnologías de Node.js, Express y MongoDB.

## Indice 📄

1. [¿Como usar el sistema?](#como-usar-el-sistema)
2. [Endpoints](#endpoints)
- [Categorias](#categorias)
- [Chefs](#chefs)
- [Hamburguesas](#hamburguesas)
- [Ingredientes](#ingredientes)


## ¿Cómo usar el sistema? 💻

Para poder usar este sistema en tu computador, tendrás que instalarlo y utilizarlo localmente, y necesitarás tener instalados los siguientes requisitos:


<div align="center"> Node.js 🚀 </div>
<br>


Para poder instalarlo, sigue los siguientes pasos:

1. Clona el repositorio: `https://github.com/Zachlesk/Burguercoffe-Campuslands-MEN.git`
`

2. Desde la terminal e instala las dependencias con el siguiente comando:

    ```bash
    npm update
    ```

3. Una vez instaladas las dependencias vamos a abrir una nueva terminal y ejecutamos el software:

    ```bash
    npm run zach
    ```

4. En la consola, visualizarás el siguiente mensaje: 
    ```bash
    Server is running on port ${PORT}
    ```
<br>
-> ¡Listo! Tu servidor está en funcionamiento.

<hr>

## Categorias

1. `http://localhost:8020/categorias/informacion` ✏️: Encontrar el nombre y la descripción de todas las categorías

2. `http://localhost:8020/categorias/gourmet` 🍸 : Encontrar todas las categorías que contienen la palabra “gourmet” en su descripción

## Chefs

1. `http://localhost:8020/chefs/especialidad` 🥩: Encontrar todos los chefs que se especializan en “carnes”.

2. `http://localhost:8020/chefs/internacional` 🌎: Cambiar la especialidad del “chef C” a “Cocina Internacional”

3. `http://localhost:8020/chefs/all` 🧑‍🍳: Contar cuántos chefs hay en la base de datos

4. `http://localhost:8020/chefs/asiatico` 🈶: Agregar un nuevo chef a la colección con una especialidad en “Cocina Asiática”

5. `http://localhost:8020/chefs/less` 🚷 : Listar todos los chefs excepto “ChefA”

6. `http://localhost:8020/chefs/vegetariano` 🫑 : Eliminar todos los chefs que tienen una especialidad en “cocina vegetariana”


## Hamburguesas

1. `http://localhost:8020/hamburguesas/vegetariana` 🥦: Encontrar todas las hamburguesas de la categoría “vegetariana”.

2. `http://localhost:8020/hamburguesas/chefB` 🥄: Encontrar todas las hamburguesas preparadas por “chef B”.

3. `http://localhost:8020/hamburguesas/ingrediente` 🥬: Agregar un nuevo ingrediente a la hamburguesa “clásica”.

4. `http://localhost:8020/hamburguesas/integral` 🍞: Encontrar todas las hamburguesas que contienen “pan integral” como ingrediente.

5. `http://localhost:8020/hamburguesas/cheddar` 🧀: Encontrar las hamburguesas que no contienen “Queso cheddar” como ingrediente.

6. `http://localhost:8020/hamburguesas/precio` 💸: Listar las hamburguesas cuyo precio es menor o igual a $9

7. `http://localhost:8020/hamburguesas/cinco` 🥑: Eliminar las hamburguesas que contienen menos de 5 ingredientes

8. `http://localhost:8020/hamburguesas/ascendente` ⬆️: Listar las hamburguesas en orden ascendente según su precio

9. `http://localhost:8020/hamburguesas/tomates` 🍅 : Encontrar todas las hamburguesas que contienen “tomate” o “lechuga” como ingredientes

10. `http://localhost:8020/hamburguesas/gourmet` 🥂: Incrementar en $2 el precio de todas las hamburguesas de la categoría “Gourmet”

11. `http://localhost:8020/hamburguesas/caro` 🥇 :Encontrar la hamburguesa más cara

12. `http://localhost:8020/hamburguesas/pepinillos` 🥒 : Agregar “pepinillos” a todas las hamburguesas de la categoría “clásica”

13. `http://localhost:8020/hamburguesas/siete` 🥕 : Encontrar todas las hamburguesas que contienen exactamente 7 ingredientes

14. `http://localhost:8020/hamburguesas/gourmetCaro` 🦞 : Encontrar la hamburguesa más cara que fue preparada por un chef especializado en “Gourmet”

15. `http://localhost:8020/hamburguesas/ingredientesHamburguesas` 🌮 : Listar todos los ingredientes junto con el número de hamburguesas que los contienen

16. `http://localhost:8020/hamburguesas/chefsHamburguesa` 🥙 : Listar los chefs junto con el número de hamburguesas que han preparado

17. `http://localhost:8020/hamburguesas/categoriaHamburguesaMayor` 🍔 : Encuentra la categoría con la mayor cantidad de hamburguesas.

18. `http://localhost:8020/hamburguesas/costoTotalChefs` 🍳 : Listar todos los chefs y el costo total de ingredientes de todas las hamburguesas que han preparado.

19. `http://localhost:8020/hamburguesas/ingredientesNaN` 🥓 : Encontrar todos los ingredientes que no están en ninguna hamburguesa.

20. `http://localhost:8020/hamburguesas/descripcionHamburguesa` 📖 : Listar todas las hamburguesas con su descripción de categoría

21. `http://localhost:8020/hamburguesas/chefHamburguesaIngredientes` 👩‍🍳 : Encuentra el chef que ha preparado hamburguesas con el mayor número de ingredientes en total.

21. `http://localhost:8020/hamburguesas/precioPromedioHamburguesa` 📶 : Encontrar el precio promedio de las hamburguesas en cada categoría.

22. `http://localhost:8020/hamburguesas/chefsHamburguesaCara` ✴️ : Listar los chefs y la hamburguesa más cara que han preparado.


## Ingredientes

1. `http://localhost:8020/ingredientes/stock` ⬇️: Encontrar todos los ingredientes con stock menor a 400.

2. `http://localhost:8020/ingredientes/aumentar` ✖️: Aumentar en 1.5 el precio de todos los ingredientes.

3. `http://localhost:8020/ingredientes/nostock` 🚫: Eliminar todos los ingredientes que tengan un stock de 0. 

4. `http://localhost:8020/ingredientes/caro` 📈: Encontrar el ingrediente más caro

5. `http://localhost:8020/ingredientes/bread` 🥐: Incrementar el stock de “pan” en 100 unidades

6. `http://localhost:8020/ingredientes/clasico` 🥪: Encontrar todos los ingredientes que tienen una descripción que contiene la palabra “clásico”

7. `http://localhost:8020/ingredientes/precio` 💲: Encontrar todos los ingredientes cuyo precio sea entre $2 y $5

8. `http://localhost:8020/ingredientes/pan` 🥖: Actualizar la descripción del “Pan” a “Pan fresco y crujiente”

9. `http://localhost:8020/ingredientes/alfabetico` 🔠 : Listar todos los ingredientes en orden alfabético