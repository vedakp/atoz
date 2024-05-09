import { Component } from '@angular/core';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  searchedLetter = "";
  alphabetArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

  constructor(){
    
  }

  startSearch(){
    var interval = setInterval(()=>{
      this.searchedLetter = this.alphabetArray[(Math.floor(Math.random() * this.alphabetArray.length))]
      console.log("Interval Called");
    },200)

    setTimeout(()=>{
      clearInterval(interval);
    },5000)
    
  }

  
}
