
import {  NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule, CardModule, FormModule, GridModule, AccordionModule, CarouselModule, TooltipModule, NavModule, NavbarModule, ButtonGroupModule, CollapseModule, DropdownModule, SharedModule, UtilitiesModule } from '@coreui/angular';
import { IconModule } from '@coreui/icons-angular';

import { PagesRoutingModule } from './pages-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Page404Component } from './page404/page404.component';
import { Page500Component } from './page500/page500.component';
import { IntregavelComponent } from '../theme/intregavel.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DocsComponentsModule } from '@docs-components/docs-components.module';
import { NavsComponent } from '../base/navs/navs.component';
import { ButtonsRoutingModule } from '../buttons/buttons-routing.module';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    Page404Component,
    Page500Component,
    IntregavelComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    CardModule,
    ButtonModule,
    GridModule,
    IconModule,
    FormModule,
    AccordionModule,
    TooltipModule,
    CarouselModule,
    FormModule,
    ReactiveFormsModule,
    DocsComponentsModule, 
    NavbarModule,
    CommonModule,
    
    ButtonsRoutingModule,
    ButtonModule,
    ButtonGroupModule,
    GridModule,
    IconModule,
    CardModule,
    UtilitiesModule,
    DropdownModule,
    SharedModule,
    FormModule,
    ReactiveFormsModule,
    DocsComponentsModule,
    NavbarModule,
    CollapseModule,
    NavModule,
    NavbarModule
  ]
})
export class PagesModule {
}
