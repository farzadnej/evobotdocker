import { Component } from '@angular/core';
import { LayoutStepService } from './layout-step.service';

@Component({
  selector: 'layout-list',
  template: `
      <div class="panel panel-primary">
      <div class="panel-body">
    <layout-step-creator [details]="{type: '96-wellplate'}"
      (addStep)="addStep($event)"></layout-step-creator>

    <layout-step-creator [details]="{type: '384-wellplate'}"
      (addStep)="addStep($event)"></layout-step-creator>

    <layout-step-creator [details]="{type: 'tube rack'}"
      (addStep)="addStep($event)"></layout-step-creator>

    <layout-step-creator [details]="{type: 'tip rack'}"
      (addStep)="addStep($event)"></layout-step-creator>

    <layout-step-creator [details]="{type: 'trough'}"
      (addStep)="addStep($event)"></layout-step-creator>
    <layout-step-creator [details]="{type: 'medium petri dish'}"
      (addStep)="addStep($event)"></layout-step-creator>

    <layout-step-creator [details]="{type: 'Large petri dish'}"
      (addStep)="addStep($event)"></layout-step-creator>

    <layout-step-creator [details]="{type: 'Waste'}"
      (addStep)="addStep($event)"></layout-step-creator>

    <layout-step-creator [details]="{type: 'Washing vessel'}"
      (addStep)="addStep($event)"></layout-step-creator>
      </div>
      </div>

    <layout-step-list [steps]="steps"
      (remove)="remove($event)" (update)="onUpdate($event)"></layout-step-list>

  `,
})
export class LayoutListComponent {

  steps = [];

  
  editableStep = {};

  constructor(private stepService:LayoutStepService) {
    this.stepService.errorHandler = error =>
      window.alert('Oops! The server request failed.');
    this.reload();
  }

  addStep(step) {
    console.log(step);
    this.stepService.addStep(step)
        .then(() => this.reload());

  }

  remove(step) {
    console.log(step);
    this.stepService.removeStep(step)
      .then(() => this.reload());
  }


  private reload() {
    return this.stepService.getSteps()
      .then(steps => this.steps = steps);
  }

  onUpdate(step) {
    console.log("semi up", step);

    if (step.id) {
      this.stepService.updateStep(step)
        .then(() => this.reload());  

  }


}
}
