import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IonRouterOutlet, LoadingController, ModalController } from '@ionic/angular';
import { HalfmodalPage } from '../halfmodal/halfmodal.page';
import { ModalMenuPage } from '../modal-menu/modal-menu.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  basketballs: any;
  constructor(
    private router: Router,
    private loadingController: LoadingController,
    private modalController: ModalController,
    private routerOutlet: IonRouterOutlet
  ) {
    this.basketballs = [
      {
        "id": 1,
        "title": "Layups",
        "description": "Lay-ups are the backbone of any team offense and every player's offensive repertoire. Without the threat of a lay-up, all other shots would become next to impossible if you knew that lay-ups were not allowed? What offense, what screens would be set, what dribble or one – on – one move would you make if you could not take a lay-up?",
        "imageUrl": '../assets/resources/layups.jpg'
      },
      {
        "id": 2,
        "title": "Shooting",
        "description": "Shooting the basketball is the MOST important skill for you master. That's why we developed this comprehensive basketball shooting resource for both players and coaches.",
        "imageUrl": '../assets/resources/shooting.jpg'
      },
      {
        "id": 3,
        "title": "Foul Shooting",
        "description": "It is almost impossible to overemphasize the importance of free throws, both to teams and to players. If you have a player who can make just 4 baskets per game and add 4 free throws to his total, you have a double-figure scorer. Adding fifteen points from the free throw line to your team's total would create a very difficult obstacle for you opponents to overcome.",
        "imageUrl": '../assets/resources/foul_shooting.jpg'
      },
      {
        "id": 4,
        "title": "Passing",
        "description": "Basketball is a team game. By definition, that means all players are involved with the process of playing the game and should function as one. One of the primary skills created to accomplish this is passing. Yet, passing remains one of the most under-taught, under-emphasized, and under drilled skill in the game!!",
        "imageUrl": '../assets/resources/pass.png'
      },
      {
        "id": 5,
        "title": "Dribbling",
        "description": "Most coaches use dribbling and ball handling interchangeably. Though they are linked, the 2 skills are definitely separate. Dribbling and controlling the ball is a skill that can be practiced alone and is separate from the other ball skills on the court. Ball handling, however, involves knowledge of the game and integrates dribbling, passing and decision-making.",
        "imageUrl": '../assets/resources/dribbling.jpg'
      },
      {
        "id": 6,
        "title": "Jump Stop",
        "description": "You might find this hard to believe, but if done properly, the Jump Stop Drill can make a huge difference in your players performance, both young and old. This is an absolutely critical drill to player development. My old high school coach (who is a now a very successful college coach) made us do a variation of the jump stop drill every single day.",
        "imageUrl": '../assets/resources/jumpstop.jpg'
      },
      {
        "id": 7,
        "title": "Jab steps",
        "description": "Individual offense is often called one-on-one basketball moves. I prefer to call it individual offense due to the fact that basketball is a team game. In teaching players individual basketball moves, often the wrong message can be sent. Players get mixed messages when they come to practice after a summer of working on individual skills and we ask them to integrate those skills into a team concept.",
        "imageUrl": '../assets/resources/jabsteps.jpg'
      },
      {
        "id": 8,
        "title": "Defense",
        "description": "Stay on your feet and do NOT go for shot fakes. When you go for fakes, you are beat, Do not lunge for the ball and get off balance, Stay in a WIDE stance. If your feet get too close together, you will lose balance, Stay in a LOW and athletic stance. If you stand upright, you will more easily lose balance, Take short steps when sliding. If your feet come too close together, you will lose balance.  ",
        "imageUrl": '../assets/resources/defense.png'
      },
      {
        "id": 9,
        "title": "Rebounding",
        "description": "Few statistics influence the outcome of the game as do rebounding stats. Few statistics are indicators of as many things as are rebounding stats. Few actions affect more parts of the game as rebounding. Rebounding can be an indicator of how hard you are playing, team focus, how well you are shooting, etc. The other benefits are rewards for playing good defense by getting the ball off the defensive glass and lay-ups for grabbing offensive rebounds. Both situation feed your confidence and allow you to play better.",
        "imageUrl": '../assets/resources/rebounding.jpg'
      }
    ]
  
  }

 
  filterData(event: any) {
    this.basketballs = [
      {
        "id": 1,
        "title": "Layups",
        "description": "Lay-ups are the backbone of any team offense and every player's offensive repertoire. Without the threat of a lay-up, all other shots would become next to impossible if you knew that lay-ups were not allowed? What offense, what screens would be set, what dribble or one – on – one move would you make if you could not take a lay-up?",
        "imageUrl": '../assets/resources/layups.jpg'
      },
      {
        "id": 2,
        "title": "Shooting",
        "description": "Shooting the basketball is the MOST important skill for you master. That's why we developed this comprehensive basketball shooting resource for both players and coaches.",
        "imageUrl": '../assets/resources/shooting.jpg'
      },
      {
        "id": 3,
        "title": "Foul Shooting",
        "description": "It is almost impossible to overemphasize the importance of free throws, both to teams and to players. If you have a player who can make just 4 baskets per game and add 4 free throws to his total, you have a double-figure scorer. Adding fifteen points from the free throw line to your team's total would create a very difficult obstacle for you opponents to overcome.",
        "imageUrl": '../assets/resources/foul_shooting.jpg'
      },
      {
        "id": 4,
        "title": "Passing",
        "description": "Basketball is a team game. By definition, that means all players are involved with the process of playing the game and should function as one. One of the primary skills created to accomplish this is passing. Yet, passing remains one of the most under-taught, under-emphasized, and under drilled skill in the game!!",
        "imageUrl": '../assets/resources/pass.png'
      },
      {
        "id": 5,
        "title": "Dribbling",
        "description": "Most coaches use dribbling and ball handling interchangeably. Though they are linked, the 2 skills are definitely separate. Dribbling and controlling the ball is a skill that can be practiced alone and is separate from the other ball skills on the court. Ball handling, however, involves knowledge of the game and integrates dribbling, passing and decision-making.",
        "imageUrl": '../assets/resources/dribbling.jpg'
      },
      {
        "id": 6,
        "title": "Jump Stop",
        "description": "You might find this hard to believe, but if done properly, the Jump Stop Drill can make a huge difference in your players performance, both young and old. This is an absolutely critical drill to player development. My old high school coach (who is a now a very successful college coach) made us do a variation of the jump stop drill every single day.",
        "imageUrl": '../assets/resources/jumpstop.jpg'
      },
      {
        "id": 7,
        "title": "Jab steps",
        "description": "Individual offense is often called one-on-one basketball moves. I prefer to call it individual offense due to the fact that basketball is a team game. In teaching players individual basketball moves, often the wrong message can be sent. Players get mixed messages when they come to practice after a summer of working on individual skills and we ask them to integrate those skills into a team concept.",
        "imageUrl": '../assets/resources/jabsteps.jpg'
      },
      {
        "id": 8,
        "title": "Defense",
        "description": "Stay on your feet and do NOT go for shot fakes. When you go for fakes, you are beat, Do not lunge for the ball and get off balance, Stay in a WIDE stance. If your feet get too close together, you will lose balance, Stay in a LOW and athletic stance. If you stand upright, you will more easily lose balance, Take short steps when sliding. If your feet come too close together, you will lose balance.  ",
        "imageUrl": '../assets/resources/defense.png'
      },
      {
        "id": 9,
        "title": "Rebounding",
        "description": "Few statistics influence the outcome of the game as do rebounding stats. Few statistics are indicators of as many things as are rebounding stats. Few actions affect more parts of the game as rebounding. Rebounding can be an indicator of how hard you are playing, team focus, how well you are shooting, etc. The other benefits are rewards for playing good defense by getting the ball off the defensive glass and lay-ups for grabbing offensive rebounds. Both situation feed your confidence and allow you to play better.",
        "imageUrl": '../assets/resources/rebounding.jpg'
      }
    ]

    const val = event.target.value;
    if(val && val.trim() !== '') {
      this.basketballs = this.basketballs.filter((basketball) => {
        return (basketball.title.toLowerCase().indexOf(val.toLowerCase()) >-1);
      })
    }
  }


  async fundamentalsDetails(basketball) {
      const loadbasketball = await this.loadingController.create({
        message:'Please wait...',
        duration: 3000
      })
    await loadbasketball.present().then(()=> {
      this.router.navigate(['/details',
      {
       'id': basketball.id,
       'title': basketball.title,
       'description': basketball.description,
       'imageUrl': basketball.imageUrl
     }
   ])
     console.log(basketball)
    });
   
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: ModalMenuPage,
      cssClass: 'my-custom-class',
      swipeToClose: true,
      presentingElement: this.routerOutlet.nativeEl
    });
    return await modal.present();
  }


async presentHalfModal() {
      const modal = await this.modalController.create({
        component: HalfmodalPage,
        cssClass: 'half-modal'
      });
      return await modal.present();
    }



}
