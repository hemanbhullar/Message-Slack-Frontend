

import { LogOutIcon, SettingsIcon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { useAuth } from '@/hooks/context/useAuth';


export const UserButton = () => {

    const { auth } = useAuth();

    const navigate = useNavigate();

    const logout = () => {
        localStorage.clear();
        navigate('/auth/signin');
    };

    
    return (
       <DropdownMenu>
        <DropdownMenuTrigger className='outline-none relative'>
            <Avatar className='size-10 hover:opacity-65 transition'>
                <AvatarImage src={auth?.user?.avatar} />
                <AvatarFallback>{auth?.user?.username[0].toUpperCase()}</AvatarFallback>
            </Avatar>
            <DropdownMenuContent>
                <DropdownMenuItem>
                    <SettingsIcon className='size-4 mr-2 h-10'/>
                    Settings
                </DropdownMenuItem>
                <DropdownMenuItem onClick={logout}>
                    <LogOutIcon className='size-4 mr-2 h-10'/>
                    Logout
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenuTrigger>
       </DropdownMenu>
    );

};