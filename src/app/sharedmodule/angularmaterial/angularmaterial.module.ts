import {MatChipsModule} from '@angular/material/chips';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import {TextFieldModule} from '@angular/cdk/text-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatRadioModule} from '@angular/material/radio';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatDialogModule} from '@angular/material/dialog';

import { NgModule } from '@angular/core';



@NgModule({
  exports: [
    MatCheckboxModule,
    MatInputModule,
    TextFieldModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatRadioModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatCardModule,
    MatListModule,
    MatChipsModule,
    MatGridListModule,
    MatTooltipModule,
    MatDialogModule,
    MatIconModule
  ]
})
export class AngularmaterialModule { }
