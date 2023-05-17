import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent} from './pages/main-page-component';
import { ListComponent } from './componentes/list/list.component';
import { AddcharacterComponent } from './componentes/addcharacter/addcharacter.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    AddcharacterComponent
  ],
  exports:[
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class DbzModule { }
