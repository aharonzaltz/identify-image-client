import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "src/environments/environment";
import {take} from "rxjs/operators";

@Component({
  selector: 'app-identify-animal',
  templateUrl: './identify-animal.component.html',
  styleUrls: ['./identify-animal.component.scss']
})
export class IdentifyAnimalComponent implements OnInit {

  private readonly urlBase = environment.urlBase;
  private image?: string | ArrayBuffer | null;

  constructor(
      private http: HttpClient
  ) {
  }

  ngOnInit(): void {
  }

  setFile(event: Event) {
    let files = (<HTMLInputElement>event.target)!.files;
    if (!files) {
      return
    }

    let path = `${this.urlBase}`
    let data = {
      "patientData": {
        "uid": "",
        "firstName": "",
        "lastName": "",
        "gender": "Not Specified",
        "dateOfBirth": ""
      }
    }
    // let headers = new HttpHeaders()
    //   .set('content-type', 'multipart/form-data; boundary=----WebKitFormBoundary7MA4YWxkTrZu0gW')
    // let headers = new HttpHeaders().set('content-type', 'multipart/form-data')
    const formData: FormData = new FormData();

    // for (let i = 0; i < files.length; i++) {
    //   formData.append(i.toString(), files[i], files[i].name);
    // }
    // formData.append("data", JSON.stringify(data));
    console.log(formData)
    // var myReader: FileReader = new FileReader();
    // myReader.onloadend = (e) => {
    //   this.image = myReader.result;
    //   var image = e!.target!.result;
    //   this.image = btoa(image as any);
    //   console.log(btoa(image as any))
    //   formData.append("data", JSON.stringify(this.image));
    //   var imageElem = new Image();
    //   imageElem.src = 'data:image/png;base64,' + this.image;
    //   document.body.appendChild(imageElem);
    //   this.http.post(path, {data: this.image}).pipe(take(1)).subscribe(
    //       (r) => {
    //         console.log('got r', r)
    //       }
    //   )
    // }

    var reader = new FileReader();
    reader.onloadend = (e) => {
      const base64: string = e!.target!.result as string
        var imageElem = new Image();
        imageElem.src = base64 as string;
        document.body.appendChild(imageElem);
      const httpOptions = {
        headers: new HttpHeaders({
          'Access-Control-Allow-Origin':'*',
          'Content-Length': '40000'
        })
      };
        this.http.post(path, {data: base64.replace("data:image/png;base64,", '')}).pipe(take(1)).subscribe(
            (r) => {
              console.log('got r', r)
            })
    }
    reader.readAsDataURL(files[0]);

  }
}
