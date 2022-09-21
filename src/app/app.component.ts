import { Component, OnInit, OnChanges, AfterContentInit, SimpleChanges, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  title = 'second-class-2';

  public flag : boolean = true;
  public valor  : string = '';
  public escala  : string = '';

  constructor(){

  }

  ngOnInit(): void {
    this.hide();
  }

  public hide(){
    let button = document.getElementById('btn');

    button?.addEventListener("click", () => {
      //this.flag =! this.flag;
      let grado : HTMLInputElement = document.getElementById("grado") as HTMLInputElement
      let escala : HTMLInputElement = document.getElementById("escala") as HTMLInputElement
      this.valor = grado.value
      this.escala = escala.value
    });
  }

  
}
