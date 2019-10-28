import * as _ from "lodash";
import {Pipe, PipeTransform} from "@angular/core";

@Pipe({
    name: "articleFilter"
})
export class ArticleFilterPipe implements PipeTransform {
	transform(value: any, args?: any): any {
    if (!args) {
      return value;
    }
    return value.filter((val) => {
        console.log(val)
      let rVal = (val.title.toLocaleLowerCase().includes(args));
          return rVal;
    })

  }
}
