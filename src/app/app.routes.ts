import { Routes } from '@angular/router';
import { AboutPageComponent } from './about-page';
import { HomePageComponent } from './home-page';

export const routes: Routes = [
	{
		path: '',
		component: HomePageComponent,
		title: 'Javier Llerones | Blog'
	},
	{
		path: 'about',
		component: AboutPageComponent,
		title: 'About | Javier Llerones'
	}
];
