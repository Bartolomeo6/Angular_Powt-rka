import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projec';

  showComm: boolean = true;
  password: string = "12345";
  tablica: string[] = ["jeden","dwa","trzy"];
  users: Array<string> = ['Mike','Daniel','John','Miguel','Paul'];
}
