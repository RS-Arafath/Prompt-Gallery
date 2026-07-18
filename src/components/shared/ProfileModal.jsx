'use client';
import { Sparkles } from '@gravity-ui/icons';
import { Avatar, Modal, Button, Card } from '@heroui/react';
import { User as UserIcon, LogOut } from 'lucide-react';
import { authClient } from '@/lib/auth-client';

export default function ProfileModal({ user }) {
  const handleSignOut = async () => {
    await authClient.signOut();
  };

  return (
    <Modal>
      <Modal.Trigger className="cursor-pointer">
        <Avatar size="sm" className="ring-1 ring-blue-600 ring-offset-1">
          {user?.image ? (
            <Avatar.Image
              alt={user.name}
              src={user.image}
              referrerPolicy="no-referrer"
            />
          ) : (
            <Avatar.Fallback>
              <UserIcon className="h-5 w-5 text-blue-500" />
            </Avatar.Fallback>
          )}
        </Avatar>
      </Modal.Trigger>

      <Modal.Backdrop
        className="bg-linear-to-t from-black/80 via-black/40 to-transparent dark:from-zinc-800/80 dark:via-zinc-800/40"
        variant="transparent"
      >
        <Modal.Container className="!block !p-0">
          <Modal.Dialog
            className="
              !fixed !top-1/2 !left-1/2 !-translate-x-1/2 !-translate-y-1/2 !m-0
              w-[90vw] max-w-[320px]
              md:!top-16 md:!right-4 md:!left-auto md:!translate-x-0 md:!translate-y-0
              lg:!right-8
            "
          >
            <Modal.Header className="items-center text-center">
              <Modal.Heading>
                Hello,{' '}
                <span className="font-jetbrains-mono font-semibold  italic">
                  {user.name}!
                </span>
              </Modal.Heading>
            </Modal.Header>

            <Modal.Body className="flex flex-col items-center gap-3">
              <Avatar className="h-20 w-20 rounded-full ring-1 ring-blue-600 ring-offset-1">
                {user.image ? (
                  <Avatar.Image
                    alt={user.name}
                    src={user.image}
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <Avatar.Fallback>
                    <UserIcon className="h-10 w-10 text-blue-500" />
                  </Avatar.Fallback>
                )}
              </Avatar>
              <p className="text-sm text-gray-600">{user.email}</p>
            </Modal.Body>

            <Modal.Footer className="flex-col-reverse">
              <Button
                className="w-full border border-red-700 bg-red-200 hover:bg-red-400"
                variant="bordered"
                onClick={handleSignOut}
              >
                <LogOut className="h-4 w-4 mr-1" />
                Log Out
              </Button>
              <Button className="w-full" slot="close">
                Close
              </Button>
            </Modal.Footer>

            <Modal.CloseTrigger />
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal>
  );
}
