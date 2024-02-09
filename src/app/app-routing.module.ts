import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartFramworkComponent } from './start-framwork/start-framwork.component';
import { AboutComponent } from './about/about.component';
import { ProtfolioComponent } from './protfolio/protfolio.component';
import { ContactComponent } from './contact/contact.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { path: "", redirectTo: "startFramwork", pathMatch: 'full' },
  { path: "startFramwork", component: StartFramworkComponent },
  { path: "about", component: AboutComponent },
  { path: "protfolio", component: ProtfolioComponent },
  { path: "contact", component: ContactComponent },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
