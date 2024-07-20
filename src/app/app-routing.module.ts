import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RoomListComponent } from './components/room-list/room-list.component'
import { BookingFormComponent } from './components/booking-form/booking-form.component';
 
const routes: Routes = [
  {path: '', component: RoomListComponent},
  {path: 'book', component: BookingFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
