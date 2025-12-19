'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { submitContactForm } from '@/lib/hubspot/forms';

const contactFormSchema = z.object({
  firstname: z.string().min(1, 'First name is required'),
  lastname: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  company: z.string().optional(),
  phone: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactForm() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setSubmitStatus('loading');
    setErrorMessage('');

    try {
      await submitContactForm(data);
      setSubmitStatus('success');
      reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to submit form');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="firstname" className="block text-sm font-medium text-neutral-900 mb-2">
            First Name <span className="text-primary-500">*</span>
          </label>
          <input
            {...register('firstname')}
            type="text"
            id="firstname"
            className="block w-full rounded-lg border border-neutral-200 px-4 py-3 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors"
          />
          {errors.firstname && (
            <p className="mt-1 text-sm text-primary-500">{errors.firstname.message}</p>
          )}
        </div>

        <div>
          <label htmlFor="lastname" className="block text-sm font-medium text-neutral-900 mb-2">
            Last Name <span className="text-primary-500">*</span>
          </label>
          <input
            {...register('lastname')}
            type="text"
            id="lastname"
            className="block w-full rounded-lg border border-neutral-200 px-4 py-3 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors"
          />
          {errors.lastname && (
            <p className="mt-1 text-sm text-primary-500">{errors.lastname.message}</p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-neutral-900 mb-2">
          Email <span className="text-primary-500">*</span>
        </label>
        <input
          {...register('email')}
          type="email"
          id="email"
          className="block w-full rounded-lg border border-neutral-200 px-4 py-3 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-primary-500">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label htmlFor="company" className="block text-sm font-medium text-neutral-900 mb-2">
          Company
        </label>
        <input
          {...register('company')}
          type="text"
          id="company"
          className="block w-full rounded-lg border border-neutral-200 px-4 py-3 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors"
        />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-neutral-900 mb-2">
          Phone
        </label>
        <input
          {...register('phone')}
          type="tel"
          id="phone"
          className="block w-full rounded-lg border border-neutral-200 px-4 py-3 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-neutral-900 mb-2">
          Message <span className="text-primary-500">*</span>
        </label>
        <textarea
          {...register('message')}
          id="message"
          rows={4}
          className="block w-full rounded-lg border border-neutral-200 px-4 py-3 focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-500 transition-colors"
        />
        {errors.message && (
          <p className="mt-1 text-sm text-primary-500">{errors.message.message}</p>
        )}
      </div>

      <div>
        <button
          type="submit"
          disabled={submitStatus === 'loading'}
          className="inline-flex justify-center rounded-full border border-transparent bg-primary-500 py-3 px-8 text-base font-medium text-white hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:bg-neutral-400 disabled:cursor-not-allowed transition-colors"
        >
          {submitStatus === 'loading' ? 'Submitting...' : 'Submit'}
        </button>
      </div>

      {submitStatus === 'success' && (
        <div className="rounded-lg bg-primary-100 border border-primary-300 p-4">
          <p className="text-sm text-neutral-900">
            Thank you! Your message has been submitted successfully.
          </p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="rounded-lg bg-primary-100 border border-primary-300 p-4">
          <p className="text-sm text-neutral-900">{errorMessage}</p>
        </div>
      )}
    </form>
  );
}
