import { RouterModule } from '@angular/router';
import { LoggedInGuard } from './login/logged-in.guard';
import { LoginFormComponent } from './login/login-form.component';
import { ArtistListComponent } from './artist/artist-list.component';
import { ArtistDetailComponent } from './artist/artist-detail.component';
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




export const routing = RouterModule.forRoot([
  {
    path: 'coding',
    component: CodeEditorComponent
  },
  {
    path: 'layout',
    component: LayoutListComponent
  },
  {
    path: 'experiment',
    component: ExperimentListComponent
  },
  {
    path: 'login',
    component: LoginFormComponent
  },
  {
    path: 'artists',
    component: ArtistListComponent
  },
  {
    path: 'artists/:artistId',
    component: ArtistDetailComponent
  },
  {
    path: 'albums',
    component: AlbumListComponent
  },
  {
    path: 'albums/:albumId',
    component: AlbumDetailComponent,
    canActivate: [LoggedInGuard]
  },
  {
    path: '',
    redirectTo: '/artists',
    pathMatch: 'full'
  }
]);
