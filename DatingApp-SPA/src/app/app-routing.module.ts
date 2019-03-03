import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MessagesComponent } from './messages/messages.component';
import { ListsComponent } from './lists/lists.component';
import { AuthGuard } from './_guards/auth.guard';
import { MemberListComponent } from './members/member-list/member-list.component';
import { MemberDetailComponent } from './members/member-detail/member-detail.component';
import { MemberDetailResolver } from './_resolver/member-detail.resolver';
import { MemberListResolver } from './_resolver/member-list.resolver.';
import { MemberEditComponent } from './members/member-edit/member-edit.component';
import { MemberEditResolver } from './_resolver/member-edit.resolver';
import { PreventUnsavedChanges } from './_guards/prevent-unsaved-changes.guard';
import { ListResolver } from './_resolver/lists.resolver';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'members', component: MemberListComponent, canActivate: [AuthGuard], resolve: { users: MemberListResolver } },
  {
    path: 'members/:id', component: MemberDetailComponent, canActivate: [AuthGuard],
    resolve: { user: MemberDetailResolver }
  },
  {
    path: 'member/edit', component: MemberEditComponent, canActivate: [AuthGuard], resolve: { user: MemberEditResolver },
    canDeactivate: [PreventUnsavedChanges]
  },
  { path: 'messages', component: MessagesComponent, canActivate: [AuthGuard] },
  { path: 'lists', component: ListsComponent, canActivate: [AuthGuard], resolve: { users: ListResolver} },
  { path: '**', redirectTo: '', pathMatch: 'full' } // Hiçbiri ile eşleşmezse home sayfasına git. En sonda olmalı

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
