import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'lib-buildable-lib1-example',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './lib1-example.component.html',
  styleUrls: ['./lib1-example.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Lib1ExampleComponent {}
