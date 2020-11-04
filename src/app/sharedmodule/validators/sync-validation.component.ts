import {ValidationErrors, AbstractControl} from '@angular/forms';

export class SyncValidationCheck {
    static noSpecialCharcterValidation(control: AbstractControl): ValidationErrors | null {
        if (/[^a-z^A-z^0-9]/g.test(control.value)) { return {error: 'no special charcters allowed'}; } else { null; }
    }
    static emailValidation(control: AbstractControl): ValidationErrors | null {
        if (/\S+@\S+\.\S+/g.test(control.value)) { null;  } else { return {error: 'invalid email'}; }
    }
    static noSpaceValidation(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0) { return {error: 'no space allowed'}; } else { return null; }
    }
}


