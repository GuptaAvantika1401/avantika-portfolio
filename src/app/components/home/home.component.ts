import { Component } from '@angular/core';
import { Directive, ElementRef, HostListener } from '@angular/core';
import { NavbarComponent } from '../../navbar/navbar.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    constructor(private el: ElementRef) {}

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent) {
    const rect = this.el.nativeElement.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    this.el.nativeElement.style.transform = `rotateY(${x / 25}deg) rotateX(${-y / 25}deg)`;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.el.nativeElement.style.transform = 'rotateY(0deg) rotateX(0deg)';
  }
}

