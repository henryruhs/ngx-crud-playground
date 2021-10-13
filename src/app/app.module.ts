import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { CrudModule, OBSERVE_EFFECT } from 'ngx-crud';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { JokeComponent } from './joke/joke.component';
import { LoaderComponent } from './loader/loader.component';

import { JokeService } from './joke/joke.service';
import { DebugEffect } from './debug.effect';

@NgModule(
{
	bootstrap:
	[
		AppComponent
	],
	declarations:
	[
		AppComponent,
		JokeComponent,
		LoaderComponent
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
		{
			provide: OBSERVE_EFFECT,
			useClass: DebugEffect
		},
		JokeService
	]
})
export class AppModule
{
}
