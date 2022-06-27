import './App.css';
import { Button } from './Components/Button/Button'
import { Container } from './Components/Button/Container-styles'
import { ContainerButtons } from './Components/Button/ContainerButtons-styles';
import { Text } from './Components/Text/Text'
import { PageTitle } from './Components/Text/Text'
import styled from 'styled-components';
import { GlobalStyle } from './styles/global'

function App() {
  return (
   <>
   <div className="button">
    <Container>
      <PageTitle>Button</PageTitle>
      <p>O componente Button é utilizado para as ações de clique do usuário.
         Um elemento Button tem um comprimento mínimo (o apresentado nas figuras abaixo),
          mas ao colocá-lo dentro de um container com largura maior,
           ele deve preencher 100% do espaço disponível.</p>
        <Text>primary</Text>
        <Button children={'Text'} 
            color='primary'
            width="31rem">
        </Button>

          <Text>secondary</Text>
        <Button children={'Text'}
          color='secondary'
          width="31rem">
        </Button>

          <Text>Icon</Text>
      <ContainerButtons>
        <Button children={'Text'}
           icon="arrow-right"
           color='primary'
           width="31rem">
        </Button>
        <Button children={'Text'}
          icon="check"
          color='primary' 
          width="31rem">
        </Button>
        <Button icon="refresh"
          children={'Text'}
          color="primary"
          width="31rem">
        </Button>
      </ContainerButtons>
      <ContainerButtons>
      <Button icon="refresh"
          children={'Text'}
          color="secondary"
          width="31rem">
        </Button>
        <Button icon="refresh"
          children={'Text'}
          color="secondary"
          width="31rem">
        </Button>
        <Button icon="refresh"
          children={'Text'}
          color="secondary"
          width="31rem">
        </Button>
      </ContainerButtons>
      <Text>disabled</Text>
      <ContainerButtons>
      <Button 
          children={'Text'}
          color="primary"
          width="31rem"
          disabled>
        </Button>
        <Button 
          children={'Text'}
          color="secondary"
          width="31rem"
          disabled>
        </Button>
      </ContainerButtons>
    </Container>
    <GlobalStyle/>
   </div>
  </>
  );
}

export default App;