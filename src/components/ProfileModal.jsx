import React from 'react';
import { Envelope } from '@gravity-ui/icons';
import { Button, Input, Label, ListBoxItemIndicator, Modal, Surface, TextField } from '@heroui/react';
import { SquarePen } from 'lucide-react';
import { authClient } from '@/lib/auth-client';
const ProfileModal = () => {
const onSubmit = async (e) => {
  e.preventDefault();

  const name = e.target.name.value;
  const image = e.target.image.value;

  const { data, error } = await authClient.updateUser({
    name,
    image,
  });

  if (error) {
    console.log(error);
    return;
  }

  console.log(data);
};
  return (
    <div>
      <Modal>
        <Button variant="secondary">Update Information</Button>
        <Modal.Backdrop>
          <Modal.Container placement="auto">
            <Modal.Dialog className="sm:max-w-md">
              <Modal.CloseTrigger />
              <Modal.Header>
                <Modal.Heading>
                  <div className="flex gap-2 justify-start items-center">
                    <SquarePen />
                    <span> Update User Information</span>
                  </div>
                </Modal.Heading>
              </Modal.Header>
              <Modal.Body className="p-6">
                <Surface variant="default">
                  <form onSubmit={onSubmit} className="flex flex-col gap-4">
                    <TextField
                      className="w-full"
                      name="name"
                      type="text"
                      variant="secondary"
                    >
                      <Label>Name</Label>
                      <Input placeholder="Enter your name" />
                    </TextField>

                    <TextField
                      className="w-full"
                      name="image"
                      variant="secondary"
                    >
                      <Label>Image url</Label>
                      <Input placeholder="Enter your image url" />
                    </TextField>
                    <Modal.Footer>
                      <Button slot="close" variant="secondary">
                        Cancel
                      </Button>
                      <Button type='submit'  >update</Button>
                    </Modal.Footer>
                  </form>
                </Surface>
              </Modal.Body>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
};

export default ProfileModal;