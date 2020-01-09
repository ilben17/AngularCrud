import {Directive} from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS } from '@angular/forms';

@Directive({
    selector: '[appComparMatching]',
    providers: [{provide: NG_VALIDATORS, useExisting: CompareControlsMatchingValidator, multi: true}]
})
export class CompareControlsMatchingValidator implements Validator {
    validate(passwordGroup: AbstractControl): {[key: string]: any} | null {
        const passwordControl = passwordGroup.get('passwordName');
        const confirmPasswordControl = passwordGroup.get('passwordConfirm');
        if (passwordControl && confirmPasswordControl && passwordControl.value !== confirmPasswordControl.value) {
            return {'dontMatches': true};
        }
        return null;
 }
}
