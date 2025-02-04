import { TriangleAlert } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

export const ForgetPasswordCard = ({
    error,
    email,
    setEmail,
    validationError,
    isPending,
    onForgetPasswordFormSubmit,
    }) => {
    return (
        <Card>
        <CardHeader>
            <CardTitle>Forget Password</CardTitle>
            <CardDescription>Enter your email to reset password</CardDescription>
            {validationError && (
            <div className="bg-destructive/15 p-4 rounded-md flex items-center gap-x-2 text-sm text-destructive mb-6">
                <TriangleAlert className="size-5" />
                <p>{validationError.message}</p>
            </div>
            )}
            {error && (
            <div className="bg-destructive/15 p-4 rounded-md flex items-center gap-x-2 text-sm text-destructive mb-6">
                <TriangleAlert className="size-5" />
                <p>{error}</p>
            </div>
            )}
        </CardHeader>
        <CardContent>
            <form className="space-y-3" onSubmit={onForgetPasswordFormSubmit}>
            <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail( e.target.value )}
            />
            <Button
                disabled={isPending}
                size="lg"
                type="submit"
                className="w-full"
            >
                {isPending ? 'Sending...' : 'Forget Password'}
            </Button>
            </form>
        </CardContent>
        </Card>
    );
};