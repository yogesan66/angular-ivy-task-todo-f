import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
[x: string]: any;
  name = 'Angular ' + VERSION.major;

  regular_tasks :Array<any> = [
    {
      task_name:"Office Scripts",
      done:false
    },
    {
      task_name:"Power Query",
      done:false
    },
    {
      task_name:"Pivot Tables",
      done:false
    },
    {
      task_name:"Power Pivot",
      done:false
    },
    {
      task_name:"Power BI",
      done:false
    }
  ]

   outstanding_tasks :Array<any> = ["Office Scripts","Power Query","Pivot Tables","Power Pivot","Power BI"]

  demo :Array<any> = ["Office Scripts","Power Query","Pivot Tables","Power Pivot","Power BI"]

  
// done :Boolean = false;
  // ischecked :Boolean;
  // checked :boolean;

  // on(i: any){
    //    this.done =!this.done;
    //   if(this.done == true){
    // // i = 0
    //  this.outstanding_tasks.splice(i,1);

    // console.log(i);
    // console.log(this.done)
   
    //  }
    //    else if(this.done == false){
    //       this.outstanding_tasks.splice(i,0,this.demo[i])
    //       console.log(this.done)
         
    //    }
    // if(ischecked){
    //   console.log("checked")
    // }
//}

 ischecked = false ;
new_array:Array<any> = []
new_tasks:Array<any> = []
onchange(i,e){
  // function notdone(element: any){
  //     return (element == this.checked) 
  // }
   if(e.target.checked == true){
    //  this.outstanding_tasks.splice(i,1);
    // this.new_array = this.regular_tasks.filter((val)=>{
    //   // return val != this.regular_tasks[i]
    //   return val != this.ischecked
  //  this.outstanding_tasks = this.regular_tasks.filter(notdone);

    // this.new_tasks = this.regular_tasks.filter((val)=>{
    // return val  == this.regular_tasks[i].ischecked;
    this.outstanding_tasks.splice(this.outstanding_tasks.indexOf(this.demo[i]),1);
  }
    else{
     this.outstanding_tasks.splice(i,0,this.demo[i])
  
   
    }
}

}