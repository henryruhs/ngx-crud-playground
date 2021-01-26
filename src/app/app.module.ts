import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { CrudModule } from 'ngx-crud';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { JokeComponent } from './joke/joke.component';
import { LoaderComponent } from './loader/loader.component';

import { JokeService } from './joke/joke.service';

@NgModule(
{
	bootstrap:
	[
		AppComponent
	],
	declarations:
	[
		AppComponent,
		LoaderComponent,
		JokeComponent
	],
	imports:
	[
		AppRoutingModule,
		BrowserModule,
		CrudModule,
		HttpClientModule
	],
	providers:
	[
		JokeService
	]
})
export class AppModule
{
}
