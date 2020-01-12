import {Directive} from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
    selector: '[appComparMatching]',
    providers: [{provide: NG_VALIDATORS, useExisting: CompareControlsMatchingValidator, multi: true}]
})
export class CompareControlsMatchingValidator implements Validator {
    validate(codesGroup: AbstractControl): {[key: string]: any} | null {
        const codeControl = codesGroup.get('codeName');
        const confirmCodeControl = codesGroup.get('codeConfirm');
        if (codeControl && confirmCodeControl && codeControl.value !== confirmCodeControl.value) {
            return {'dontMatches': true};
        }
        return null;
 }
}
