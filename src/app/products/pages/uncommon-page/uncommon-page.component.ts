import { Component, OnInit } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css']
})
export class UncommonPageComponent implements OnInit {

  // i18n Select
  public name:string = 'Rene';
  public gender: 'male'|'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla'
  }

  constructor() { }

  ngOnInit(): void {
  }

  changeClient():void{
    this.name = 'Melisa',
    this.gender = 'female'
  }

  // i18nPlural
  public clients: string[] = ['Maria', 'Ramon', 'Fernando', 'Eduardo', 'Melissa', 'Neftali', 'Juana']
  public clientsMap = {
    '=0': 'no tenemos ningun cliente esperando',
    '=1': 'tenemos un cliente esperando', 
    '=2': 'tenemos dos clientes esperando',
    'other': 'tenemos # clientes esperando'
  }

  deleteClient():void{
    this.clients.shift()
  }

  // KeyValue Pipe
  public person ={
    name: 'Pepe',
    age: 30,
    address: 'California'
  }

  // Async Pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap( value => console.log('tap', value))
  );

  public promiseValue: Promise<string> = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa')
      console.log(resolve)
    }, 3500);
  })
}
