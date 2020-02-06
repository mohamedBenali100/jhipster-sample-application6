import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import './vendor';
import { JhipsterSampleApplication6SharedModule } from 'app/shared/shared.module';
import { JhipsterSampleApplication6CoreModule } from 'app/core/core.module';
import { JhipsterSampleApplication6AppRoutingModule } from './app-routing.module';
import { JhipsterSampleApplication6HomeModule } from './home/home.module';
import { JhipsterSampleApplication6EntityModule } from './entities/entity.module';
// jhipster-needle-angular-add-module-import JHipster will add new module here
import { MainComponent } from './layouts/main/main.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { PageRibbonComponent } from './layouts/profiles/page-ribbon.component';
import { ActiveMenuDirective } from './layouts/navbar/active-menu.directive';
import { ErrorComponent } from './layouts/error/error.component';

@NgModule({
  imports: [
    BrowserModule,
    JhipsterSampleApplication6SharedModule,
    JhipsterSampleApplication6CoreModule,
    JhipsterSampleApplication6HomeModule,
    // jhipster-needle-angular-add-module JHipster will add new module here
    JhipsterSampleApplication6EntityModule,
    JhipsterSampleApplication6AppRoutingModule
  ],
  declarations: [MainComponent, NavbarComponent, ErrorComponent, PageRibbonComponent, ActiveMenuDirective, FooterComponent],
  bootstrap: [MainComponent]
})
export class JhipsterSampleApplication6AppModule {}
