import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  constructor(private http:HttpClient) { }

  sendDataAfterExercise(data:any){
    return this.http.post("http://127.0.0.1:3000/exercise",data)
  }
  getDataExercise(){
    return this.http.get<any[]>("http://127.0.0.1:3000/exercise");
  }
}
