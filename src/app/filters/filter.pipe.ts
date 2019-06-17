import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(items: Array<any>, filter: { [key: string]: any }): Array<any> {
        const filterKeys = Object.keys(filter);
        let keyIndex;
        for (keyIndex = 0; keyIndex < filterKeys.length; keyIndex++) {
            if (filterKeys[keyIndex]) {
                break;
            }
        }
        if (keyIndex < filterKeys.length) {
            return items.filter(item => {
                let retainResult = true;
                for (let i = 0; i < filterKeys.length; i++) {
                    if (filter[filterKeys[i]] && item[filterKeys[i]].toLowerCase().indexOf(filter[filterKeys[i]]) === -1) {
                        retainResult = false;
                        break;
                    }
                }
                return retainResult === true;
            });

        } else {
            return items;
        }



    }
}
