import { Component, OnDestroy, OnInit } from '@angular/core';
import { interval, Observable, Subscriber, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { filter } from 'rxjs/operators';

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

    // const customIntervalObservable = Observable.create(
    //   (observer) => {
    //     let count = 0;
    //     setInterval(() => {
    //       observer.next(count);
    //       count++;

    //       if (count === 2) {
    //         observer.complete();
    //       }


    //       if (count > 3) {
    //         observer.error(new Error('it is greater than 3!'));
    //       }

    //     },1000);
    //   }
    // );

    const customIntervalObservable = Observable.create(
      (observer) => {
        let count = 0;
        setInterval(() => {
          observer.next(count);
          count++;

          if (count === 2) {
            observer.complete();
          }


          if (count > 3) {
            observer.error(new Error('it is greater than 3!'));
          }

        },1000);
      }
    );

    // customIntervalObservable.pipe(
    //   map((observer: number) => 'Round: ' + (observer + 1))
    // );

    // this.subscriptions.add(customIntervalObservable.subscribe(
    //   (observer) => {
    //     // console.log('Round: ' + (observer + 1));
    //     console.log(observer);
    //   },
    //   error => {
    //     console.log(error);
    //     alert(error.message);
    //   },
    //   () => {
    //     console.log('Completed!!!')
    //   }
    // ));

    this.subscriptions.add(
      customIntervalObservable.pipe(
        map((observer: number) => 'Round: ' + (observer + 1)),
        filter((data: any)=> {
          return data
        })
      ).subscribe(
      (observer) => {
        // console.log('Round: ' + (observer + 1));
        console.log(observer);
      },
      error => {
        console.log(error);
        alert(error.message);
      },
      () => {
        console.log('Completed!!!')
      }
    ));
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe()
  }

}

