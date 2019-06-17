
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { UsersComponent } from './users/users.component';
import { UserService } from './users/users.services';
import { HttpClientModule } from '@angular/common/http';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from '../filters/filter.pipe';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        HttpClientModule,
        PaginationModule.forRoot(),
        CommonModule,
        FormsModule
    ],
    declarations: [UsersComponent,
        FilterPipe],
    exports: [
        RouterModule,
        FormsModule,
        FilterPipe
    ],
    providers: [UserService]
})
export class RoutesModule {
}

