import { NgModule } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatGridListModule } from '@angular/material/grid-list';

const materialModules = [
  MatIconModule,
  MatListModule,
  MatCardModule,
  MatMenuModule,
  MatButtonModule,
  MatSidenavModule,
  MatToolbarModule,
  MatGridListModule,
];

@NgModule({
  declarations: [],
  imports: [ ...materialModules ],
  exports: [ ...materialModules ],
})
export class AppMaterialModule { }
