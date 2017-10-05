import {Injectable} from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';
import 'rxjs/add/operator/map';
import {api} from "../../assets/api";

@Injectable()
export class DataService {

  constructor(private http: Http) {
    console.log('Data service connected ...');
  }

  getMovies() {
    return this.http.get(api.movie)
      .map(response => response.json());
  }

  createPost(movie) {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.post(api.movie, movie, options)
      .map(response => response.json());
  }

  deleteMovie(id) {
    return this.http.delete(api.movie + "/" + id)
      .map(response => response.json());
  }

  updateMovie(movie) {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    return this.http.put(api.movie + "/" + movie.id, JSON.stringify(movie), options)
      .map(response => response.json());
  }
}
