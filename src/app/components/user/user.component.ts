import {Component, OnInit} from '@angular/core';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  posts: any[];
  isEdit: boolean = false;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.fetchMovie();
  }

  fetchMovie() {
    this.dataService.getMovies().subscribe((posts) => {
      this.posts = posts;
      console.log(posts);
    });
  }

  addMovie(title, desc) {
    console.log('post data ......');
    let movie = {title: title, description: desc};
    this.dataService.createPost(movie).subscribe((post) => {
      console.log(post);
      this.posts.push(post);
    })
  }

  eraseMovie(movie) {
    console.log('movie deleted ...');
    let index = this.posts.indexOf(movie);
    this.posts.splice(index, 1);
    this.dataService.deleteMovie(movie.id).subscribe();
  }

  updateMovie(movie) {
    console.log('movie updated ...');
    movie.isEdit = !movie.isEdit;
    this.dataService.updateMovie(movie).subscribe(movie => {
      console.log(movie);
    });
  }
}
