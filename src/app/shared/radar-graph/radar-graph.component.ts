import { Component, OnInit } from "@angular/core";

@Component({
  selector: "radar-graph",
  templateUrl: "./radar-graph.component.html",
  styleUrls: ["./radar-graph.component.scss"]
})
export class RadarGraphComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  // Radar
  public radarChartLabels: string[] = [
    "Aerobic",
    "Strength",
    "Flexibility",
    "Sparks"
  ];

  public radarChartData: any = [
    { data: [12, 19, 3, 5], label: "Current" },
    { data: [3, 5, 7, 11], label: "Stating" }
  ];

  public options = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: true,
      position: "bottom"
    },
  };
  public radarChartType: string = "radar";

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }
}
