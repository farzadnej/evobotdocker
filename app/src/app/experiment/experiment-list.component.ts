import { Component, OnInit } from '@angular/core';
import { StepService } from './step.service';

@Component({
  selector: 'experiment-list',
  template: `
      <div class="panel panel-primary">
      <div class="panel-body">
    <step-creator [details]="{type: 'wash'}"
      (addStep)="addStep($event)"></step-creator>
    <step-creator [details]="{type: 'transfer'}"
      (addStep)="addStep($event)"></step-creator>

      <step-creator [details]="{type: 'pipet up and down'}"
      (addStep)="addStep($event)"></step-creator>

      <step-creator [details]="{type: 'discard'}"
      (addStep)="addStep($event)"></step-creator>

      <step-creator [details]="{type: 'mix'}"
      (addStep)="addStep($event)"></step-creator>

      <step-creator [details]="{type: 'serial dilute'}"
      (addStep)="addStep($event)"></step-creator>
      </div>
      </div>

    <step-list [steps]="experiment"
      (remove)="remove($event)" (update)="onUpdate($event)"></step-list>

      <button type="button" class="btn btn-info">Save Experiment</button>
      <button type="button" (click)="onRun()" class="btn btn-primary">Run Experiment</button>
      <button type="button" (click)="onClear()" class="btn btn-danger">Clear</button>


  `,
})
export class ExperimentListComponent {

  steps = [];
  vessels;
  experiment =[];

  
  editableStep = {};

  constructor(private stepService:StepService) {
    this.stepService.errorHandler = error =>
      window.alert('Oops! The server request failed.');
    this.reload();
  }

  ngOnInit() {
    this.getVessels();
    this.reload();
  }

  getVessels() {
    console.log('get vessels');
    return this.stepService.getVessels()
      .then(vessels => {this.vessels = vessels;
        console.log(vessels);

      });
      
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
      .then(steps => {
        this.experiment = this.convertAll(steps);
        console.log('experim', this.experiment);

      });
  }

  convertAll(steps) {

    return steps
      .map(step => ({
        info: step,
        vessels: this.vessels
      }));
  }

  onUpdate(step) {
    console.log("semi up", step);

    if (step.id) {
      this.stepService.updateStep(step)
        .then(() => this.reload());  

  }
}

  onRun() {
         console.log('run');
  }

  onClear() {
         console.log('save');
  }
}
