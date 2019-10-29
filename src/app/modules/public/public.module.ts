import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedComponentsModule } from 'src/app/shared/shared-components/shared-components.module';
import { HomeComponent } from './components/home/home.component';
import { PublicRoutingModule } from './public-routing.module';
import { ProdutosService } from './modules/fm-produtos/services/produtos.service';


@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedComponentsModule,
    PublicRoutingModule
  ],
  providers: [ProdutosService]

})
export class PublicModule { }
