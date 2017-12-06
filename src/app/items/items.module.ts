import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ItemsComponent} from './items/items.component';
import {ItemComponent} from './items/item/item.component';
import {SearchComponent} from './items/search/search.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {MatInputModule} from '@angular/material/input';
import {MatGridListModule} from '@angular/material/grid-list';
import {FormsModule}   from '@angular/forms';
@NgModule({
  imports: [
    CommonModule, FormsModule, BrowserAnimationsModule, MatButtonModule, MatCheckboxModule, MatInputModule, MatGridListModule
  ],
  declarations: [ItemsComponent, ItemComponent, SearchComponent],
  exports: [ItemsComponent]
})
export class ItemsModule {
}
