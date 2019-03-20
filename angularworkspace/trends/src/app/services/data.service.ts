import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private userName = new BehaviorSubject<string>('hello This is sample Data');
  currentUser = this.userName.asObservable();
  constructor() { } 
  changeMessage(Quey):void{
    this.userName.next(Quey);
  }
}