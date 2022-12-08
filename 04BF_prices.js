function hasValidPrice(product) {
  //   return product && product.price && product.price >= 0;
  //la condicion product.price retorna falso cuando el valor es cero
  return !product
    ? false
    : product.price < 0
    ? false
    : typeof product.price !== "number"
    ? false
    : true;
}

console.log(hasValidPrice({ product: "Milk", price: 1.5 }));
console.log(hasValidPrice({ product: "Cheese", price: -1 }));
console.log(hasValidPrice({ product: "Eggs", price: 0 }));
console.log(hasValidPrice({ product: "Cereals", price: "3.0" }));
console.log(hasValidPrice());
