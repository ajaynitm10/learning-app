import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PropertyListComponent } from './property-list/property-list.component';
import { PropertyDetailsComponent } from './property-details/property-details.component';
import { AppResolve } from './services/app.resolve';

export const AppRoutes: Routes = [
    { path: 'property',component: PropertyDetailsComponent, resolve: {tokenValue: AppResolve } },
    { path: '', component: HomeComponent }
    
];