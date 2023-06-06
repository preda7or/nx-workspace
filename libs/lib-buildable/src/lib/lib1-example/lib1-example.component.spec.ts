import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Lib1ExampleComponent } from './lib1-example.component';

describe('Lib1ExampleComponent', () => {
  let component: Lib1ExampleComponent;
  let fixture: ComponentFixture<Lib1ExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Lib1ExampleComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(Lib1ExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
