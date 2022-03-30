import { Component, OnInit ,ViewChild,ElementRef} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild('name') nameKey!:ElementRef
  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  statquiz(){
    localStorage.setItem("name",this.nameKey.nativeElement.value)
    this.route.navigate(['question'])
  }
  onSubmit(f: NgForm) {
    console.log(f.value);
    console.log(f.valid);
  }

}
