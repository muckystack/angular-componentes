import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mostrarMiles'
})
export class MostrarMilesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {

    console.log(value);
    
    return (value < 20000) ? 'Menos de 20,000 habilidades' : 'Más de 20,000 habilidades';
  }

}
