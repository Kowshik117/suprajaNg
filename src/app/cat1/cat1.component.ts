import { Component,OnInit } from '@angular/core';
import { ServeService } from '../serve.service';
import { MatDialog } from '@angular/material/dialog';
import { DiologComponent } from '../diolog/diolog.component';


@Component({
  selector: 'app-cat1',
  templateUrl: './cat1.component.html',
  styleUrls: ['./cat1.component.css']
})
export class Cat1Component implements OnInit{
  cardData: any;
  serachKey: string="";
  errorMessage: String="";
constructor(private service:ServeService, public dialog: MatDialog){

}
diologue(element:any){
 this.openDialog(element.id)
  // this.service.getCardDatainfo(this.cardData.id).subscribe((data)=> {
  //   console.log(data)
  // })
}

ngOnInit(): void {
this.service.getCardData().subscribe((data)=>{
  
  this.cardData=data;
  this.service.search.subscribe((val:any)=>{
    this.serachKey=val;
 
  })
}, (error)=>{
  this.service.errorMethod("something went wrong")
})
}
openDialog(id:any): void {
  this.dialog.open(DiologComponent, {
    width: '300px',data:{
      message:"",
      id:id
    }
  });
}

}
