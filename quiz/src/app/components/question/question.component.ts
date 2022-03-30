import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/services/services.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
 public name:any
 public questionList:any =[]
 public points:number=0
 public currentQuestion:number=0
 public correctAnswer:number=0;
 public wrongAnswer:number=0
 isQUizComplete:boolean=false
  constructor(private questionservice:ServicesService) { }

  ngOnInit(): void {
   this.name= localStorage.getItem("name")
    console.log(localStorage.getItem("name"))
    this.getallquestion();
  }
  getallquestion(){
    this.questionservice.getQuestionJson().subscribe((res:any)=>{
      console.log(res.questions)
      this.questionList=res.questions
    })
  }
  nextQuestion(){
    this.currentQuestion++
  }
  reset(){
    window.location.reload()
  }
  priviousQuestion(){
    this.currentQuestion--
  }
  answer(currentQues:number,option:any){
    if(currentQues===this.questionList.length){
   this.isQUizComplete=true;
    }
    if(option.correct)
    {
      setTimeout(() => {
        this.points+=1
        this.correctAnswer++
        this.currentQuestion++
      }, 1000);

    }
    else{
      setTimeout(() => {
        this.wrongAnswer--
        this.currentQuestion++
      }, 1000);

    }
  }

}
