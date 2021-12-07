import { TableViewComponent } from './table-webhook/table-view.component';
import { WebhookResolver } from './webhook-resolve';
import { DeleteWebhookComponent } from './delete-webhook/delete-webhook.component';
import { UpdateWebhookComponent } from './update-webhook/update-webhook.component';
import { CreateWebhookComponent } from './create-webhook/create-webhook.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

const routes: Routes = [
  {
    path: "table",
    component: TableViewComponent,
    outlet: 'tableWebhook'
  },
  {
    path: "webhook/create",
    component: CreateWebhookComponent,
    outlet: 'createWebhook'
  },
  {
    path: "webhook/update/:id",
    component: UpdateWebhookComponent,
    outlet: 'updateWebhook',
    resolve: {webhook: WebhookResolver}
  },
  {
    path: "webhook/delete/:id",
    component: DeleteWebhookComponent,
    outlet: 'deleteWebhook'
  },
  { 
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({  
  imports: [RouterTestingModule.withRoutes(routes)],
  exports: [RouterTestingModule]
})

export class WebhookRoutingModule { }
