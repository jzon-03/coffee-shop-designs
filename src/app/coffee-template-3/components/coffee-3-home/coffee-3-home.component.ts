import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-coffee-3-home',
  templateUrl: './coffee-3-home.component.html',
  styleUrl: './coffee-3-home.component.scss'
})
export class Coffee3HomeComponent implements OnInit, OnDestroy {
  currentSlide = 0;
  private slideInterval: any;
  
  heroSlides = [
    {
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80',
      title: 'Premium Coffee Experience',
      subtitle: 'Handcrafted perfection in every cup'
    },
    {
      image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80',
      title: 'Artisan Roasting',
      subtitle: 'From bean to brew, crafted with passion'
    },
    {
      image: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080&q=80',
      title: 'Cozy Atmosphere',
      subtitle: 'Your perfect coffee sanctuary'
    }
  ];

  featuredProducts = [
    {
      id: 1,
      name: 'Ethiopian Blend',
      price: 24.99,
      image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80',
      description: 'Rich and fruity with notes of berry and chocolate',
      rating: 4.8
    },
    {
      id: 2,
      name: 'Colombian Supreme',
      price: 22.99,
      image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80',
      description: 'Smooth and balanced with a hint of caramel',
      rating: 4.7
    },
    {
      id: 3,
      name: 'Dark Roast Espresso',
      price: 26.99,
      image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300&q=80',
      description: 'Bold and intense with a rich crema',
      rating: 4.9
    }
  ];

  testimonials = [
    {
      name: 'Sarah Johnson',
      text: 'The best coffee I\'ve ever tasted! The atmosphere is perfect for work or relaxation.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b47c?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80'
    },
    {
      name: 'Michael Chen',
      text: 'Outstanding quality and service. Their Ethiopian blend is absolutely incredible.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80'
    },
    {
      name: 'Emily Davis',
      text: 'A coffee lover\'s paradise. Great selection and knowledgeable staff.',
      rating: 5,
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80'
    }
  ];

  ngOnInit() {
    this.startAutoPlay();
  }

  ngOnDestroy() {
    this.stopAutoPlay();
  }

  startAutoPlay() {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 5000); // Change slide every 5 seconds
  }

  stopAutoPlay() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  nextSlide() {
    this.currentSlide = (this.currentSlide + 1) % this.heroSlides.length;
    this.resetAutoPlay();
  }

  prevSlide() {
    this.currentSlide = this.currentSlide === 0 ? this.heroSlides.length - 1 : this.currentSlide - 1;
    this.resetAutoPlay();
  }

  goToSlide(index: number) {
    this.currentSlide = index;
    this.resetAutoPlay();
  }

  resetAutoPlay() {
    this.stopAutoPlay();
    this.startAutoPlay();
  }

  generateStars(rating: number): number[] {
    return Array(Math.floor(rating)).fill(0);
  }

  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
