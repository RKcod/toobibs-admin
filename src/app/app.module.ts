import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ConnectionBackend, Http, HttpModule} from "@angular/http";
import { RouterModule } from '@angular/router';

import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { TableListComponent } from './table-list/table-list.component';
import { TypographyComponent } from './typography/typography.component';
import { IconsComponent } from './icons/icons.component';
import { MapsComponent } from './maps/maps.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { UpgradeComponent } from './upgrade/upgrade.component';
import {
  AgmCoreModule
} from '@agm/core';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import {HttpClientModule} from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import {MatButtonModule} from '@angular/material/button';
import {MatRippleModule} from '@angular/material/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatTooltipModule} from '@angular/material/tooltip';
import { DatePipe } from '@angular/common'

import { ToastrModule } from 'ngx-toastr';
import {NgxSpinnerModule} from 'ngx-spinner';
import { UsersComponent } from './users/users.component';
import { SettingsComponent } from './settings/settings.component';
import { CentersComponent } from './centers/centers.component';
import { CreateUserComponent } from './users/create-user/create-user.component';
import { UserDetailsComponent } from './users/user-details/user-details.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { ConfirmDeleteComponent } from './users/confirm-delete/confirm-delete.component';
import { CreateCenterComponent } from './centers/create-center/create-center.component';
import { CenterDetailsComponent } from './centers/center-details/center-details.component';
import {ConfirmCenterDeleteComponent} from './centers/confirm-delete/confirm-delete.component';
import { OpenMapComponent } from './centers/open-map/open-map.component';
import { DoctorsInCenterComponent } from './centers/doctors-in-center/doctors-in-center.component';
import {MatRadioGroup, MatRadioModule} from '@angular/material/radio';
import { SpecialitiesComponent } from './specialities/specialities.component';
import { CreateSpecialityComponent } from './specialities/create-speciality/create-speciality.component';
import { ConfirmDeleteSpecialityComponent } from './specialities/confirm-delete-speciality/confirm-delete-speciality.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {environment} from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import { CancelledAppointmentsComponent } from './cancelled-appointments/cancelled-appointments.component';
import { SmsComponent } from './sms/sms.component';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        NgxSpinnerModule,
        HttpModule,
        ComponentsModule,
        RouterModule,
        AppRoutingModule,
        HttpClientModule,
        MatButtonModule,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatTooltipModule,
        ToastrModule.forRoot(),
        BrowserAnimationsModule,
        MatPaginatorModule,
        MatButtonToggleModule,
        MatTabsModule,
        MatRadioModule,
        HttpModule,
        MatSlideToggleModule,
        AngularFireModule.initializeApp(environment.firebase),
        AgmCoreModule.forRoot({
            apiKey: 'AIzaSyC4c9IP1Tr0NyNr07YE-hCIKgWqCcJxdpA'
        }),
        MatExpansionModule,
        MatCardModule
    ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    LoginComponent,
    UsersComponent,
    SettingsComponent,
    CentersComponent,
    CreateUserComponent,
    UserDetailsComponent,
    ConfirmDeleteComponent,
    CreateCenterComponent,
    CenterDetailsComponent,
    ConfirmCenterDeleteComponent,
    OpenMapComponent,
    DoctorsInCenterComponent,
    SpecialitiesComponent,
    CreateSpecialityComponent,
    ConfirmDeleteSpecialityComponent,
    CancelledAppointmentsComponent,
    SmsComponent

  ],
  providers: [DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule { }
