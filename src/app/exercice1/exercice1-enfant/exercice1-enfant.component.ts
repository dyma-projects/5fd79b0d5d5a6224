import { Component, OnInit,EventEmitter,Output, Input } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css']
})
export class Exercice1EnfantComponent implements OnInit {

  @Output() public compteur:EventEmitter<number>=new EventEmitter();
  public value:number = 0;
  @Input("compteur") valueCompteur:number;
  constructor() { }

  ngOnInit() {
  }

  increment(){

    this.value++;
    this.compteur.emit(this.value);
  }

  decrement(){

    this.value--
    this.compteur.emit(this.value);
  }
}
