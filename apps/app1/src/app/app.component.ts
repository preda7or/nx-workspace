import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Example1Component } from './components/example1/example1.component';

@Component({
  selector: 'app1-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [Example1Component],
})
export class AppComponent {
  title = 'app1';
}
