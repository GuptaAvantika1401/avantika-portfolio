import { Injectable } from '@angular/core';
import emailjs from 'emailjs-com';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private serviceId = 'YOUR_SERVICE_ID';
  private templateId = 'YOUR_TEMPLATE_ID';
  private publicKey = 'YOUR_PUBLIC_KEY';

  constructor() {
    emailjs.init(this.publicKey);
  }

  sendEmail(formData: any): Promise<any> {
    return emailjs.send(this.serviceId, this.templateId, formData);
  }
}
