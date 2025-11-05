import { Component, OnInit } from '@angular/core';
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
export class HomeComponent implements OnInit {
  housingLocationList: Housinglocation[] = [];
  filteredLocationList: Housinglocation[] = [];

  // Inyecta el servicio aquí
  constructor(private housingService: HousingService) {}

  ngOnInit() {
    this.housingService
      .getAllHousingLocations()
      .subscribe((housingLocationList) => {
        this.housingLocationList = housingLocationList;
        this.filteredLocationList = housingLocationList;
      });
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocationList = this.housingLocationList;
      return;
    }

    this.filteredLocationList = this.housingLocationList.filter(
      casa => casa.city.toLowerCase().includes(text.toLowerCase())
    );
  }
}