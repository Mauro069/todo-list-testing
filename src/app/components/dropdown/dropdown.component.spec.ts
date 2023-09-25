import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { DropdownComponent } from './dropdown.component';
import { Component, Input } from '@angular/core';

@Component({ selector: 'app-arrow', template: '' })
class MockArrowComponent {
  @Input() open: boolean = false;
}

describe('DropdownComponent', () => {
  let component: DropdownComponent;
  let fixture: ComponentFixture<DropdownComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [DropdownComponent, MockArrowComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(DropdownComponent);
    component = fixture.componentInstance;

    component.options = [
      { name: 'Option 1' },
      { name: 'Option 2' },
      { name: 'Option 3' },
    ];
    component.open = true;

    fixture.detectChanges();

    fixture.whenStable().then(() => {
      fixture.detectChanges();
    });
  }));

  it('debería crear el componente', () => {
    expect(component).toBeTruthy();
  });

  it('debería alternar el desplegable', () => {
    expect(component.open).toBe(true);
    component.toggleDropdown();
    expect(component.open).toBe(false);
    component.toggleDropdown();
    expect(component.open).toBe(true);
  });

  it('debería emitir la opción seleccionada', () => {
    const opcion = { name: 'Opción 1' };
    spyOn(component.onSelect, 'emit');
    component.selectOption(opcion);
    expect(component.onSelect.emit).toHaveBeenCalledWith(opcion);
  });

  it('debería renderizar las opciones correctamente', () => {
    const elementosOpcion =
      fixture.nativeElement.querySelectorAll('.options .option');
    console.log(elementosOpcion.length);

    expect(elementosOpcion.length).toBe(3);
  });

  it('debería renderizar las opciones con el texto correcto', () => {
    const elementosOpcion: NodeListOf<HTMLSpanElement> =
      fixture.nativeElement.querySelectorAll('.options .option span');

    expect(elementosOpcion.length).toBe(3);

    const textosOpcion: string[] = Array.from(elementosOpcion).map(
      (elemento: any) => elemento.textContent.trim()
    );

    expect(textosOpcion).toContain('Option 1');
    expect(textosOpcion).toContain('Option 2');
    expect(textosOpcion).toContain('Option 3');
  });
});
