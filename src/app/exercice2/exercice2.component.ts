import { Component, ElementRef,
   OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-exercice2',
  templateUrl: './exercice2.component.html',
  styleUrls: ['./exercice2.component.css']
})
export class Exercice2Component implements OnInit {
 

  @ViewChild("inp",{static:true}) public inp:ElementRef<HTMLInputElement>;
  public valeur: string ;
  constructor() { }

  ngOnInit() {

   
  }
  upDate(){
    this.valeur = this.inp.nativeElement.value;
  }
 
   

}
