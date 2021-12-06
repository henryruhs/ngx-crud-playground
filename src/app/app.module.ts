import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { CrudModule, OBSERVE_EFFECT } from 'ngx-crud';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { ContentComponent }  from './content/content.component';
import { CardComponent } from './content/card/card.component';
import { PanelComponent } from './panel/panel.component';
import { ConsoleComponent } from './panel/console/console.component';
import { LoaderComponent } from './panel/loader/loader.component';

import { PanelStore } from './panel/panel.store';
import { ConsoleStore } from './panel/console/console.store';
import { ConsoleEffect } from './panel/console/console.effect';


@NgModule(
{
	bootstrap:
	[
		AppComponent
	],
	declarations:
	[
		AppComponent,
		ContentComponent,
		CardComponent,
		PanelComponent,
		ConsoleComponent,
		LoaderComponent
	],
	imports:
	[
		CommonModule,
		BrowserModule,
		CrudModule,
		HttpClientModule,
		ReactiveFormsModule,
		AppRoutingModule
	],
	providers:
	[
		{
			provide: OBSERVE_EFFECT,
			useClass: ConsoleEffect
		},
		ConsoleStore,
		PanelStore
	]
})
export class AppModule
{
}
