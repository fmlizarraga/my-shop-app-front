import { Button, Card, Container, createStyles, Grid, Group, Modal, rem, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { IconSquarePlus } from "@tabler/icons-react";
import { useEffect } from "react";
import { useShopStore, useUiStore } from "../../hooks";

const useStyles = createStyles((theme) => ({
    root: {
      position: 'relative',
    },

    modal: {
      paddingTop: rem(60),
    },
  
    input: {
      height: rem(54),
      paddingTop: rem(18),
    },
  
    label: {
      position: 'absolute',
      pointerEvents: 'none',
      fontSize: theme.fontSizes.xs,
      paddingLeft: theme.spacing.sm,
      paddingTop: `calc(${theme.spacing.sm} / 2)`,
      zIndex: 1,
    },

    card: {
        border: `${rem(1)} solid ${
            theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
        }`,
    },

    cardTitle: {
        '&::after': {
            content: '""',
            display: 'block',
            backgroundColor: theme.fn.primaryColor(),
            width: rem(45),
            height: rem(2),
            marginTop: theme.spacing.sm,
        },
    },

    buttonTag: {
        height: rem(54),
        margin: 0
    },

  }));

export const EditorModal = () => {
    const { classes } = useStyles();
    const { isProductEditModalOpen, closeProductEditModal } = useUiStore();
    const { activeProduct } = useShopStore();

    const form = useForm({
      initialValues: {
        name: '',
        description: '',
        price: 0,
        badge: '',
        image: '',
        tags: [],
        newTag: '',
      },
      validate: {},
    });

    useEffect(() => {
      if(activeProduct) {
        form.setValues({
          name: activeProduct.name,
          description: activeProduct.description,
          price: activeProduct.price,
          badge: activeProduct.badge,
          image: activeProduct.image,
          tags: activeProduct.tags,
        })
      }
    }, []);
    

    const handleSubmit = (values) => {
      console.log(values);
      form.reset();
      closeProductEditModal();
    };

    const hadleCancel = () => {
      form.reset();
      closeProductEditModal();
    };

  return (
    <>
        <Modal 
            opened={ isProductEditModalOpen } 
            onClose={ hadleCancel } 
            radius="md"
            overlayProps={{blur:10}}
            title="Edit product" 
            className={ classes.modal }
            yOffset={rem(120)}
            withCloseButton={false}
        >
          <form onSubmit={ form.onSubmit( values => handleSubmit(values) )} >
            <Container my="md" >
              <Grid >
                <Grid.Col xs={12} pb={0} >
                  <TextInput 
                    label="Product name" 
                    placeholder="A product" 
                    classNames={classes} mb="md" 
                    required 
                    { ...form.getInputProps("name") }
                  />
                </Grid.Col>
                <Grid.Col xs={12} pb={0} pt={0} >
                  <TextInput 
                    label="Description" 
                    placeholder="About this product" 
                    classNames={classes} 
                    mb="md" 
                    required
                    { ...form.getInputProps("description") } 
                  />
                </Grid.Col>
                <Grid.Col xs={6} pb={0} pt={0} >
                  <TextInput 
                    type="number" 
                    label="Price" 
                    placeholder="100" 
                    rightSection='🇺🇸 USD' 
                    rightSectionWidth={ 90 } 
                    classNames={classes} 
                    mb="md" 
                    required 
                    { ...form.getInputProps("price") }
                  />
                </Grid.Col>
                <Grid.Col xs={6} pb={0} pt={0} >
                  <TextInput 
                    label="Badge" 
                    placeholder="NEW" 
                    classNames={classes} 
                    mb="md"
                    { ...form.getInputProps("badge") } 
                  />
                </Grid.Col>
                <Grid.Col xs={12} pb={0} pt={0} >
                  <TextInput 
                    label="Image url" 
                    placeholder="https://image-url" 
                    classNames={classes} 
                    mb="md" 
                    { ...form.getInputProps("image") }
                  />
                </Grid.Col>
                <Grid.Col xs={12} pb={0} pt={0} >
                  <Card shadow="md" className={ classes.card } padding="xl" mb="md" ></Card>
                </Grid.Col>
                <Grid.Col xs={12} pt={0} >
                  <TextInput 
                    label="Add tag" 
                    placeholder="tag" 
                    style={{ flex: 1 }} 
                    classNames={classes} 
                    rightSection={ 
                      <Button 
                        className={ classes.buttonTag } 
                        fullWidth 
                        radius={0}
                        variant="subtle" 
                        leftIcon={ <IconSquarePlus size="1.2rem" stroke={2.4} /> } 
                      >Add</Button> 
                    } 
                    rightSectionWidth={100} 
                    { ...form.getInputProps("newTag") }
                  />
                </Grid.Col>
              </Grid>
              <Group mt="xl" >
                <Button radius="xl" style={{flex:1}} variant="outline" onClick={ hadleCancel } >Cancel</Button>
                <Button radius="xl" style={{flex:1}} type="submit" >Done</Button>
              </Group>
            </Container>
          </form>
        </Modal>
    </>
  )
}
