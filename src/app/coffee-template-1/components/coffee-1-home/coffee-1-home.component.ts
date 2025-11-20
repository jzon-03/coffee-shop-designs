import { Component } from '@angular/core';

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  category: 'coffee' | 'tea' | 'pastry' | 'cold';
  image?: string;
  popular?: boolean;
}

@Component({
  selector: 'app-coffee-1-home',
  templateUrl: './coffee-1-home.component.html',
  styleUrl: './coffee-1-home.component.scss'
})
export class Coffee1HomeComponent {
  currentSlide = 0;
  
  featuredDrinks = [
    {
      name: 'Signature Espresso',
      description: 'Rich and bold espresso blend',
      image: 'assets/coffee-1.jpg',
      price: 4.50
    },
    {
      name: 'Caramel Macchiato',
      description: 'Sweet caramel with smooth espresso',
      image: 'assets/coffee-2.jpg',
      price: 5.25
    },
    {
      name: 'Cold Brew Special',
      description: 'Smooth and refreshing cold brew',
      image: 'assets/coffee-3.jpg',
      price: 4.75
    }
  ];

  menuItems: MenuItem[] = [
    {
      id: 1,
      name: 'Americano',
      description: 'Bold espresso with hot water',
      price: 3.50,
      category: 'coffee',
      popular: true
    },
    {
      id: 2,
      name: 'Cappuccino',
      description: 'Espresso with steamed milk foam',
      price: 4.25,
      category: 'coffee',
      popular: true
    },
    {
      id: 3,
      name: 'Latte',
      description: 'Smooth espresso with steamed milk',
      price: 4.75,
      category: 'coffee'
    },
    {
      id: 4,
      name: 'Green Tea',
      description: 'Premium organic green tea',
      price: 3.00,
      category: 'tea'
    },
    {
      id: 5,
      name: 'Croissant',
      description: 'Freshly baked buttery croissant',
      price: 3.25,
      category: 'pastry'
    },
    {
      id: 6,
      name: 'Iced Coffee',
      description: 'Refreshing cold coffee blend',
      price: 3.75,
      category: 'cold',
      popular: true
    }
  ];

  selectedCategory: string = 'all';

  get filteredMenuItems() {
    if (this.selectedCategory === 'all') {
      return this.menuItems;
    }
    return this.menuItems.filter(item => item.category === this.selectedCategory);
  }

  filterMenu(category: string) {
    this.selectedCategory = category;
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.featuredDrinks.length;
  }

  previousSlide() {
    this.currentSlide = this.currentSlide === 0 ? this.featuredDrinks.length - 1 : this.currentSlide - 1;
  }

  goToSlide(index: number) {
    if (index >= 0 && index < this.featuredDrinks.length) {
      this.currentSlide = index;
    }
  }

  orderItem(item: MenuItem) {
    // Handle order logic here
    console.log('Ordering:', item.name);
    alert(`Added ${item.name} to cart!`);
  }
}
