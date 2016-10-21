import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'step-creator',
  template: `

      
       
        <button (click)="onAddStep()" class="btn btn-primary">
          <span class="glyphicon glyphicon-ok"></span>
          <span class="hidden-xs">{{details.type}}</span>
        </button>
        
      
    
  `,
})
export class StepCreatorComponent {

  //stepNo = 0;
  

  @Input() details = {};
  @Output() addStep = new EventEmitter();
 
 

  onAddStep() {
    //this.stepNo++;
    //this.details.stepNo = this.stepNo;
    this.addStep.emit(this.details);
  }

}
