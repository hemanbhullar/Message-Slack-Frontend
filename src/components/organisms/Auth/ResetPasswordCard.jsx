import {TriangleAlert } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';

export const ResetPasswordCard = ({
  error,
  isPending,
  resetPasswordForm,
  setResetPasswordForm,
  validationError,
  onResetPasswordFormSubmit,
}) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Reset Password</CardTitle>
        <CardDescription>Enter your new password</CardDescription>
        {validationError && (
          <div className="bg-destructive/15 p-4 rounded-md flex items-center gap-x-2 text-sm text-destructive mb-6">
            <TriangleAlert className="size-5" />
            <p>{validationError.message}</p>
          </div>
        )}
        {error && (
          <div className="bg-destructive/15 p-4 rounded-md flex items-center gap-x-2 text-sm text-destructive mb-6">
            <TriangleAlert className="size-5" />
            <p>{error.message}</p>
          </div>
        )}
      </CardHeader>
      <CardContent>
        <form className="space-y-3" onSubmit={onResetPasswordFormSubmit}>
          <Input
            type="password"
            placeholder="Enter new password"
            value={resetPasswordForm.password}
            onChange={(e) => setResetPasswordForm({ password: e.target.value })}
          />
          <Button
            disabled={isPending}
            size="lg"
            type="submit"
            className="w-full"
          >
            Reset Password
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};
