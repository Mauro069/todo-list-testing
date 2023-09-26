import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
})
export class DropdownComponent {
  @Input() placeholder?: string;
  @Input() options: any[] = [];
  @Input() optionSelected: any | null;
  @Output() onSelect: EventEmitter<any> = new EventEmitter<any>();

  public optionsFiltered: any[] = [];

  public open: boolean = false;

  toggleDropdown() {
    this.open = !this.open;
  }

  selectOption(option: any) {
    this.onSelect.emit(option);
    this.open = false;
  }

  ngOnInit() {
    this.optionsFiltered = this.options.filter(
      (option) => option.value !== this.optionSelected.value
    );
  }
}
