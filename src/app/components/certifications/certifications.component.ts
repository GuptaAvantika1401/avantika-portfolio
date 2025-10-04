import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { trigger, transition, style, animate, query, stagger } from '@angular/animations';
@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './certifications.component.html',
  styleUrl: './certifications.component.css',
   animations: [
    trigger('listAnimation', [
      transition(':enter', [
        query('li', [
          style({ opacity: 0, transform: 'translateY(20px)' }),
          stagger(150, [
            animate('600ms ease-out', style({ opacity: 1, transform: 'translateY(0)' }))
          ])
        ], { optional: true })
      ])
    ])
  ]
})
export class CertificationsComponent {
   achievements = [
    'Awarded Team Appreciation Award for delivering consistent results over time.',
    'Solved 500+ competitive programming problems, demonstrating problem-solving skills.',
    'Microsoft Azure AI Fundamentals - AI-102',
    'AZ-204: Azure App Service Web Apps',
    'SQL (Intermediate) - HackerRank',
    'ScholarHat Angular & SQL Server Certification',
    'Member of Toastmasters Club'
  ];

}
