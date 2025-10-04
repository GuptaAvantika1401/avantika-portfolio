import { Component, OnInit, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit, AfterViewInit {
  fullText: string = `I am a Full Stack Developer with 3+ years of experience in both frontend and backend development. Proficient in .NET technologies like ASP.NET Web API and C#, along with Angular, HTML, CSS, and JavaScript. Strong expertise in database management using SQL Server, Entity Framework, and LINQ. Passionate about creating high-performance applications and collaborating with teams to deliver seamless user experiences.`;

  typedText: string = '';
  index: number = 0;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    this.typeText();
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const section = document.querySelector('.about-section');
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              section?.classList.add('in-view');
            } else {
              section?.classList.remove('in-view'); // repeat animation
            }
          });
        },
        { threshold: 0.2 }
      );
      if (section) observer.observe(section);
    }
  }

  typeText(): void {
    if (this.index < this.fullText.length) {
      this.typedText += this.fullText.charAt(this.index);
      this.index++;
      setTimeout(() => this.typeText(), 20);
    }
  }
}
