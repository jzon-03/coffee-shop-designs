import { Component, OnInit } from '@angular/core';

interface CoffeeProduct {
  id: number;
  name: string;
  description: string;
  price: number;
  category: 'signature' | 'classic' | 'seasonal' | 'cold';
  image?: string;
  featured?: boolean;
  bestseller?: boolean;
}

interface Testimonial {
  id: number;
  name: string;
  role: string;
  comment: string;
  rating: number;
}

@Component({
  selector: 'app-coffee-2-home',
  templateUrl: './coffee-2-home.component.html',
  styleUrl: './coffee-2-home.component.scss'
})
export class Coffee2HomeComponent implements OnInit {
  isMenuOpen = false;
  activeCategory = 'all';
  currentTestimonial = 0;

  coffeeProducts: CoffeeProduct[] = [
    {
      id: 1,
      name: 'Dark Roast Espresso',
      description: 'Bold and intense with chocolate notes',
      price: 3.99,
      category: 'signature',
      featured: true
    },
    {
      id: 2,
      name: 'Vanilla Latte',
      description: 'Smooth espresso with vanilla syrup and steamed milk',
      price: 4.79,
      category: 'classic',
      bestseller: true
    },
    {
      id: 3,
      name: 'Pumpkin Spice',
      description: 'Seasonal favorite with warm spices',
      price: 5.29,
      category: 'seasonal'
    },
    {
      id: 4,
      name: 'Iced Caramel Macchiato',
      description: 'Refreshing iced coffee with caramel drizzle',
      price: 5.49,
      category: 'cold',
      featured: true
    },
    {
      id: 5,
      name: 'Mocha Frappuccino',
      description: 'Blended coffee with chocolate and whipped cream',
      price: 5.99,
      category: 'cold'
    },
    {
      id: 6,
      name: 'Ethiopian Single Origin',
      description: 'Premium single origin with floral notes',
      price: 6.49,
      category: 'signature',
      bestseller: true
    }
  ];

  testimonials: Testimonial[] = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'Regular Customer',
      comment: 'The best coffee in town! The atmosphere is perfect for work and the baristas are incredibly skilled.',
      rating: 5
    },
    {
      id: 2,
      name: 'Mike Chen',
      role: 'Coffee Enthusiast',
      comment: 'I love trying their seasonal specials. Each cup is crafted with such attention to detail.',
      rating: 5
    },
    {
      id: 3,
      name: 'Emma Davis',
      role: 'Local Artist',
      comment: 'This place has become my creative sanctuary. Great coffee and even better vibes.',
      rating: 5
    }
  ];

  ngOnInit() {
    this.startTestimonialRotation();
  }

  get filteredProducts() {
    if (this.activeCategory === 'all') {
      return this.coffeeProducts;
    }
    return this.coffeeProducts.filter(product => product.category === this.activeCategory);
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  setActiveCategory(category: string) {
    this.activeCategory = category;
  }

  addToCart(product: CoffeeProduct) {
    console.log('Added to cart:', product.name);
    // Add cart logic here
  }

  startTestimonialRotation() {
    setInterval(() => {
      this.currentTestimonial = (this.currentTestimonial + 1) % this.testimonials.length;
    }, 5000);
  }

  goToTestimonial(index: number) {
    this.currentTestimonial = index;
  }

  getStarArray(rating: number): number[] {
    return Array(5).fill(0).map((_, i) => i < rating ? 1 : 0);
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 70; // Account for fixed header height
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
      
      // Close mobile menu after navigation
      if (this.isMenuOpen) {
        this.isMenuOpen = false;
      }
    }
  }
}
