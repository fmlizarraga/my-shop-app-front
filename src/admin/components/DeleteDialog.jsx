import { Button, Group, Modal, rem } from "@mantine/core"
import { useShopStore, useUiStore } from "../../hooks"

export const DeleteDialog = () => {
    const { isDeleteDialogOpen, closeDeleteDialog } = useUiStore();
    const { startDeletingProduct } = useShopStore();

    const handleDelete = () => {
        startDeletingProduct();
        closeDeleteDialog();
    };

  return (
    <Modal 
        opened={isDeleteDialogOpen} 
        onClose={ closeDeleteDialog } 
        radius="md"
        overlayProps={{ blur:10 }}
        title="Delete product"
        withCloseButton={false}
        yOffset={rem(120)}
    >
        Are You sure? This action cannot de undone.
        <Group mt="xl" >
            <Button radius="xl" style={{flex:1}} variant="outline" onClick={ closeDeleteDialog } >Cancel</Button>
            <Button radius="xl" style={{flex:1}} onClick={ handleDelete } color='red' >Delete</Button>
        </Group>
    </Modal>
  )
}
