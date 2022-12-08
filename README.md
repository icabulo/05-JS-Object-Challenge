## Contenido

- [Ejercicios Principales](#ejercicios-principales)
  - [Combinar dos objetos con claves iguales](#combinar-dos-objetos-con-claves-iguales)
  - [Eliminar una propiedad de un objeto](#eliminar-una-propiedad-de-un-objeto)
  - [Sumar valores de objeto](#sumar-valores-de-objeto)
- [Bug Fixes](#bug-fixes)
  - [Fix error: Devolución de precios válidos](#fix-error-devolución-de-precios-válidos)

# Ejercicios Principales

## Combinar dos objetos con claves iguales

Escribir una función que tome dos objetos como argumentos. Devuelve un objeto con las propiedades de ambos objetos. Si ambos objetos tienen propiedades con la misma clave, la propiedad del objeto devuelto debe tener el valor de la propiedad del primer objeto.

```js
function myFunction(objX, objY) {
  return;
}
```

| Test Case                               | Expected              |
| --------------------------------------- | --------------------- |
| myFunction({a:1,b:2,c:3},{d:4,b:5,e:6}) | {a:1,b:2,c:3,d:4,e:6} |
| myFunction({a:1,b:2,c:3},{a:4,d:5,e:6}) | {a:1,b:2,c:3,d:5,e:6} |
| myFunction({a:1,b:2,c:3},{d:4,b:5,c:6}) | {a:1,b:2,c:3,d:4}     |

## Eliminar una propiedad de un objeto

Escribir una función que tome un objeto y un string como argumentos. Eliminar la propiedad del objeto con clave igual al string.

```js
function myFunction(obj, key) {
  return;
}
```

| Test Case                     | Expected  |
| ----------------------------- | --------- |
| myFunction({a:1,b:2,c:3},'b') | {a:1,c:3} |
| myFunction({a:1,b:2,c:3},'a') | {b:2,c:3} |
| myFunction({a:1,b:2,c:3},'c') | {a:1,b:2} |

## Sumar valores de objeto

Escribir una función que tome un objeto como argumento. Devuelve la suma de todos los valores de las propiedades del objeto.

```js
function myFunction(obj) {
  return;
}
```

| Test Case                     | Expected |
| ----------------------------- | -------- |
| myFunction({a:1,b:2,c:3})     | 6        |
| myFunction({j:9,i:2,x:3,z:4}) | 18       |
| myFunction({w:15,x:22,y:13})  | 50       |

# Bug Fixes

## Fix error: Devolución de precios válidos

Ha habido un problema de datos maestros que afectó los precios de los productos. Compruebe si cada producto tiene un precio válido (entero o flotante, y mayor o igual a cero). Los productos con un precio de 0 son gratuitos y cuentan como un precio válido.

```js
function hasValidPrice(product) {
  return product && product.price && product.price >= 0;
}
```

El valor de retorno debe ser un booleano.

| Test Case                                             | Expected |
| ----------------------------------------------------- | -------- |
| hasValidPrice({ "product": "Milk", price: 1.50 })     | `true`   |
| hasValidPrice({ "product": "Cheese", price: -1 })     | `false`  |
| hasValidPrice({ "product": "Eggs", price: 0 })        | `true`   |
| hasValidPrice({ "product": "Cereals", price: "3.0" }) | `false`  |
| hasValidPrice()                                       | `false`  |

Ejecute los `test case` primero para ver los resultados antes de realizar cambios y comprenda por qué los huevos devuelven 0 y la harina devuelve `undefined`.
