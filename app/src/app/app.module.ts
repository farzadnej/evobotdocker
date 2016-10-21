import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routing';
import { LoginService } from './login/login.service';
import { LoggedInGuard } from './login/logged-in.guard';
import { LoginFormComponent } from './login/login-form.component';
import { AppComponent } from './app.component';
import { AlbumService } from './album/album.service';
import { ArtistListComponent } from './artist/artist-list.component';
import { ArtistDetailComponent } from './artist/artist-detail.component';
import { ArtistService } from './artist/artist.service';
import { AlbumListComponent } from './album/album-list.component';
import { AlbumDetailComponent } from './album/album-detail.component';


import { CodeEditorComponent } from './coding/code-editor.component';
import { CodingService } from './coding/coding.service';

import { HttpModule } from '@angular/http';
import { StepCreatorComponent } from './experiment/step-creator.component';
import { StepListComponent } from './experiment/step-list.component';
import { OneVesselComponent } from './experiment/one-vessel.component';
import { TwoVesselComponent } from './experiment/two-vessel.component';
import { ThreeVesselComponent } from './experiment/three-vessel.component';
import { MixVesselComponent } from './experiment/mix-vessel.component';
import { StepService } from './experiment/step.service';
import { ExperimentListComponent } from './experiment/experiment-list.component';


import { LayoutStepCreatorComponent } from './layout/layout-step-creator.component';
import { LayoutStepListComponent } from './layout/layout-step-list.component';
import { LayoutVesselComponent } from './layout/layout-vessel.component';
//import { DiluteStepComponent } from './layout/two-vessel.component';
import { LayoutStepService } from './layout/layout-step.service';
import { LayoutListComponent } from './layout/layout-list.component';




@NgModule({
  imports: [BrowserModule, FormsModule, routing, HttpModule],
  declarations: [
    AppComponent,
    LoginFormComponent,
    ArtistListComponent,
    ArtistDetailComponent,
    AlbumListComponent,
    AlbumDetailComponent,
    StepCreatorComponent, StepListComponent, OneVesselComponent, TwoVesselComponent, ThreeVesselComponent, MixVesselComponent,ExperimentListComponent, CodeEditorComponent,
    LayoutStepCreatorComponent,LayoutVesselComponent,LayoutStepListComponent,LayoutListComponent
    
  ],
  providers: [
    ArtistService,
    AlbumService,
    LoginService,
    LoggedInGuard,
    StepService, CodingService, LayoutStepService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
