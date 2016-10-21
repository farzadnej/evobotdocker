import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'two-vessel',
  template: `
    <select [ngModel]="step.sourceVessel" (ngModelChange)="onSelectedChange($event,'sourceVessel')">
      <option *ngFor="let vessel of vessels" [value]="vessel">
        {{vessel}}
      </option>
    </select>


    <select [ngModel]="step.times" (ngModelChange)="onSelectedChange($event,'times')">
      <option *ngFor="let time of times" [value]="time">
        {{time}}
      </option>
    </select>


    <select [ngModel]="step.destinationVessel" (ngModelChange)="onSelectedChange($event,'destinationVessel')">
      <option *ngFor="let vessel of vessels" [value]="vessel">
        {{vessel}}
      </option>
    </select>

  `,
})
export class DiluteStepComponent {

 

  @Input() step = {sourceVessel:'wellplate'};
  @Output() selectedChange = new EventEmitter();

  vessels = ['tube rack', 'pcr plate', 'trash','through', 'tip rack'];
  times = ['1', '2', '3','4'];


  onSelectedChange(selected,which) {
    console.log('step jan', this.step);
  

    this.step[which] = selected;
    this.selectedChange.emit(this.step);
  }

 

}

