import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api/api.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateUserComponent } from './create-user/create-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { PageEvent } from '@angular/material/paginator';
import { ConfirmDeleteComponent } from './confirm-delete/confirm-delete.component';
import { event } from 'jquery';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users = [];
  meta: any = {
    pagination: {
      count: 0,
      per_page: 50
    }
  };
  pageEvent: void;

  constructor(public api: ApiService, private dialog: MatDialog, private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.loadUsers(null);
  }

  loadUsers($event: PageEvent, searchValue?: string) {
    this.spinner.show();
  
    const searchParams: any = {
      orderBy: 'first_name',
      include: 'center',
      limit: 50,
    };
  
    if (searchValue) {
      searchParams.search = searchValue; // Utilisez la valeur de recherche telle quelle
    }
  
    if ($event) {
      searchParams.page = $event.pageIndex + 1;
    }
  
    this.api.performGETCall('users', searchParams, true).subscribe(
      (res) => {
        this.spinner.hide();
        this.users = res.data;
        this.meta = res.meta;
      },
      (err) => {
        this.spinner.hide();
        this.api.handleErrors(err.error.message);
      }
    );
  }
  

  search(event: Event) {
    const searchValue = (event.target as HTMLInputElement).value;
    const searchParams = this.buildSearchParams(searchValue);
    this.loadUsers(null, searchParams);
  }
  
  buildSearchParams(searchValue: string): string {
    if (!searchValue.startsWith('first_name:')) {
      searchValue = `first_name:${searchValue}`;
    }
  
    return searchValue;
  }

  openEdit(id) {
    let dialogRef = this.dialog.open(CreateUserComponent, {
      data: { id: id },
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result == 'success') this.loadUsers(null);
    });
  }

 

  validate(id, status) {
    this.spinner.show();
    this.api.performPUTCall('users/' + id, { confirmed: status }, false, true).subscribe(u => {
      this.spinner.hide();
      let message = "Bonjour " + u.data.first_name + ", Votre profil Médécin à été " + (status == 1 ? "validé" : "rejeté") + " par l'administrateur de Toobib.";
      this.api.performRemoteGETCall('https://api-mapper.clicksend.com/http/v2/send.php?method=http&username=ronaldo.kana@isdg-sarl.com&key=A018CADB-8D14-F116-AD67-B0DFFE0990F5&to=' + u.data.phone + '&source=Toobibs&message=' + encodeURI(message)).subscribe(res => {
        // Gérez la réponse
      }, err => {
        // Gérez l'erreur
      });
      this.loadUsers(null);
      this.api.displayMessage('Succès', 'Informations mise à jour');
    }, err => {
      this.spinner.hide();
      this.api.handleErrors(err.error.message);
    });
  }

  delete(id) {
    let dialogRef = this.dialog.open(ConfirmDeleteComponent, {
      data: { id: id },
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result == 'success') this.loadUsers(null);
    });
  }

  changeDisplay(id: any, status: number) {
    this.spinner.show();
    this.api.performPUTCall('users/' + id, { display_home: status }, false, true).subscribe(u => {
      this.spinner.hide();
      this.loadUsers(null);
      this.api.displayMessage('Succès', 'Informations mise à jour');
    }, err => {
      this.spinner.hide();
      this.api.handleErrors(err.error.message);
    });
  }
}
