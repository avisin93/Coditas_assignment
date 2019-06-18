
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { UsersComponent } from './users/users.component';
import { UserService } from './users/users.services';
import { HttpClientModule } from '@angular/common/http';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        HttpClientModule,
        PaginationModule.forRoot(),
        CommonModule,
        FormsModule,
        AngularFontAwesomeModule
    ],
    declarations: [UsersComponent],
    exports: [
        RouterModule,
        FormsModule
    ],
    providers: [UserService]
})
export class RoutesModule {
}

