import { useFormAction } from 'react-router-dom';

import { useForgetPassword } from '@/hooks/apis/auth/useForgetPassword';
import { useToast } from '@/hooks/use-toast';

export const ForgetPasswordContainer = () => {
    const { register, handleSubmit } = useFormAction();
    const { isPending, isSuccess, error, forgotPasswordMutation } = useForgetPassword();
    const { toast } = useToast();
  
    const onSubmit = async (data) => {
      try {
        await forgotPasswordMutation(data);
      } catch (error) {
        console.log('Failed to send email', error);
        toast({
          title: 'Failed to send email',
          message: error.message,
          type: 'error',
          variant: 'destructive'
        });
      }
    };
  
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <input type='email' name='email' ref={register} />
        <button type='submit' disabled={isPending}>Submit</button>
        {isSuccess && <p>Email sent successfully</p>}
        {error && <p>{error.message}</p>}
      </form>
    );
};