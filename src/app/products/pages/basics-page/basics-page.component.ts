import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css']
})
export class BasicsPageComponent implements OnInit {

  public nameLower:string = 'william';
  public nameUpper:string = 'WILLIAM';
  public fullName:string = 'wIlLiAM SAncHeZ'

  constructor() { }

  ngOnInit(): void {
  }

}
