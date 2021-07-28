import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { TabViewModule } from 'primeng/tabview';
import { TimelineModule } from 'primeng/timeline';
import { CompanyFormComponent } from './company-form/company-form.component';
import { CompanyNameComponent } from './company-name/company-name.component';
import { EvaluationComponent } from './evaluation.component';
import { QuestionnairesComponent } from './questionnaires/questionnaires.component';
import { TimelineComponent } from './timeline/timeline.component';

@NgModule({
  declarations: [
    EvaluationComponent,
    TimelineComponent,
    CompanyNameComponent,
    CompanyFormComponent,
    QuestionnairesComponent
  ],
  imports: [
    CommonModule,
    TimelineModule,
    CardModule,
    TabViewModule,
    TableModule
  ]
})
export class EvaluationModule { }
