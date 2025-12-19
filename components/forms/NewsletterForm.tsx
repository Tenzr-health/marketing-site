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
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 max-w-md mx-auto">
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-white mb-3">
          Subscribe to our newsletter
        </label>
        <div className="flex gap-3">
          <input
            {...register('email')}
            type="email"
            id="email"
            placeholder="Enter your email"
            className="flex-1 rounded-lg border border-primary-400 px-4 py-3 bg-white focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-white transition-colors"
          />
          <button
            type="submit"
            disabled={submitStatus === 'loading'}
            className="inline-flex justify-center rounded-lg border border-transparent bg-white py-3 px-6 text-base font-medium text-primary-500 hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-500 disabled:bg-neutral-200 disabled:cursor-not-allowed transition-colors"
          >
            {submitStatus === 'loading' ? 'Subscribing...' : 'Subscribe'}
          </button>
        </div>
        {errors.email && (
          <p className="mt-2 text-sm text-white">{errors.email.message}</p>
        )}
      </div>

      {submitStatus === 'success' && (
        <div className="rounded-lg bg-primary-400 border border-white p-3">
          <p className="text-sm text-white">
            Thank you for subscribing!
          </p>
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="rounded-lg bg-primary-400 border border-white p-3">
          <p className="text-sm text-white">{errorMessage}</p>
        </div>
      )}
    </form>
  );
}
