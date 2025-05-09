import { CopyIcon, RefreshCcwIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useResetWorkspaceJoinCode } from '@/hooks/apis/workspaces/useResetWorkspaceJoinCode';
import { useToast } from '@/hooks/use-toast';

export const WorkspaceInviteModal = ({ openInviteModal, setOpenInviteModal, workspaceName, joinCode, workspaceId }) => {

    const { toast } = useToast();

    const { resetWorkspaceJoinCodeMutation } = useResetWorkspaceJoinCode(workspaceId);

    async function handleCopy() {
        const inviteLink = `${joinCode}`;
        await navigator.clipboard.writeText(inviteLink).then(() => {
            toast({
                title: 'Invite link copied to clipboard',
                description: 'You can now share this link with others to invite them to your workspace.',
                duration: 3000,
                variant: 'default',
            });
        }).catch(err => {
            console.error('Failed to copy: ', err);
        });
    }

    async function handleResetCode() {
        try {
            await resetWorkspaceJoinCodeMutation();
            toast({
                title: 'Join code reset successfully',
                description: 'The join code has been reset.',
                duration: 3000,
            });
        } catch (error) {
            console.log('Error resetting join code:', error);
        };
    };

    return (
        <Dialog open={openInviteModal} onOpenChange={setOpenInviteModal}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>
                        Invite people to {workspaceName}
                    </DialogTitle>
                    <DialogDescription>
                        Use the code below to invite people to your workspace.
                    </DialogDescription>
                </DialogHeader>

                <div
                    className="flex flex-col items-center justify-center py-10 gap-y-4"
                >
                    <p>
                        <span className="font-semibold text-2xl">{joinCode}</span>
                    </p>
                    <Button size="sm" variant="ghost" onClick={handleCopy}>
                        Copy Link
                        <CopyIcon className="size-4 ml-2" />
                    </Button>

                    {/* Link to redirect the user in a new tab to the join page */}
                    <a href={`/workspaces/join/${workspaceId}`} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" variant="outline">
                            Open Join Link
                        </Button>
                    </a>
                </div>
                <div
                    className="flex items-center justify-center w-full"
                >
                    <Button variant="outline" onClick={handleResetCode}>
                        Reset Join Code
                        <RefreshCcwIcon className="size-4 ml-2" />
                    </Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};