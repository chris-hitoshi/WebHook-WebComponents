import { TableViewComponent } from './webhook/table-webhook/table-view.component';
import { WebhookResolver } from './webhook/webhook-resolve';
import { DeleteWebhookComponent } from './webhook/delete-webhook/delete-webhook.component';
import { UpdateWebhookComponent } from './webhook/update-webhook/update-webhook.component';
import { CreateWebhookComponent } from './webhook/create-webhook/create-webhook.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "table",
    component: TableViewComponent
  },
  {
    path: "webhook/create",
    component: CreateWebhookComponent
  },
  {
    path: "webhook/update/:id",
    component: UpdateWebhookComponent,
    resolve: {webhook: WebhookResolver}
  },
  {
    path: "webhook/delete/:id",
    component: DeleteWebhookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
