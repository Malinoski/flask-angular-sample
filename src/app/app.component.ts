import { Component } from '@angular/core';
import { RestService } from './rest.service';
import { Data } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'flask-angular-sample';
  data: Data[] = [];

  constructor(private rs: RestService) { }

  ngOnInit() {
    this.rs.readData().subscribe(
      (response: any) => {
        this.data = response[0]["data"];
      },
      (error) => {
        console.log("No Data Found" + error);
      }
    )
  }
}
