import { Component, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ServeService } from '../serve.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
searchTerm: string="";
public navBarElements: any[]=[
  {
    name:'Products',
    path:'cat1'
  },
  {
name: 'Second',
path:'cat2'
  },
  {
    name: 'Third',
    path:'cat3'
  }  
]
public showSideNav: boolean=false;
 public showComponent: String="";
 constructor(private route: Router, private service: ServeService){
this.showComponent="cat1"
 }

 public navigateCat(path: any){
// this.route.navigate([path]);
this.showComponent=path;

 }

 public showSideNavbar(){
this.showSideNav=!this.showSideNav
 }
 logout(){
  this.route.navigate(['login'])
 }
 search(event : any){
this.searchTerm=(event.target as HTMLInputElement).value;
console.log(this.searchTerm);
this.service.search.next(this.searchTerm);
 }

}
