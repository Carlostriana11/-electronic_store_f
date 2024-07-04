// product.model.ts

export class Product {
    id: number;
    name: string;
    description: string;
    price: number;
    imageUrl?: string;
    quantity: number; // Agrega la propiedad 'quantity' al modelo
  
    constructor(id: number, name: string, description: string, price: number, imageUrl?: string) {
      this.id = id;
      this.name = name;
      this.description = description;
      this.price = price;
      this.imageUrl = imageUrl;
      this.quantity = 1; // Valor inicial de cantidad (puedes ajustarlo según necesites)
    }
  }
  