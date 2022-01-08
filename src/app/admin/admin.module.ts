import { NgModule } from '@angular/core';
import { AdminComponent } from './admin/admin.component';
import { SessionItemComponent } from './session-item/session-item.component';
import { SessionItemListComponent } from './session-item-list/session-item-list.component';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { SessionAddFormComponent } from './admin/session-add-form/session-add-form.component';
import { SessionEditFormComponent } from './session-edit-form/session-edit-form.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
const adminRoutes: Routes = [
    {
    path: '',
    component: AdminComponent,
    children: [{ path: 'add', component: SessionAddFormComponent },
    { path: 'edit/:id', component:
    SessionEditFormComponent },
    { path: 'list', component: SessionItemListComponent
    },
    { path: '', redirectTo: 'list', pathMatch: 'full' }
    ],
    }
    ];

@NgModule({
imports: [CommonModule ,FormsModule,RouterModule.forChild(adminRoutes)],
declarations: [SessionItemComponent,SessionItemListComponent,
AdminComponent,
SessionAddFormComponent,
SessionEditFormComponent],
providers: [],
bootstrap: [AdminComponent]
})

export class AdminModule { }
