import { Injectable } from '@angular/core';

import { AbstractControl, ValidatorFn } from '@angular/forms';

@Injectable()
export class CustomvalidationService {
  static checkLimit(min: number, max: number): ValidatorFn {
    return (c: AbstractControl): { [key: string]: boolean } | null => {
        if (  !(c.value && (c.value.length > min && c.value.length < max))) {
            return { 'range': true };
        }
        return null;
    };
}
 
}