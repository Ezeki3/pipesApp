import { Component, OnInit } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';
import { SortEvent } from 'primeng/api';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  public isUpperCase: boolean = false;
  // public orderBy: keyof Hero | undefined | '' = '';
  public orderBy?: keyof Hero;

  public heroes: Hero[] = [
    {
      name: 'Superman',
      canFly: true,
      color: Color.blue
    },
    {
      name: 'Batman',
      canFly: false,
      color: Color.black
    },
    {
      name: 'Daredevil',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Robin',
      canFly: false,
      color: Color.red
    },
    {
      name: 'Linterna Verde',
      canFly: true,
      color: Color.green
    },
  ]

  constructor() { }

  ngOnInit(): void {
   
  }

  toggleUpperCase():void{
    this.isUpperCase = !this.isUpperCase;
  }

  changeOrder( value:keyof Hero ){
    this.orderBy = value;
  }

  customSort(event: Hero) {
    console.log(event)
    this.heroes.sort((a:any, b:any) => {
      let value1 = a[event.name];
      let value2 = b[event.name];
      let result = null;

      if (value1 == null && value2 != null) result = -1;
      else if (value1 != null && value2 == null) result = 1;
      else if (value1 == null && value2 == null) result = 0;
      else if (typeof value1 === 'string' && typeof value2 === 'string') result = value1.localeCompare(value2);
      else result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;

      return event.color * result;
    });
  }

}
