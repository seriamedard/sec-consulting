import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import {
  PageHeroComponent,
  ButtonComponent
} from '../../shared/components';

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
  contactForm: FormGroup;
  isSubmitting = signal(false);
  isSubmitted = signal(false);

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

  constructor(private fb: FormBuilder) {
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
      
      // Simulate API call
      setTimeout(() => {
        this.isSubmitting.set(false);
        this.isSubmitted.set(true);
        this.contactForm.reset();
      }, 1500);
    } else {
      // Mark all fields as touched to show validation errors
      Object.keys(this.contactForm.controls).forEach(key => {
        this.contactForm.get(key)?.markAsTouched();
      });
    }
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
