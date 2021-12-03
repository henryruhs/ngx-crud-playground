import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { CrudModule, OBSERVE_EFFECT } from 'ngx-crud';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { ContentComponent }  from './content/content.component';
import { PanelComponent } from './panel/panel.component';
import { LoaderComponent } from './loader/loader.component';

import { PanelStore } from './panel/panel.store';
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
		ContentComponent,
		PanelComponent,
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
			useClass: DebugEffect
		},
		PanelStore
	]
})
export class AppModule
{
}
