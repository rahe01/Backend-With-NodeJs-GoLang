type Product = {
    name: string;
    price: number;
    quantity: number;
    discount?: number; 
};

const calculateTotalPrice = (products: Product[]): number => {
    if (products.length === 0) return 0;

    return products
        .map(product => {
            
            let total = product.price * product.quantity;

            
            if (product.discount !== undefined) {
                total = total - (total * (product.discount / 100));
            }

            return total;
        })
        .reduce((sum, value) => sum + value, 0); 
};

// Sample Input
const products: Product[] = [
  { name: 'Pen', price: 10, quantity: 2 },
  { name: 'Notebook', price: 25, quantity: 3, discount: 10 },
  { name: 'Bag', price: 50, quantity: 1, discount: 20 },
];

console.log(calculateTotalPrice(products));
