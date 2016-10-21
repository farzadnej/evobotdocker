import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'layout-step-list',
  template: `
    <div class="panel panel-default">
      <table class="table table-striped">
        <tr *ngFor="let step of steps">
        <td class="hidden-xs hidden-sm">{{step.type}}</td>

     <div>
        <layout-vessel [step]="step" (selectedChange)="onUpdate($event)"></layout-vessel>
    </div>
     



          <td>
            
            <button (click)="onRemove(step)" class="btn btn-danger">
              <span class="glyphicon glyphicon-trash"></span>
              <span class="hidden-xs">Delete</span>
            </button>
          </td>
        </tr>
      </table>
    </div>

    <button (click)="proceed()" class="btn btn-primary">Proceed to Experiment</button>
  `,
})
export class LayoutStepListComponent {

  @Input() steps = [];
  @Output() remove = new EventEmitter();
  @Output() update = new EventEmitter();

  constructor(private route: ActivatedRoute,
              private router: Router) { }
  

  onRemove(step) {
    this.remove.emit(step);
  }

  onUpdate(step) {
    console.log("onUpdate",step);
    this.update.emit(step);
  }

  proceed() {
         this.router.navigateByUrl('/experiment');
  }

}
