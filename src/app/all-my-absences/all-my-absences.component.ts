import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-all-my-absences',
  templateUrl: './all-my-absences.component.html',
  styleUrls: ['./all-my-absences.component.css']
})
export class AllMyAbsencesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  nouvelleAbsence(){
    console.log("dentro nouvelleAbsence()");
    return "hello Absence";
  }
}
