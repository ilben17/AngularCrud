import {Directive, Input} from '@angular/core';
import {Validator, AbstractControl, NG_VALIDATORS} from '@angular/forms';


@Directive({
    selector: '[appMySelectListCustomValidator]', // as it's attribute i have to use bracket to bind it
    providers: [{provide: NG_VALIDATORS, useExisting: SelectRequiredValidator, multi: true}]
})
export class SelectRequiredValidator implements Validator {
    // tslint:disable-next-line:no-input-rename
    @Input('appMySelectListCustomValidator') defaultDepartement: string;
    // l'attribut qui reçoit le input doit avoir le meme nom que la directive, sinon il faut créé un alias comme c fait
    validate(mySelectList: AbstractControl): {[key: string]: any} | null {
        return (mySelectList.value === this.defaultDepartement) ? {'invalidDepartement': 'Departement is required'} : null;
        // so if there reallay vaue is -1 then the key 'invalidDepartement' will be added to angular errors collection
    }
}
