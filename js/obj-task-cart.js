const cart = {
  items: [],
  addProduct(product) {
    const { items } = this;
    const newProduct = { ...product, quantity: 1 };

    for (const item of items) {
      const { title } = item;
      const { title: titleCurrent } = product;

      if (title === titleCurrent) {
        item.quantity += 1;
        return items;
      }
    }

    items.push(newProduct);
    return items;
  },
  removeProduct(product) {
    const { items } = this;

    for (let i = 0; i < items.length; i += 1) {
      const { title } = items[i];
      const { title: titleToRemove } = product;

      if (title === titleToRemove) {
        items.splice(i, 1);
        return items;
      }
    }
  },
  getTotalPrice() {
    const { items } = this;
    let total = 0;

    for (const { price, quantity } of items) {
      total += quantity * price;
    }
    return total;
  },
  increaseQuantity(product) {
    const { items } = this;

    for (const item of items) {
      const { title } = item;
      if (title === product.title) {
        item.quantity += 1;
        return;
      }
    }
  },
  decreaseQuantity(product) {
    const { items } = this;

    for (const item of items) {
      const { title } = item;

      if (title === product.title && item.quantity > 1) {
        item.quantity -= 1;
      } else if (title === product.title && item.quantity === 1) {
        this.removeProduct(product);
      }
    }
  },
};

console.table(cart.addProduct({ title: "apple", price: 8 }));
console.table(cart.addProduct({ title: "apple", price: 8 }));
console.log(cart.getTotalPrice());

console.table(cart.addProduct({ title: "lemon", price: 5 }));
// console.log(cart.getTotalPrice());

// console.table(cart.removeProduct({ title: "apple", price: 5 }));
// console.log(cart.getTotalPrice());

console.table(cart.decreaseQuantity({ title: "apple", price: 8 }));
console.table(cart.items);

console.table(cart.decreaseQuantity({ title: "apple", price: 8 }));
console.table(cart.items);
