import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
    children:[
          {
            path: 'feed',
            loadChildren: () =>
            import('../pages/feed/feed.module').then(
              m => m.FeedPageModule
            )
          },
          {
            path: 'notifications',
            loadChildren: () =>
            import('../pages/notifications/notifications.module').then(
              m => m.NotificationsPageModule
            )
          },
          {
            path: 'messages',
            loadChildren: () =>
            import('../pages/messages/messages.module').then(
              m => m.MessagesPageModule
            )
          },
          {
            path: 'settings',
            loadChildren: () =>
            import('../pages/settings/settings.module').then(
              m => m.SettingsPageModule
            )
          },
          {
            path: 'quit',
            loadChildren: () =>
            import('../pages/quit/quit.module').then(
              m => m.QuitPageModule
            )
          },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRouter {}
