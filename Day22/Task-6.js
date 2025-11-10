class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
}
discountedPrice(discount) {
    const finalPrice = this.price - (this.price * discount / 100);
    console.log(`Product: ${this.name}, Discounted Price: ₹${finalPrice}`);
  }
}
const item = new Product("cricket Bat", 2000);
item.discountedPrice(10);