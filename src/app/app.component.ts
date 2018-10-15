import { Component } from '@angular/core';
import { ItemsModule } from './items/items.module';
import { HomeModule } from './home/home.module';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portafolio';
}
