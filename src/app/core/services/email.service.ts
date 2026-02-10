import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, from, catchError, map, switchMap, throwError } from 'rxjs';

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

export interface EmailResponse {
  success: boolean;
  message: string;
  error?: string;
}

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  private readonly http = inject(HttpClient);
  private functionUrl: string | null = null;

  constructor() {
    this.loadFunctionUrl();
  }

  /**
   * Load the Lambda function URL from Amplify outputs
   */
  private async loadFunctionUrl(): Promise<void> {
    try {
      const response = await fetch('/amplify_outputs.json');
      if (response.ok) {
        const outputs = await response.json();
        this.functionUrl = outputs.custom?.sendEmailFunctionUrl ?? null;
      }
    } catch {
      console.warn('Could not load amplify_outputs.json');
    }
  }

  /**
   * Ensure the function URL is loaded before making requests
   */
  private async ensureFunctionUrl(): Promise<string> {
    if (!this.functionUrl) {
      await this.loadFunctionUrl();
    }

    if (!this.functionUrl) {
      throw new Error('Service email non configuré');
    }

    return this.functionUrl;
  }

  /**
   * Send contact form data to the backend
   */
  sendContactEmail(formData: ContactFormData): Observable<EmailResponse> {
    return from(this.ensureFunctionUrl()).pipe(
      switchMap(url => this.http.post<EmailResponse>(url, formData)),
      map(response => ({
        success: true,
        message: response.message || 'Message envoyé avec succès'
      })),
      catchError((error: HttpErrorResponse) => {
        console.error('Email sending error:', error);
        return throwError(() => ({
          success: false,
          message: error.error?.error || 'Une erreur est survenue lors de l\'envoi',
          error: error.message
        }));
      })
    );
  }
}
