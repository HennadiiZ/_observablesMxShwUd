import { Component, OnInit } from '@angular/core';
import { UserService } from './_services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  activated: any = false;

  constructor(private userService: UserService) {}

  ngOnInit() {
    // this.userService.activatedEmmiter.subscribe(
    //   (data: boolean) => {
    //     console.log(data);
    //     this.activated = data;
    //   }
    // )

    this.userService.activatedEmmiterSubject.subscribe(
      data => {
        console.log( 'subject', data);
        this.activated = data;
      }
    )
  }
}
