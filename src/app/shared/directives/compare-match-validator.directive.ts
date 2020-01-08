import {Directive, Input} from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';
import { InvokeFunctionExpr } from '@angular/compiler';

@Directive({
    selector: '[appComparMatching]',
    providers: [{provide: NG_VALIDATORS, useExisting: CompareControlsMatchingValidator, multi: true}]
})
export class CompareControlsMatchingValidator implements Validator {
    @Input('appComparMatching') refControlToCompare: string;
    validate(control: AbstractControl): {[key: string]: any} | null {
        const contenuControlToCompare = control.parent.get(this.refControlToCompare);
        if (contenuControlToCompare && contenuControlToCompare.value !== control.value) {
            return {'dontMatches': true};
        }
        return null;
 }
}
