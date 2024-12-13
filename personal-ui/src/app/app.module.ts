import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; // Import here
import { LeftPaneComponent } from './layout/left-pane/left-pane.component';
import { TopNavComponent } from './layout/top-nav/top-nav.component';
import { TimelineComponent } from './shared/components/timeline/timeline.component';

@NgModule({
  declarations: [
    AppComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LeftPaneComponent,
    LeftPaneComponent,
    TopNavComponent,
    TimelineComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
