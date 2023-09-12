import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(heroes: Hero[], sortBy?: keyof Hero | '', order?:boolean): Hero[] {
    switch(sortBy){

      case 'name':
        return order ? 
          heroes.sort( (a,b) => ( a.name > b.name) ? 1 : -1)
          : heroes.sort( (a ,b )=> (a.name < b.name ) ? 1 : -1);
      case 'canFly':
        return order ?
         heroes.sort( (a,b) => ( a.canFly > b.canFly) ? 1 : -1)
        : heroes.sort((a, b) => (a.canFly < b.canFly) ? 1 : -1)
      case 'color':
        return order ? 
         heroes.sort( (a,b) => ( a.color > b.color) ? 1 : -1) 
         : heroes.sort((a, b) => (a.color < b.color) ? 1 : -1)
      default:
        return heroes;
    }
  }

  // INTERFAZ GENERICA
  // transform<T>(values: T[], sortBy?: keyof T | '', order?:boolean): T[] {
  //   if (!sortBy || sortBy === '')
  //     return values
 
  //   return values.sort((a,b) => (a[sortBy] > b[sortBy]) ? 1 : -1);
  // }

}
