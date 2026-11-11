const mongoose = require("mongoose");
const Product = require("./models/Product");

mongoose.connect("mongodb://localhost:27017/sugarcafecharms", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const dummyProducts = [
  {
    name: "Pink Bunny Charm",
    price: 150,
    image: "/Images/Product 1.png",
    category: "Animals",
    badge: "Best Seller",
  },
  {
    name: "Pastel Green Cakebox",
    price: 980,
    image: "/Images/Product 2.png",
    category: "Food",
    badge: "New",
  },
];

async function seedData() {
  try {
    await Product.deleteMany(); 
    await Product.insertMany(dummyProducts);
    console.log("Dummy products inserted successfully!");
    mongoose.disconnect();
  } catch (error) {
    console.error("Error seeding data:", error);
  }
}

seedData();
