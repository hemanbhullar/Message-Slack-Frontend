import { useMutation } from '@tanstack/react-query';

import { forgotPasswordRequest } from '@/apis/auth';
import { useToast } from '@/hooks/use-toast';

export const useForgetPassword = () => {
    const { toast } = useToast();
    const { isPending, isSuccess, error, mutateAsync: forgetPasswordMutation } = useMutation({
        mutationFn: forgotPasswordRequest,
        onSuccess: (data) => {
            console.log('Email sent successfully', data);
            toast({
                title: 'Email sent successfully',
                message: 'Please check your email for further instructions',
                type: 'success'
            });
        },
        onError: (error) => {
            console.log('Failed to send email', error);
            toast({
                title: 'Failed to send email',
                message: error.message,
                type: 'error',
                variant: 'destructive'
            });
        }
    });

    return {
        isPending,
        isSuccess,
        error,
        forgetPasswordMutation
    };
};