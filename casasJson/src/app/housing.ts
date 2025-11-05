import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Housinglocation } from './housinglocation';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  url = 'http://localhost:3000/locations';

  constructor(private http: HttpClient) {}

  // Devuelve todas las casas como Observable
  getAllHousingLocations(): Observable<Housinglocation[]> {
    return this.http.get<Housinglocation[]>(this.url);
  }

  // Devuelve una casa por su ID como Observable
  getHousingLocationById(id: number): Observable<Housinglocation> {
    // Según cómo tengas configurado json-server el endpoint sería .../locations/{id}
    return this.http.get<Housinglocation>(`${this.url}/${id}`);
  }

  submitApplication(firstName: string, lastName: string, email: string) {
    // Aquí puedes hacer POST a una API si lo necesitas
    console.log(firstName, lastName, email);
  }
}