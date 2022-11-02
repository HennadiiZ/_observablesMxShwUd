import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  subscriptions = new Subscription();

  constructor() {}

  ngOnInit() {
    // this.subscriptions.add(interval(1000).subscribe(count => {
    //   console.log(count);
    // }))

    const customIntervalObservable = Observable.create(
      (observer) => {
        let count = 0;
        setInterval(() => {
          observer.next(count);
          count++;
          // observer.error()
          // observer.complete()
        },1000);
      }
    );

    this.subscriptions.add(customIntervalObservable.subscribe(
      (observer) => {
        console.log(observer);
      }
    ))
  }

  ngOnDestroy():void {
    this.subscriptions.unsubscribe()
  }

}
