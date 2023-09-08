interface Product2 {
  price: number;
  name: string;
  quantity: number
}
const printProductSummary = (product: Product2): void => {
  console.log(`${product.name}`)
}
