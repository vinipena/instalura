/* eslint-disable no-console */
import React from 'react';

// import styled, { css } from 'styled-components';
import Menu from '../src/components/commons/Menu';
import Footer from '../src/components/commons/Footer';
import Modal from '../src/components/commons/Modal';
import { Text } from '../src/components/foundation/Text';
import { Button } from '../src/components/commons/Button';
import { Grid } from '../src/components/layout/Grid';
import { Box } from '../src/components/layout/Box';
import FormCadastro from '../src/patterns/FormCadastro';

export default function Home() {
  const [isModalOpen, setModalState] = React.useState(false);
  console.log('Retorno hook', isModalOpen);

  return (
    <Box
      flex="1"
      display="flex"
      flexWrap="wrap"
      flexDirection="colgit "
      justifyContent="space-between"
      backgroundRepeat="no-repeat"
      backgroundPosition="bottom right"
    >
      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalState(false)}
      >
        {(propsDoModal) => (
          <FormCadastro propsDoModal={propsDoModal} />
        ) }
      </Modal>
      <Menu />
      <Grid.Container
        marginTop={{
          xs: '32px',
          md: '75px',
        }}
      >
        <Grid.Row>
          <Grid.Col
            offset={{ xs: 0, md: 1 }}
            value={{ xs: 12, md: 5 }}
            display="flex"
            alignItems="flex-start"
            justifyContent="center"
            flexDirection="column"
          >
            <Text
              variant="title"
              tag="h1"
              color="quaternary.title"
              textAlign={{
                xs: 'center',
                md: 'left',
              }}
            >
              Compartilhe momentos e conecte-se com amigos
            </Text>

            <Text
              variant="paragraph1"
              tag="p"
              color="quaternary.subTitle"
              textAlign={{
                xs: 'center',
                md: 'left',
              }}
            >
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s
            </Text>

            <Button
              variant="primary.main"
              margin={{
                xs: 'auto',
                md: 'initial',
              }}
              display="block"
              onClick={() => {
                // isModalOpen = true;
                setModalState(!isModalOpen);
              }}
            >
              Cadastrar
            </Button>
          </Grid.Col>
          <Grid.Col value={{ xs: 12, md: 6 }}>
            <img
              style={{ display: 'block', margin: 'auto' }}
              src="/images/phones.png"
              alt="Nicolas Cage face on CellPhones "
            />
          </Grid.Col>
        </Grid.Row>
      </Grid.Container>
      <Footer color="quaternary.subTitle" />
    </Box>
  );
}
