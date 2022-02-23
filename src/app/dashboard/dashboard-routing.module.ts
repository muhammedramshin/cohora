import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EcommerceComponent } from "./eCommerce/eCommerce.component";
import { AnalyticsComponent } from "./analytics/analytics.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'home',
        component: EcommerceComponent,
        data: {
          title: 'Home'
        }
      },
      {
        path: 'dashboard',
        component: AnalyticsComponent,
        data: {
          title: 'Dashboard'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule { }
