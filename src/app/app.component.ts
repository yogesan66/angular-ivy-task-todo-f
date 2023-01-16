import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;

  regular_tasks :Array<any> = [
    {
      task_name:"running",
      done:false
    },
    {
      task_name:"brushing",
      done:false
    },
    {
      task_name:"eating",
      done:false
    },
    {
      task_name:"playing",
      done:false
    },
    {
      task_name:"sleeping",
      done:false
    }
  ]

  outstanding_tasks :Array<any> = ["running","brushing","eating","playing","sleeping"]
this: any;
  
done :Boolean = false;

  on(i: any){
    // this.done = true;
    // if(this.done == true){
    // i = 0
     this.outstanding_tasks.splice(i,1);
    //this.regular_tasks.splice(i,1);
    console.log(i)
    // this.done = false
    // }
  }
}
