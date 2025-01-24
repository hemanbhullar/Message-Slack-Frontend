import { useNavigate } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const NotFound = () => {
    const navigate = useNavigate();
    return (
        <div
            className="flex h-screen w-full flex-col items-center justify-center bg-gray-100"
        >
            <Card className="text-center shadow-lg max-w-lg">
                <CardHeader>
                    <CardTitle>404 Not Found</CardTitle>
                    <p className="text-gray-600">
                        The page you are looking for does not exist.
                    </p>
                </CardHeader>
                <CardContent>

                    <img 
                        src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif" 
                        alt="404 Not Found" 
                        className="w-3/4 mx-auto"
                    />

                    <Button 
                        variant="outline" className="mt-4"
                        onClick={() => navigate(-1)}
                    >
                        Go back
                    </Button>

                </CardContent>
            </Card>

        </div>
    );
};