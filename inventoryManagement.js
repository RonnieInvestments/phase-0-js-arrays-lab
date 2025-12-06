// Creating a Simple Product Inventory Management System

// Create a products' Array

let products = ["Laptop", "Phone", "Headphones", "Monitor"]

// Function to console.log details of the first product in the array

function logFirstProduct () {
  console.log (products["0"]);

}

// Add new product to the array

function addProduct () {
  products.push ("Tablet");
  console.log (products);
  
}

// Change name of a product

function updateProductName () {
  products [1] = "Smartphone";
  console.log (products);

}

// Function to remove last product

function removeLastProduct () {
  let removedProduct = products.pop();
  console.log (products);
  
}



// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
