import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {

  title = "Grocery List";

items = [
  {
  name: "Milk",
  quantity: 2
  },
  
  {
    name: "Bacon",
    quantity: 3 
},
    
{
  name: "Whey Protein",
  quantity: 1
},

{
  name: "Eggs",
  quantity: 2 
},

{
  name: "Bread",
  quantity: 2
}
  
];

constructor(private toastCtrl: ToastController) {

}

ngOnInit() {
}

async removeItem(item) {
  console.log("Removing ", item);
  const toast = await this.toastCtrl.create({
    message: 'Removing ' + item.name,
    duration: 3000,
    position: 'top'
  });

  toast.present();
}


}