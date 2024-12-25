import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationbarComponent } from 'src/app/common/navigationbar/navigationbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, NavigationbarComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

}
