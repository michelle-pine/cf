import { Injectable } from '@angular/core';

@Injectable()
export class WeeklyChallengeService {
  public selectedChallenge;
  public challenges = [
    {
      name: "Freeweight Frenzy",
      description: "Increase your strength levels with a guided freeweight workout!",
      image: "https://images.pexels.com/photos/39671/physiotherapy-weight-training-dumbbell-exercise-balls-39671.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      attachments: {
        video:true,
        link:"https://www.youtube.com/embed/U0bhE67HuDY"
      },
      duration: 30
    },
    {
      name: "Rapid Running",
      description: "Let's go for a short but speedy run down the street and back!",
      image: "https://images.pexels.com/photos/235922/pexels-photo-235922.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      attachments: {
        video:false,
        link: "/assets/pat/images/examplePDF.pdf"
      },
      duration: 30
    },
    {
      name: "Serene Stretching",
      description: "Increase your flexibility with a series of relaxing stretches!",
      image: "https://images.pexels.com/photos/634030/pexels-photo-634030.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      attachments: {
        video:false,
        link: "/assets/pat/images/examplePDF.pdf"
      },
      duration: 20
    }
  ]

  constructor() { }

  getSelected() {
    return this.selectedChallenge;
  }

  setSelected(challenge) {
    this.selectedChallenge = challenge; 
  }


}

