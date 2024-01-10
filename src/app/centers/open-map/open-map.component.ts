import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { MapsAPILoader, MouseEvent } from '@agm/core';

@Component({
  selector: 'app-open-map',
  templateUrl: './open-map.component.html',
  styleUrls: ['./open-map.component.css']
})
export class OpenMapComponent implements OnInit {

  lat : number;
  lng : number;
  zoom : number;

  draggable = true;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<OpenMapComponent>,) {
    //this.draggable = this.
  }

  ngOnInit(): void {
    if(this.data.lat == 0)
      this.setCurrentLocation();
    else {
      this.lat = parseFloat(this.data.lat);
      this.lng = parseFloat(this.data.lng);
      this.zoom = 15;
    }
  }

  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        //console.log(position);
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.zoom = 15;
      });
    }
  }



  closeDialog(msg) {
    this.dialogRef.close(msg);
  }

  savePos() {
    this.closeDialog(JSON.stringify({lat: this.lat, lng: this.lng}));
  }

  markerDragEnd($event: MouseEvent) {
    //console.log($event);
    this.lat = $event.coords.lat;
    this.lng = $event.coords.lng;
  }
}
