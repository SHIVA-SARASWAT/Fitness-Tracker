import { Component } from '@angular/core';
import { ExerciseService } from '../service/exercise.service';

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent {
  timeoutId:any =''
  selectedExercise:string=''
  exerciseStartTime:any;
  date:string = ''
  uncomplete:string ='uncomplete'
  complete:string = 'complete'
  completedExerciseDetails:any[]=[];
  constructor(private exerciseService:ExerciseService){

  }
  ngOnInit(){
    this.getCompletedExerciseDetails();
  }
  contentAfterCompletion:string=''
  isLoading:boolean= false;
  exerciseInProgress:boolean= false;
  selectedExerciseType: 'new' | 'past' = 'new';
  onSelectExercisetype(data: 'new' | 'past'){
    this.selectedExerciseType = data
  }
  getCompletedExerciseDetails(){
    this.exerciseService.getDataExercise().subscribe((response:any)=>{
      this.completedExerciseDetails = response
    })
  }
  onClickStart(){
    this.isLoading = true;
    this.exerciseInProgress = true;
    var startDate = new Date().getTime();
    this.exerciseStartTime = new Date(startDate);
 
        
    this.timeoutId  = setTimeout(()=>{
      this.completeExercise()
    },30000)

    
  }
  completeExercise(){
    this.isLoading = false;
    this.exerciseInProgress = false;

    const exerciseDuration = {
      exercise:this.selectedExercise,
      duration: 30,
      state:this.complete,
      date: this.exerciseStartTime,
      calories:0.1633*30
    }
    
    this.exerciseService.sendDataAfterExercise(exerciseDuration).subscribe((response)=>{
    
      this.contentAfterCompletion = "Record added in past exercises"
      this.getCompletedExerciseDetails()
    })
    
    
  }
  onCancelExercise(){
    clearTimeout(this.timeoutId)
    this.isLoading = false;
    this.exerciseInProgress = false;
    const endTime = new Date().getTime();
    const totalTime = Math.floor((endTime - this.exerciseStartTime)/1000);    
    const exerciseDuration ={
      exercise:this.selectedExercise,
      duration:totalTime,
      state: this.uncomplete,
      date:this.exerciseStartTime,
      calories:0.1633*totalTime
    }
    this.exerciseService.sendDataAfterExercise(exerciseDuration).subscribe((response)=>{
      
      this.contentAfterCompletion = "Record added in past exercises"
      this.getCompletedExerciseDetails()
    })
    

  }

}
