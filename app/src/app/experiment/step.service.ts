import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class StepService {

  errorHandler = error => console.error('StepService error', error);
  private baseUrl = 'https://tamrin-47ca6.firebaseio.com';

  constructor(private http: Http) { }

  addStep(step) {
    const json = JSON.stringify(step);
    return this.http.post(`${this.baseUrl}/steps.json`, json)
      .toPromise()
      .catch(this.errorHandler);
  }

  getSteps() {
    return this.http.get(`${this.baseUrl}/steps.json`)
      .toPromise()
      .then(response => this.convert(response.json()))
      .catch(this.errorHandler);
  }
  

  removeStep(step) {
    return this.http.delete(`${this.baseUrl}/steps/${step.id}.json`)
      .toPromise()
      .catch(this.errorHandler);
  }


  updateStep(step) {
    console.log("up", step);
    const json = JSON.stringify({
      times: step.times,
      sourceVessel:step.sourceVessel,
      secondVessel:step.secondVessel,
      destinationVessel:step.destinationVessel
    });
    return this.http.patch(`${this.baseUrl}/steps/${step.id}.json`, json)
      .toPromise()
      .catch(this.errorHandler);
  }

  private convert(parsedResponse) {
    return Object.keys(parsedResponse)
      .map(id => ({
        id: id,
        type: parsedResponse[id].type,
        times: parsedResponse[id].times,
        sourceVessel: parsedResponse[id].sourceVessel,
        secondVessel: parsedResponse[id].secondVessel,
        destinationVessel: parsedResponse[id].destinationVessel
        //,stepNo: parsedResponse[id].stepNo
      }));
  }


  getVessels() {
    return this.http.get(`${this.baseUrl}/vessels.json`)
      .toPromise()
      .then(response => this.convertVessel(response.json()))
      .catch(this.errorHandler);
  }


   private convertVessel(parsedResponse) {
    return Object.keys(parsedResponse)
      .map(id => ({
        id: id,
        type: parsedResponse[id].type,
        vesselName: parsedResponse[id].vesselName,
        row: parsedResponse[id].row,
        col: parsedResponse[id].col,
        destinationVessel: parsedResponse[id].destinationVessel
        //,stepNo: parsedResponse[id].stepNo
      }));
  }


  

}
