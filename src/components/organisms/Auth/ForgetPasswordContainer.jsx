import { useState } from 'react';

import { useForgetPassword } from '@/hooks/apis/auth/useForgetPassword';

import { ForgetPasswordCard } from './ForgetPasswordCard';

export const ForgetPasswordContainer = () => {
  const { forgetPasswordMutation, isPending, error } = useForgetPassword();

  const [email, setEmail] = useState('');

  const [validationError, setValidationError] = useState(null);

  async function onForgetPasswordFormSubmit(e) {
    e.preventDefault();

    if (!email) {
      setValidationError({ message: 'Email is required' });
      return;
    }

    setValidationError(null);

    await forgetPasswordMutation({ email });
    setEmail('');
    
  }

  return (
    <ForgetPasswordCard 
    error={error}
    email={email}
    setEmail={setEmail}
    validationError={validationError}
    isPending={isPending}
    onForgetPasswordFormSubmit={onForgetPasswordFormSubmit}
    />
  );
};