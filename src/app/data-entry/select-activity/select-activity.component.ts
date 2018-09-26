import { Component, OnInit } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { DateService } from "../../pat-calendar-bottom/services/date-service.service";

@Component({
  selector: "app-select-activity",
  templateUrl: "./select-activity.component.html",
  styleUrls: ["./select-activity.component.scss"]
})
export class SelectActivityComponent implements OnInit {
  recentSettings = {
    singleSelection: false,
    text: "Select Exercises",
    selectAllText: "Select All",
    unSelectAllText: "UnSelect All",
    enableSearchFilter: true,
    classes: "multiselect",
    groupBy: "category"
  };
  recent = [
    { id: 1, itemName: "Running", category: "Aerobic" },
    { id: 2, itemName: "Elliptical", category: "Aerobic" },
    { id: 3, itemName: "Recumbent Bike", category: "Aerobic" },
    { id: 4, itemName: "Weightlifting", category: "Strength" },
    { id: 5, itemName: "Lunge with Spinal Twist", category: "Flexibility" },
    { id: 6, itemName: "Butterfly Stretch", category: "Flexibility" },
    { id: 7, itemName: "Rowing Machine", category: "Strength" }
  ];
  selectedRecent = [];
  exerciseSettings = {
    singleSelection: false,
    text: "Select Exercises",
    selectAllText: "Select All",
    unSelectAllText: "UnSelect All",
    enableSearchFilter: true,
    classes: "multiselect",
    groupBy: "category"
  };
  exercises = [
    { id: 1, itemName: "Running", category: "Aerobic" },
    { id: 2, itemName: "Elliptical", category: "Aerobic" },
    { id: 3, itemName: "Recumbent Bike", category: "Aerobic" },
    { id: 4, itemName: "Weightlifting", category: "Strength" },
    { id: 5, itemName: "Lunge with Spinal Twist", category: "Flexibility" },
    { id: 6, itemName: "Butterfly Stretch", category: "Flexibility" },
    { id: 7, itemName: "Rowing Machine", category: "Strength" }
  ];
  selectedExercises = [];
  sportsSettings = {
    singleSelection: false,
    text: "Select Exercises",
    selectAllText: "Select All",
    unSelectAllText: "UnSelect All",
    enableSearchFilter: true,
    classes: "multiselect",
  };
  sports = [
    { id: 1, itemName: "Archery"},
    { id: 2, itemName: "Soccer" },
    { id: 3, itemName: "Track" },
    { id: 4, itemName: "Tennis" },
    { id: 5, itemName: "Baseball" },
    { id: 6, itemName: "Football" }
  ];
  selectedSports = [];
  activitiesSettings = {
    singleSelection: false,
    text: "Select Exercises",
    selectAllText: "Select All",
    unSelectAllText: "UnSelect All",
    enableSearchFilter: true,
    classes: "multiselect",
    groupBy: "category"
  };
  activities = [
    { id: 1, itemName: "Cleaning Your Room", category: "Chores" },
    { id: 2, itemName: "Walking to School", category: "Outdoor Fun" },
    { id: 3, itemName: "Sweeping the Floor", category: "Chores" },
    { id: 4, itemName: "Shopping", category: "Daily Movement" },
    { id: 5, itemName: "Going for a Swim", category:"Outdoor Fun" },
    { id: 6, itemName: "Carrying groceries", category:"Chores" },
  ];
  selectedActivities = [];

  constructor() {}

  ngOnInit() {}
}
