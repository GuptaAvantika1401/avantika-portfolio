import { Component, Inject, PLATFORM_ID, AfterViewInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import emailjs from 'emailjs-com';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements AfterViewInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  sendEmail(form: NgForm) {
    if (form.invalid) {
      this.showToast('⚠️ Please fill all required fields.', 'error');
      return;
    }

    const serviceID = 'service_qz9y06g';
    const contactTemplate = 'template_wdqdocv';
    const autoReplyTemplate = 'template_m8h84d8';
    const publicKey = 'rehiaVgD9M5f6BVjO';

    // Step 1: Send message to admin
    emailjs.send(serviceID, contactTemplate, {
      from_name: form.value.from_name,
      from_email: form.value.from_email,
      title: form.value.title,
      message: form.value.message,
      time: new Date().toLocaleString()
    }, publicKey)
    .then(() => {
      console.log('✅ Message sent to admin!');
      // Step 2: Auto-reply to user
      return emailjs.send(serviceID, autoReplyTemplate, {
        to_name: form.value.from_name,
        from_email: form.value.from_email,
        title: form.value.title
      }, publicKey);
    })
    .then(() => {
      console.log('✅ Auto-reply sent to user!');
      this.showToast('✅ Your message has been sent successfully!', 'success');
      form.reset();
    })
    .catch((error) => {
      console.error('❌ EmailJS FAILED...', error);
      this.showToast('❌ Failed to send message. Please try again later.', 'error');
    });
  }

  showToast(message: string, type: 'success' | 'error' = 'success') {
    if (typeof document !== 'undefined') {
      let container = document.body.querySelector('.toast-container') as HTMLElement;
      if (!container) {
        container = document.createElement('div');
        container.className = 'toast-container';
        document.body.appendChild(container);
      }

      const toast = document.createElement('div');
      toast.textContent = message;
      toast.className = `custom-toast ${type}`;
      container.appendChild(toast);

      setTimeout(() => toast.classList.add('show'), 50);
      setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
      }, 3500);
    }
  }

  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      const card = document.querySelector('.contact-card');
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              card?.classList.add('visible');
            }
          });
        },
        { threshold: 0.3 }
      );
      if (card) observer.observe(card);
    }
  }
}
