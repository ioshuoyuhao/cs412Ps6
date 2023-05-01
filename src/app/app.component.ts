import { Component } from '@angular/core';
import { mockWeatherData } from './mock-weather-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // Declare a variable to store the weather data
  weatherData = null;

  // Method to fetch the weather data from the mock data file
  fetchWeatherData() {
    // Assign the mockWeatherData array to the weatherData variable
    this.weatherData = mockWeatherData;
  }
}

