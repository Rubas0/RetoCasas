import { Component, OnInit } from '@angular/core';
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
export class DetailsComponent implements OnInit {
  housingLocation: Housinglocation | undefined;

  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl('')
  });

  constructor(
    private route: ActivatedRoute,
    private housingService: HousingService
  ) {}

  ngOnInit() {
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingService.getHousingLocationById(housingLocationId).subscribe((housingLocation) => {
      this.housingLocation = housingLocation;
    });
  }

  submitApplication() {
    console.log('Solicitud enviada:');
    console.log('Nombre:', this.applyForm.value.firstName);
    console.log('Apellido:', this.applyForm.value.lastName);
    console.log('Email:', this.applyForm.value.email);
  }
}