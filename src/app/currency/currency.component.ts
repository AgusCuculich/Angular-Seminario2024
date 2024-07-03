import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-currency',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './currency.component.html',
  styleUrl: './currency.component.scss'
})
export class CurrencyComponent implements OnInit {

  constructor() { }

  @Input() 
  precioDolares!: number;
  @Input()
  precioPesos!: number;
  @Input()
  pais!: string;

  ngOnInit(): void { }
}
