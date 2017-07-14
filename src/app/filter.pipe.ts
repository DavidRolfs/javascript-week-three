
import {Pipe, PipeTransform} from '@angular/core';
import {Skater} from './skater.model';


@Pipe({
  name: "filterAge",
  pure: false
})


export class FilterPipe implements PipeTransform {

  transform(input: Skater[], desiredAge){
      var output: Skater[] = [];
      if(desiredAge === "Up-and-comers"){
      for (var i = 0; i < input.length; i++) {
        if (input[i].age <= 29) {
          output.push(input[i]);
        }
      }
          return output;
      } else if (desiredAge === "Legends") {
          for (var i = 0; i < input.length; i++) {
            if (input[i].age > 30) {
              output.push(input[i]);
            }
          }
          return output;
        } else {
          return input;
        }
    }
  }
