import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  PageHeroComponent,
  ButtonComponent
} from '../../shared/components';
import { EmailService } from '../../core/services/email.service';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PageHeroComponent,
    ButtonComponent
  ],
  templateUrl: './contact.component.html'
})
export class ContactComponent {
  private fb = inject(FormBuilder);
  private emailService = inject(EmailService);

  contactForm: FormGroup;
  isSubmitting = signal(false);
  isSubmitted = signal(false);
  submitError = signal<string | null>(null);

  serviceOptions = [
    'Audit',
    'Expertise comptable',
    'Fiscalité',
    'Conseil & stratégie',
    'Digitalisation',
    'Formation'
  ];

  contactInfo = [
    {
      icon: 'location',
      title: 'Adresse',
      text: 'N\'Djamena, Tchad',
      accentColor: 'primary'
    },
    {
      icon: 'phone',
      title: 'Téléphone',
      text: '+235 XX XX XX XX',
      accentColor: 'primary'
    },
    {
      icon: 'email',
      title: 'Email',
      text: 'contact@sec-consulting.org',
      accentColor: 'primary'
    }
  ];

  constructor() {
    this.contactForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      phone: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      service: ['', [Validators.required]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting.set(true);
      this.submitError.set(null);

      const formData = this.contactForm.value;

      this.emailService.sendContactEmail(formData).subscribe({
        next: (response) => {
          this.isSubmitting.set(false);
          this.isSubmitted.set(true);
          this.contactForm.reset();
        },
        error: (error) => {
          this.isSubmitting.set(false);
          this.submitError.set(
            error.message || 'Une erreur est survenue. Veuillez réessayer.'
          );
        }
      });
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
    }
  }

  resetForm() {
    this.isSubmitted.set(false);
    this.submitError.set(null);
  }

  getFieldError(fieldName: string): string {
    const control = this.contactForm.get(fieldName);
    if (control?.touched && control?.errors) {
      if (control.errors['required']) return 'Ce champ est requis';
      if (control.errors['email']) return 'Email invalide';
      if (control.errors['minlength']) return `Minimum ${control.errors['minlength'].requiredLength} caractères`;
    }
    return '';
  }
}
