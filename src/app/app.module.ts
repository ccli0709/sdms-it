import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AccordionModule } from 'primeng/accordion';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenubarModule } from 'primeng/menubar';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { TabMenuModule } from 'primeng/tabmenu';
import { TableModule } from 'primeng/table';
import { MessagesModule } from 'primeng/messages';
import { MessageModule } from 'primeng/message';
import { TreeModule } from 'primeng/tree';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { PaginatorModule } from 'primeng/paginator';
import { TooltipModule } from 'primeng/tooltip';
import { ToastModule } from 'primeng/toast';
import { DropdownModule } from 'primeng/dropdown';
import { DynamicDialogModule } from 'primeng/dynamicdialog';
import { MessageService } from 'primeng/api';
import { DialogService } from 'primeng/api';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';

import { ContactListComponent } from './contact/contact-list/contact-list.component';
import { ContactEditComponent } from './contact/contact-edit/contact-edit.component';
import { CommonMenuComponent } from './common/common-menu/common-menu.component';
import { CommonHeaderComponent } from './common/common-header/common-header.component';
import { CommonUserPickerComponent } from './common/common-user-picker/common-user-picker.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactEditComponent,
    CommonMenuComponent,
    CommonHeaderComponent,
    CommonUserPickerComponent
  ],
  entryComponents: [
    CommonUserPickerComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    AccordionModule,
    PanelMenuModule,
    MenubarModule,
    ButtonModule,
    TabViewModule,
    TabMenuModule,
    TableModule,
    MessagesModule,
    MessageModule,
    TreeModule,
    CheckboxModule,
    RadioButtonModule,
    InputTextModule,
    PanelModule,
    PaginatorModule,
    TooltipModule,
    ToastModule,
    ConfirmDialogModule,
    DropdownModule,
    DynamicDialogModule,
  ],
  providers: [
    MessageService,
    ConfirmationService,
    DialogService],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() { }
}
