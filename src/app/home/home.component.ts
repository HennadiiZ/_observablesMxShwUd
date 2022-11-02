import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  subscriptions = new Subscription();

  constructor() {}

  ngOnInit() {
    this.subscriptions.add(interval(1000).subscribe(count => {
      console.log(count);
    }))
  }

  ngOnDestroy():void {
    this.subscriptions.unsubscribe()
  }

}
