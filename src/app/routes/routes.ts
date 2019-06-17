import { UsersComponent } from "./users/users.component";


export const routes = [
  {
    path: '',
    redirectTo: '/users',
    pathMatch: 'full'
  },
  {
    path: 'users',
    // loadChildren: './users/users.module#UsersModule',
    component: UsersComponent
  }
];
