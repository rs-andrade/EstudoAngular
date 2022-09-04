import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basics';
  name = 'rodrigo andrade;'
  imgURL = 'https://avatars.githubusercontent.com/u/13204228?s=48&v=4';
  images = [
    'https://picsum.photos/200/300',
    'https://picsum.photos/300/300',
    'https://picsum.photos/400/300'
  ]
  currentDate = new Date()
  cost = 2000
  temperature = 25.3
  pizza = {
    toppings: ['pepperoni', 'bacon'],
    size: 'large'
  }
  blueClass = false
  fontSize = 16

  getName(){
    return this.name;
  }

  changeImage(e: KeyboardEvent){
    this.imgURL = (e.target as HTMLInputElement).value
  }

  logImg(event: string){
    console.log(event)

  }
}
