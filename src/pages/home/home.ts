import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ApiConnectorProvider } from '../../providers/api-connector/api-connector';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // MOCK DATA FOR TESTING PURPOSES
  cityId    = 36;
  theaterId = 1256;
  movies;
  states;

  constructor(public navCtrl: NavController, public apiConnector: ApiConnectorProvider) {
    // this.loadStatesData();
    this.loadMovies();
  }

  loadMovies() {
    this.apiConnector
        .getMovies(this.cityId, this.theaterId)
        .subscribe(data => {
          this.movies = data[0].movies;
        });
  }

  loadStatesData() {
    this.apiConnector
        .loadStates()
        .subscribe(data => this.states = data);
  }
}