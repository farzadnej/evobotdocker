import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'mix-vessel',
  template: `

    <select [ngModel]="step.info.sourceVessel" (ngModelChange)="onSelectedChange($event,'sourceVessel')">
      <option *ngFor="let vessel of step.vessels" [value]="vessel.vesselName">
        {{vessel.vesselName}}
      </option>
    </select>

    with

    <select [ngModel]="step.info.secondVessel" (ngModelChange)="onSelectedChange($event,'secondVessel')">
      <option *ngFor="let vessel of step.vessels" [value]="vessel.vesselName">
        {{vessel.vesselName}}
      </option>
    </select>



    In

    <select [ngModel]="step.info.destinationVessel" (ngModelChange)="onSelectedChange($event,'destinationVessel')">
      <option *ngFor="let vessel of step.vessels" [value]="vessel.vesselName">
        {{vessel.vesselName}}
      </option>
    </select>



    <select [ngModel]="step.info.times" (ngModelChange)="onSelectedChange($event,'times')">
      <option *ngFor="let time of times" [value]="time">
        {{time}}
      </option>
    </select>
    times
  `,
})
export class MixVesselComponent {

 

  @Input() step;
  @Output() selectedChange = new EventEmitter();

  //vessels = ['tube rack', 'pcr plate', 'trash','through', 'tip rack'];
  vessels;
  times = ['1', '2', '3','4'];

  onSelectedChange(selected,which) {
    console.log('step jan', this.step);
  

    this.step.info[which] = selected;
    this.selectedChange.emit(this.step.info);
  }

 

}

