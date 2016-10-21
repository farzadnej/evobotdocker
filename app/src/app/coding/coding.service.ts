import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class CodingService {

  errorHandler = error => console.error('BookmarkService error', error);
  //private baseUrl = 'https://CHANGE-ME.firebaseio.com';
  private baseUrl = 'https://api.bitbucket.org/1.0/repositories/afaina/evobliss-software/src/master/examples';

  constructor(private http: Http) { }

  addBookmark(bookmark) {
    const json = JSON.stringify(bookmark);
    return this.http.post(`${this.baseUrl}/bookmarks.json`, json)
      .toPromise()
      .catch(this.errorHandler);
  }

  getExamples() {
    return this.http.get(`${this.baseUrl}`)
      .toPromise()
      .then(response => this.convert(response.json()))
      .catch(this.errorHandler);
  }

  getExampleCode(example) {
    return this.http.get(`${this.baseUrl}/${example.name}`)
      .toPromise()
      .then(response => response.json().data )
      .catch(this.errorHandler);
  }


  removeBookmark(bookmark) {
    return this.http.delete(`${this.baseUrl}/bookmarks/${bookmark.id}.json`)
      .toPromise()
      .catch(this.errorHandler);
  }

  updateBookmark(bookmark) {
    const json = JSON.stringify({
      title: bookmark.title,
      url: bookmark.url
    });
    return this.http.patch(`${this.baseUrl}/bookmarks/${bookmark.id}.json`, json)
      .toPromise()
      .catch(this.errorHandler);
  }

  private convert(parsedResponse) {
    return (parsedResponse.files)
      .map(example => ({
        name: this.removePrefix(example.path)
      }))
  }
  removePrefix(name){
    return name.replace("examples/","")
  }

}
