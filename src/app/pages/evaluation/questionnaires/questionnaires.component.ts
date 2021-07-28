import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questionnaires',
  templateUrl: './questionnaires.component.html',
  styleUrls: ['./questionnaires.component.scss']
})
export class QuestionnairesComponent implements OnInit {

  products = [];
  selectedProducts3 = [];

  constructor() { }

  ngOnInit(): void {
  }

}
