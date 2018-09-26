import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import { ChartsModule } from 'ng2-charts';



import { SidebarMenuComponent } from './pat-sidebar-menu/pat-sidebar-menu.component';
import { PatMenuTopComponent } from './pat-menu-top/pat-menu-top.component';
import { PatCalendarBottomComponent } from './pat-calendar-bottom/pat-calendar-bottom.component';
 
import { PatHomeComponent } from './pat-home/pat-home.component';
import { ProfileComponent } from './profile/profile.component';
import { WorkoutComponent } from './workout/workout.component';
import { ProgressComponent } from './progress/progress.component';
import { TrophiesComponent } from './trophies/trophies.component';
import { VirtualTrainerComponent } from './virtual-trainer/virtual-trainer.component';
import { JokesQuotesComponent } from './jokes-quotes/jokes-quotes.component';
import { WorkoutTypeComponent } from './data-entry/workout-type/workout-type.component';
import { DateService } from './pat-calendar-bottom/services/date-service.service';
import { SelectActivityComponent } from './data-entry/select-activity/select-activity.component';
import { DateFormComponent } from './data-entry/date-form/date-form.component';
import { WeeklyEntryComponent } from './data-entry/weekly-entry/weekly-entry.component';
import { DailyEntryComponent } from './data-entry/daily-entry/daily-entry.component';
import { WorkoutHistoryComponent } from './data-entry/workout-history/workout-history.component';
import { StatisticsComponent } from './progress/statistics/statistics.component';
import { EarnedTrophiesComponent } from './trophies/earned-trophies/earned-trophies.component';
import { InProgressTrophiesComponent } from './trophies/in-progress-trophies/in-progress-trophies.component';
import { LockedTrophiesComponent } from './trophies/locked-trophies/locked-trophies.component';
import { VideoWorkoutComponent } from './video-workout/video-workout.component';
import { StartEntryComponent } from './data-entry/start-entry/start-entry.component';
import { NouisliderModule } from 'ng2-nouislider';
import { SmileyLeftComponent } from './data-entry/smiley-left/smiley-left.component';
import { SmileyRightComponent } from './data-entry/smiley-right/smiley-right.component';


import { WeeklyChallengeComponent } from './virtual-trainer/weekly-challenge/weekly-challenge.component';
import { WeeklyChallengeService } from './virtual-trainer/weekly-challenge/weekly-challenge.service';
import { ChallengeListComponent } from './virtual-trainer/challenge-list/challenge-list.component';
import { AppComponent } from './app.component';
import { RadarGraphComponent } from './shared/radar-graph/radar-graph.component';



@NgModule({
  declarations: [
    AppComponent,
    SidebarMenuComponent,
    ProfileComponent,
    WorkoutComponent,
    ProgressComponent,
    TrophiesComponent,
    VirtualTrainerComponent,
    JokesQuotesComponent,
    PatHomeComponent,
    PatMenuTopComponent,
    PatCalendarBottomComponent,
    WorkoutTypeComponent,
    SelectActivityComponent,
    DateFormComponent,
    WeeklyEntryComponent,
    DailyEntryComponent,
    WorkoutHistoryComponent,
    StatisticsComponent,
    EarnedTrophiesComponent,
    InProgressTrophiesComponent,
    LockedTrophiesComponent,
    VideoWorkoutComponent,
    StartEntryComponent,
    SmileyLeftComponent,
    SmileyRightComponent,
    WeeklyChallengeComponent,
    ChallengeListComponent,
    RadarGraphComponent

    
  ],
  imports: [
    BrowserModule,
    
    RouterModule.forRoot([
      { path: 'home', component: PatHomeComponent },
      { path: 'myprofile', component: ProfileComponent },
      { path: 'workout', component: WorkoutComponent },
      { path: 'progress', component: ProgressComponent },
      { path: 'trophies', component: TrophiesComponent },
      { path: 'weekly-challenges', component: VirtualTrainerComponent },
      { path: 'weekly-challenges/selected-challenge', component: WeeklyChallengeComponent },
      { path: 'jokes', component: JokesQuotesComponent },
      { path: 'workout/workout-type', component: WorkoutTypeComponent },
      { path: 'workout/start-entry', component: StartEntryComponent },
      { path: 'workout/select-activity', component: SelectActivityComponent },
      { path: 'workout/weekly-entry', component: WeeklyEntryComponent },
      { path: 'workout/daily-entry', component: DailyEntryComponent },
      { path: 'workout/workout-history', component: WorkoutHistoryComponent },
      { path: 'progress/statistics', component: StatisticsComponent },
      { path: 'trophies/earned-trophies', component: EarnedTrophiesComponent },
      { path: 'trophies/in-progress-trophies', component: InProgressTrophiesComponent },
      { path: 'trophies/locked-trophies', component: LockedTrophiesComponent },
      { path: 'workout/video-workout', component: VideoWorkoutComponent },
      { path: '', pathMatch: 'full', component: PatHomeComponent },
      { path: '**', pathMatch: 'full', component: PatHomeComponent } //will put page not found component later on
    ]),
    FormsModule,
    NouisliderModule,
    AngularMultiSelectModule,
    ChartsModule

  ],
  providers: [DateService, WeeklyChallengeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
