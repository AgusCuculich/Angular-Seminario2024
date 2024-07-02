import { Component } from '@angular/core';
import { Product } from './Product';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-product-showcase',
  standalone: true,
  imports: [TitleCasePipe],
  templateUrl: './product-showcase.component.html',
  styleUrl: './product-showcase.component.scss'
})
export class ProductShowcaseComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'standard cut',
      img: '../assets/img/standard.png'
    },
    {
      id: 2,
      name: 'Crinckle',
      img: 'assets/img/crinckle.png'
    },
    {
      id: 3,
      name: 'Smiley',
      img: 'assets/img/smiley.png'
    },
    {
      id: 4,
      name: 'Steak',
      img: 'assets/img/steakCut.png'
    },
    {
      id: 5,
      name: 'Rustic',
      img: 'assets/img/rustic.png'
    },
    {
      id: 6,
      name: 'Noisette',
      img: 'assets/img/noisette.png'
    },
    {
      id: 7,
      name: 'Sweet Fries',
      img: 'assets/img/sweet_fries.png'
    },
    {
      id: 8,
      name: 'Chips',
      img: 'assets/img/chips.png'
    }
  ];

  constructor() { }

  ngOnInit() { }
}
