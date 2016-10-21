import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'layout-vessel',
  template: `
    Name:
    <input type="text" [(ngModel)]="step.vesselName"
          placeholder="Easy to remember Name" style="width: 25%;">

       Top left location
    <select [ngModel]="step.row" (ngModelChange)="onSelectedChange($event,'row')">
      <option *ngFor="let row of rows" [value]="row">
        {{row}}
      </option>
    </select>

    
    <select [ngModel]="step.col" (ngModelChange)="onSelectedChange($event,'col')">
      <option *ngFor="let col of cols" [value]="col">
        {{col}}
      </option>
    </select>
  `,
})
export class LayoutVesselComponent {

 

  @Input() step = {sourceVessel:'wellplate'};
  @Output() selectedChange = new EventEmitter();

  rows = ['A', 'B', 'C','D'];
  cols = ['1', '2', '3','4'];


  onSelectedChange(selected,which) {
    console.log('step jan', this.step);
  

    this.step[which] = selected;
    this.selectedChange.emit(this.step);
  }

 

}

