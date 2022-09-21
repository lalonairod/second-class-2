import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'grados'
})
export class GradosPipe implements PipeTransform {

  transform(value: any, ...args : any ): any {
    console.log(value, args);

    let escala = args[0];

    if(escala === 'c'){
      let farenheit = (value* (9/5)) + 32;
      return farenheit+'°F';
    }
    else if (escala !== 'c'){
      let centigrados = (value -32) * (5/9);
      return centigrados+'°C';
    }
    
    
  }

}
