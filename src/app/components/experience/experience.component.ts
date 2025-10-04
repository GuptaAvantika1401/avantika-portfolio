import { Component } from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
  animations: [
    trigger('slideInLeft', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-80px)' }),
        animate('800ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ]),
    trigger('slideInRight', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(80px)' }),
        animate('800ms ease-out', style({ opacity: 1, transform: 'translateX(0)' }))
      ])
    ]),
    trigger('fadeScale', [
      transition(':enter', [
        style({ opacity: 0, transform: 'scale(0.5)' }),
        animate('600ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
      ])
    ])
  ]
})
export class ExperienceComponent {
  orbColors = [
    'bg-gradient-to-r from-pink-500 to-yellow-500',
    'bg-gradient-to-r from-indigo-400 to-purple-500',
    'bg-gradient-to-r from-green-400 to-teal-500',
    'bg-gradient-to-r from-blue-500 to-cyan-500'
  ];

  experiences = [
    {
      company: 'MP Online Ltd',
      duration: 'Mar 2023 – Present',
      description: 'Developed web applications for MP Govt services using ASP.NET Web API and Angular. Secured access using JWT and collaborated across teams.',
      highlights: ['ASP.NET Web API', 'Angular', 'JWT'],
      date: 'Mar 2023'
    },
    {
      company: 'Civica, Vadodara',
      duration: 'Jul 2022 – Jan 2023',
      description: 'Delivered full-stack features using .NET Core Web API and Angular. Enhanced UI components and database performance, deployed apps with Azure.',
      highlights: ['.NET Core Web API', 'Angular', 'Azure'],
      date: 'Jul 2022'
    }
  ];
}
