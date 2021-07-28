import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { CardModule } from 'primeng/card';
import { DashboardComponent } from './dashboard.component';
import { ProvidersComponent } from './providers/providers.component';
import { SupplierProvidersComponent } from './supplier-providers/supplier-providers.component';
import { AlertComponent } from './alert/alert.component';
import { HubScoreComponent } from './hub-score/hub-score.component';
import { InsightsComponent } from './insights/insights.component';
import { YourScoreComponent } from './your-score/your-score.component';
import { CriticalSupplierPerformanceComponent } from './critical-supplier-performance/critical-supplier-performance.component';
import { NgxEchartsModule } from 'ngx-echarts';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { SupplierRiskComponent } from './supplier-risk/supplier-risk.component';
import { NgApexchartsModule } from "ng-apexcharts";
import { ThirdScoreAverageComponent } from './third-score-average/third-score-average.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ProvidersComponent,
    SupplierProvidersComponent,
    AlertComponent,
    HubScoreComponent,
    InsightsComponent,
    YourScoreComponent,
    CriticalSupplierPerformanceComponent,
    EvaluationComponent,
    SupplierRiskComponent,
    ThirdScoreAverageComponent
  ],
  imports: [
    CommonModule,
    CardModule,
    NgCircleProgressModule,
    NgxEchartsModule,
    NgApexchartsModule
  ]
})
export class DashboardModule { }
