import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  public isUpperCase: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleUpperCase():void{
    this.isUpperCase = !this.isUpperCase;
  }

}
