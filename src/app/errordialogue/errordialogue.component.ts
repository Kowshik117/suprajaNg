import { Component, Inject } from '@angular/core';
import { ServeService } from '../serve.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-errordialogue',
  templateUrl: './errordialogue.component.html',
  styleUrls: ['./errordialogue.component.css']
})
export class ErrordialogueComponent {
 constructor(@Inject(MAT_DIALOG_DATA) public data: any,  public dialogRef: MatDialogRef<any>, ){

 }

 closedialgue(){
  this.dialogRef.close()
 }

}
