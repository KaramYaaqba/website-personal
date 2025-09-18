import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent {
  contactData = { name: '', email: '', message: '' };
  captchaToken: string | null = null;

  onCaptchaResolved(token: any) {
    this.captchaToken = token;
  }

  onSubmit() {
    if (this.captchaToken) {
      const emailDetails = {
        ...this.contactData,
        captchaToken: this.captchaToken,
      };
      // Replace with your email service logic.
      console.log('Sending email:', emailDetails);
      alert('Email sent successfully!');
    } else {
      alert('Please complete the CAPTCHA.');
    }
  }

  downloadResume() {
    const link = document.createElement('a');
    link.href = '/assets/files/resume.pdf'; // Update with the actual path
    link.download = 'Karam_Yaaqba_Resume.pdf';
    link.click();
  }
}