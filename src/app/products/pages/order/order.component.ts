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
  public order: boolean = true;

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
    this.orderBy === value
      ? this.order = !this.order
      : (this.orderBy = value, this.order = true)
  }


}
