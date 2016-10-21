import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'step-list',
  template: `
    <div class="panel panel-default">
      <table class="table table-striped">
        <tr *ngFor="let step of steps">
        <td class="hidden-xs hidden-sm">{{step.info.type}}</td>

        <div [ngSwitch]="step.info.type">

        <one-vessel [step]="step" (selectedChange)="onUpdate($event)" *ngSwitchCase="'wash'"></one-vessel>
        <one-vessel [step]="step" (selectedChange)="onUpdate($event)" *ngSwitchCase="'pipet up and down'"></one-vessel>
        <one-vessel [step]="step" (selectedChange)="onUpdate($event)" *ngSwitchCase="'discard'"></one-vessel>
        <two-vessel [step]="step" (selectedChange)="onUpdate($event)" *ngSwitchCase="'transfer'"></two-vessel>
        <three-vessel [step]="step" (selectedChange)="onUpdate($event)" *ngSwitchCase="'serial dilute'"></three-vessel>
        <mix-vessel [step]="step" (selectedChange)="onUpdate($event)" *ngSwitchCase="'mix'"></mix-vessel>
     
        
    </div>




          <td>
            
            <button (click)="onRemove(step.info)" class="btn btn-danger">
              <span class="glyphicon glyphicon-trash"></span>
              <span class="hidden-xs">Delete</span>
            </button>
          </td>
        </tr>
      </table>
    </div>
  `,
})
export class StepListComponent {

  @Input() steps;
  @Output() remove = new EventEmitter();
  @Output() update = new EventEmitter();


  

  onRemove(step) {
    this.remove.emit(step);
  }

  onUpdate(step) {
    console.log("onUpdate",step);
    this.update.emit(step);
  }

}
