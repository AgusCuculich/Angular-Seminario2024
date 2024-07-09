import { Component } from '@angular/core';

@Component({
  selector: 'app-distributor-access',
  templateUrl: './distributor-access.component.html',
  styleUrl: './distributor-access.component.scss'
})
export class DistributorAccessComponent {

  formSubmit(event: Event) {
    event.preventDefault();
  }
}
