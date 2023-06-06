import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

import { Lib1ExampleComponent } from 'libs/lib-buildable/src/lib/lib1-example/lib1-example.component';

@Component({
  selector: 'app1-example1',
  standalone: true,
  imports: [CommonModule, Lib1ExampleComponent],
  templateUrl: './example1.component.html',
  styleUrls: ['./example1.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Example1Component {
  @Input() disabled?: boolean;
  @Input({ required: true }) value!: string;
}
