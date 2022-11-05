import { EventEmitter, Injectable, Output } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  @Output() activatedEmmiter = new EventEmitter<boolean>();
  activatedEmmiterSubject = new Subject<boolean>();

  constructor() {}
}
