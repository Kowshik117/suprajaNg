import { Component } from '@angular/core';
import { ServeService } from '../serve.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-errordialogue',
  templateUrl: './errordialogue.component.html',
  styleUrls: ['./errordialogue.component.css']
})
export class ErrordialogueComponent {
 constructor( private service:ServeService){

 }
}
