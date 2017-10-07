import { Component } from '@angular/core';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  file: any; 
  file2: any; 
  mensagem: any;

  constructor(private http: Http) {

  }
  updatedFrente($event) {
    let files = $event.target.files || $event.srcElement.files;
    this.file = files[0];
  }
  updatedFrente2($event) {
    let files = $event.target.files || $event.srcElement.files;
    this.file2 = files[0];
  }
  jwtForm() {
      let headers = new Headers();        
      // headers.append("Content-Type", "multipart/form-data");
      headers.append("Access-Control-Allow-Origin", "*");
      let options = new RequestOptions({ headers: headers });
      return options;
  }
  enviar() {
      let formData = new FormData();
      formData.append('file', this.file);
      formData.append('file2', this.file2);
      formData.append('nome', "b@b.com");
      formData.append('xd', "1");
      formData.append('fr', "2");
      formData.append('email', "3");
      formData.append('dsd', "4");
      formData.append('qwq', "5");
      formData.append('cxc', "6");
      formData.append('vcv', "7");
      formData.append('eqewq', "2");
      formData.append('vcv1', "1");

      this.http.post(
          `http://localhost:8080/api/upload`, 
          formData, 
          this.jwtForm())
          .map((response: Response) => response.json())
          .subscribe(
          data => {
            this.mensagem = JSON.stringify(data);
          },
          error => {
              this.mensagem = JSON.stringify(error);
          });
  }
}
