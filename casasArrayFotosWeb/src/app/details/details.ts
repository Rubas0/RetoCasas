import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from '../housing';
import { Housinglocation } from '../housinglocation';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './details.html',
  styleUrls: ['./details.css']
})
export class DetailsComponent {
  housingLocation: Housinglocation | undefined;

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });

  constructor(
    private route: ActivatedRoute,
    private housingService: HousingService
  ) {
    const housingLocationId = this.route.snapshot.params['id'];
    this.housingLocation = this.housingService.getHousingLocationById(housingLocationId);
  }

  submitApplication() {
    console.log('Solicitud enviada:');
    console.log('Nombre:', this.applyForm.value.firstName);
    console.log('Apellido:', this.applyForm.value.lastName);
    console.log('Email:', this.applyForm.value.email);
  }
}