'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { submitNewsletterForm } from '@/lib/hubspot/forms';

const newsletterSchema = z.object({
  email: z.string().email('Invalid email address'),
});

type NewsletterFormData = z.infer<typeof newsletterSchema>;

export default function NewsletterForm() {
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<NewsletterFormData>({
    resolver: zodResolver(newsletterSchema),
  });

  const onSubmit = async (data: NewsletterFormData) => {
    setSubmitStatus('loading');
    setErrorMessage('');

    try {
      await submitNewsletterForm(data);
      setSubmitStatus('success');
      reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus('idle'), 5000);
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Failed to subscribe');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-md">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Subscribe to our newsletter
        </label>
        <div className="flex gap-2">
          <input
            {...register('email')}
            type="email"
            id="email"
            placeholder="Enter your email"
            className="flex-1 rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
          />
          <button
            type="submit"
            disabled={submitStatus === 'loading'}
            className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:bg-gray-400 disabled:cursor-not-allowed"
          >
            {submitStatus === 'loading' ? 'Subscribing...' : 'Subscribe'}
          </button>
        </div>
        {errors.email && (
          <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      {submitStatus === 'success' && (
        <div className="rounded-md bg-green-50 p-3">
          <p className="text-sm text-green-800">
            Thank you for subscribing!
          </p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="rounded-md bg-red-50 p-3">
          <p className="text-sm text-red-800">{errorMessage}</p>
        </div>
      )}
    </form>
  );
}
