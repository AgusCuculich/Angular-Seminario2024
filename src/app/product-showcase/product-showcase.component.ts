import { Component } from '@angular/core';
import { Product } from './Product';
import { TitleCasePipe } from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-showcase',
  standalone: true,
  imports: [TitleCasePipe, CommonModule],
  templateUrl: './product-showcase.component.html',
  styleUrl: './product-showcase.component.scss'
})
export class ProductShowcaseComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'standard cut',
      img: '../assets/img/standard.png',
      price: 10,
    },
    {
      id: 2,
      name: 'Crinckle',
      img: 'assets/img/crinckle.png',
      price: 20,
    },
    {
      id: 3,
      name: 'Smiley',
      img: 'assets/img/smiley.png',
      price: 30,
    },
    {
      id: 4,
      name: 'Steak',
      img: 'assets/img/steakCut.png',
      price: 40,
    },
    {
      id: 5,
      name: 'Rustic',
      img: 'assets/img/rustic.png',
      price: 50,
    },
    {
      id: 6,
      name: 'Noisette',
      img: 'assets/img/noisette.png',
      price: 60,
    },
    {
      id: 7,
      name: 'Sweet Fries',
      img: 'assets/img/sweet_fries.png',
      price: 70,
    },
    {
      id: 8,
      name: 'Chips',
      img: 'assets/img/chips.png',
      price: 80,
    }
  ];

  constructor() { }

  ngOnInit() { }
}
