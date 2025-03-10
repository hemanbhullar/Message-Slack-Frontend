import { TrashIcon } from 'lucide-react';

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { useDeleteWorkspace } from '@/hooks/apis/workspaces/useDeleteWorkspace';
import { useWorkspacePreferencesModal } from '@/hooks/context/useWorkspacePreferencesModal';
import { useToast } from '@/hooks/use-toast';

export const WorkspacePreferencesModal = () => {

        const { initialValue, openPreferences, setOpenPreferences, workspace } = useWorkspacePreferencesModal();

        function handleClose() {
            setOpenPreferences(false);
        }

        const { toast } = useToast();

        const { deleteWorkspaceMutation } = useDeleteWorkspace(workspace?._id);

        async function handleDelete() {
            try {
                await deleteWorkspaceMutation();
                toast({
                    title: 'Workspace Deleted',
                    description: 'Workspace has been deleted successfully',
                    type: 'success',
                });
            } catch (error) {
                console.error('Failed to delete workspace', error);
            } finally {
                setOpenPreferences(false);
            }
        }
        

        return (
        <Dialog 
        open={openPreferences} onOpenChange={handleClose}
        >
            <DialogContent className="p-0 bg-gray-50 overflow-hidden">
                <DialogHeader className="p-4 border-b bg-white">
                    <DialogTitle>
                        {initialValue}
                    </DialogTitle>
                </DialogHeader>
                <div className='px-4 pb-4 flex flex-col gap-y-2'>
                    <div
                        className='px-5 py-4 bg-white rounded-lg border cursor-pointer hover:bg-gray-50'
                    >
                        <div className='flex items-center justify-between'>
                            <p className='font-semibold text-sm'>
                                Workspace Name
                            </p>
                            <p
                                className='text-sm font-semibold hover:underline'
                            >
                                Edit
                            </p>
                        </div>

                        <p
                            className='text-sm'
                        >
                            {initialValue}
                        </p>
                    </div>
                    <button
                        className='flex items-center gap-x-2 px-5 py-4 bg-white rounded-lg border cursor-pointer hover:bg-gray-50'
                        onClick={handleDelete}
                    >
                        <TrashIcon className='size-5' />
                        <p
                            className='text-sm font-semibold'
                        >
                            Delete Workspace
                        </p>
                    </button>
                </div>
            </DialogContent>
        </Dialog>
    );
};