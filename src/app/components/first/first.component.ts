import { Component, OnInit, OnChanges, AfterContentInit, SimpleChanges, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit/*, OnChanges, AfterContentInit, AfterContentChecked, 
AfterViewInit, AfterViewChecked, OnDestroy*/  

{

  /*ngOnDestroy(): void {
    console.log('OnDestroy');
  }
  
  ngAfterViewChecked(): void {
    console.log('AfterChecked');
  }
  
  ngAfterViewInit(): void {
    console.log('AfterViewInit');
  }
  
  ngAfterContentChecked(): void {
    console.log('AfterContentChecked');
  }
  
  ngAfterContentInit(): void {
    console.log('AfterContentInit');
  }
  
  ngOnChanges(changes: SimpleChanges): void {
    console.log('OnChanges');
  } */
  
  ngOnInit(): void {
    console.log('OnInit');
  }

  title = 'second-class-2';

  /*
  constructor(){
    console.log('Constructor');
  }
*/
  nameInput(input : any){
    console.log("Valor: ", input);
  }
  
}
