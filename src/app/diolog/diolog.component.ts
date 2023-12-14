import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { ServeService } from '../serve.service';

@Component({
  selector: 'app-diolog',
  templateUrl: './diolog.component.html',
  styleUrls: ['./diolog.component.css']
})
export class DiologComponent implements OnInit {
  cardData: any;
  
  constructor(public dialogRef: MatDialogRef<any>,
    @Inject(MAT_DIALOG_DATA) public data: any, private service: ServeService) {
    
   }
  ngOnInit(): void {
    // this.cardData = {}
   this.getCardDetailsById(this.data.id);
   
  }

  getCardDetailsById(id: any){
this.service.getCardDatainfo(id).subscribe((data)=>{
this.cardData=data[0];
console.log("success", this.cardData);

},(error)=>{
  console.log(error,"Error")
})
  }


  closeDilog(){
    // this.display!=this.display;
      }
}
