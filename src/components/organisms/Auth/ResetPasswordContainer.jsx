import { useEffect } from 'react';
import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useResetPassword } from '@/hooks/apis/auth/useResetPassword';

import { ResetPasswordCard } from './ResetPasswordCard';

export const ResetPasswordContainer = () => {
    const navigate = useNavigate();
    const { token } = useParams();

    const [resetPasswordForm, setResetPasswordForm] = useState({
        password: ''
    });

    const [validationError, setValidationError] = useState(null);

    const { isPending, isSuccess, error, resetPasswordMutation } = useResetPassword();

    async function onResetPasswordFormSubmit(e) {
        e.preventDefault();
        console.log('Reset password form submitted', resetPasswordForm);

        if(!resetPasswordForm.password) {
            console.error('All fields are required');
            setValidationError({ message: 'All fields are required' });
            return;
        }

        setValidationError(null);

        await resetPasswordMutation({
            password: resetPasswordForm.password,
            token
        });
    }

        useEffect(() => {
            if(isSuccess){
                setTimeout(() => {
                    navigate('/home');
                }, 3000);
            }
        }, [isSuccess, navigate]);

    return (
        <ResetPasswordCard
            error = {error}
            isPending={isPending}
            isSuccess={isSuccess}
            resetPasswordForm={resetPasswordForm}
            setResetPasswordForm={setResetPasswordForm}
            validationError={validationError}
            onResetPasswordFormSubmit={onResetPasswordFormSubmit} 
        />
    );
};