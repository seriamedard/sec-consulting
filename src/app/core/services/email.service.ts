import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, from, catchError, map, switchMap } from 'rxjs';

interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

interface EmailResponse {
  success: boolean;
  message: string;
  error?: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private http = inject(HttpClient);
  private functionUrl: string | null = null;

  constructor() {
    this.loadFunctionUrl();
  }

  private async loadFunctionUrl(): Promise<void> {
    try {
      // Try to load from amplify_outputs.json
      const response = await fetch('/amplify_outputs.json');
      if (response.ok) {
        const outputs = await response.json();
        if (outputs.custom?.sendEmailFunctionUrl) {
          this.functionUrl = outputs.custom.sendEmailFunctionUrl;
          return;
        }
      }
    } catch (e) {
      console.warn('Could not load amplify_outputs.json, using fallback');
    }
    
    // Fallback for local development
    this.functionUrl = 'http://localhost:3000/send-email';
  }

  private async ensureFunctionUrl(): Promise<string> {
    if (!this.functionUrl) {
      await this.loadFunctionUrl();
    }
    
    if (!this.functionUrl) {
      throw new Error('Email function URL not configured');
    }
    
    return this.functionUrl;
  }

  sendContactEmail(formData: ContactFormData): Observable<EmailResponse> {
    return from(this.ensureFunctionUrl()).pipe(
      switchMap(url => 
        this.http.post<EmailResponse>(url, formData)
      ),
      map(response => ({
        success: true,
        message: response.message || 'Message envoyé avec succès'
      })),
      catchError(error => {
        console.error('Email sending error:', error);
        throw {
          success: false,
          message: 'Une erreur est survenue lors de l\'envoi',
          error: error.message
        };
      })
    );
  }
}
