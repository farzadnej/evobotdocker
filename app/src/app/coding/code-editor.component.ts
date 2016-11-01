import { Component } from '@angular/core';
import * as io from 'socket.io-client';
import { CodingService } from './coding.service';

import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  selector: 'code-editor',
  template: require('./code-editor.component.html'),
  styles: [require('./code-editor.component.css')]
})
export class CodeEditorComponent {

  code = "";
  examples = [];
  socket;
  log = "";


  constructor(private codingService: CodingService) {
    console.log('khaste4');
    this.socket = io('http://159.203.69.117:3000');
    let listener = Observable.fromEvent(this.socket, 'update log'); 
    listener.subscribe((payload) => { 
      if (payload != {} ) {
        console.log(payload);
        this.log = this.log + "<br>" +payload.log; 
      }
    })  

    this.codingService.errorHandler = error =>
      window.alert('Oops! The server request failed.');
    this.reload();
    console.log(this.examples);
  }
  

  onRunCode() {
    this.socket.emit('run code', {raspID: 'a', code: this.code}); 
  }

  onClearCode() {
    this.code = ""; 
  }

  onGetCode(example) {

    return this.codingService.getExampleCode(example)
      .then(code => this.code = code);
    
  }

  private reload() {
    return this.codingService.getExamples()
      .then(examples => this.examples = examples);
  }

}
