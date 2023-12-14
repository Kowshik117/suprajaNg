import { Component, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild("cat1") cat1: any;
  title = 'chennai';
  

  
 
  constructor(){
   
  }
  
  ngOnInit(): void {
  


  }




}


