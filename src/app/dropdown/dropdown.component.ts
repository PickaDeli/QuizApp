import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  standalone: true, // Jos käytät standalone-komponenttia
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})
export class DropdownComponent {
  isDropdownOpen = false;

  toggleDropdown(event: Event) {
    event.stopPropagation(); // Estää sulkeutumisen heti klikkauksessa
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  @HostListener('document:click', ['$event'])
  closeDropdown(event: Event) {
    if (!event.target || !(event.target as HTMLElement).closest('.dropdown')) {
      this.isDropdownOpen = false;
    }
  }
}
