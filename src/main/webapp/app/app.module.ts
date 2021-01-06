import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { XfilesSharedModule } from 'app/shared/shared.module';
import { XfilesCoreModule } from 'app/core/core.module';
import { XfilesAppRoutingModule } from './app-routing.module';
import { XfilesHomeModule } from './home/home.module';
import { XfilesEntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    XfilesSharedModule,
    XfilesCoreModule,
    XfilesHomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    XfilesEntityModule,
    XfilesAppRoutingModule,
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, FooterComponent],
  bootstrap: [MainComponent],
})
export class XfilesAppModule {}
