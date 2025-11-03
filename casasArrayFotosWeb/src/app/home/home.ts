import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HousingLocationComponent } from '../housing-location/housing-location';
import { Housinglocation } from '../housinglocation';
import { HousingService } from '../housing';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HousingLocationComponent],
  templateUrl: './home.html',
  styleUrls: ['./home.css']
})
export class HomeComponent {
  housingLocationList: Housinglocation[] = [];
  filteredLocationList: Housinglocation[] = [];

  constructor(private housingService: HousingService) {
    this.housingLocationList = this.housingService.getAllHousingLocations();
    this.filteredLocationList = this.housingLocationList;
  }

  filterResults(text: string) {
    console.log('Buscando:', text);
    console.log('Lista completa:', this.housingLocationList);

    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      console.log('Sin texto, mostrando todas');
      return;
    }

    this.filteredLocationList = this.housingLocationList.filter(
      casa => casa.city.toLowerCase().includes(text.toLowerCase())
    );

    console.log('Resultados filtrados:', this.filteredLocationList);
  }
}