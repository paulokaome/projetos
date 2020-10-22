import React from "react";

import {
  Container,
  Condition,
  Row,
  HeartIcon,
  DispatchTag,
  PriceCard,
  PriceRow,
  InstallmentsInfo,
  StockStatus,
  MethodCard,
  CheckIcon,
  Actions,
  Button,
  Benefits,
  ShieldIcon,
} from "./styles";

const ProductAction: React.FC = () => {
  return (
    <Container>
      <Condition>Novo</Condition>

      <Row>
        <h1>Camiseta Branca de Marca Aleatoria</h1>
        <HeartIcon />
      </Row>
      <DispatchTag>Enviando normalmente</DispatchTag>

      <PriceCard>
        <PriceRow>
          <span className="syboml">R$</span>
          <span className="fraction">34</span>
          <span className="cents">99</span>
        </PriceRow>
        <InstallmentsInfo> em 3x de R$ 11,67</InstallmentsInfo>
      </PriceCard>
      <StockStatus>Estoque disponivel</StockStatus>
      <MethodCard>
        <CheckIcon />
        <div>
          <span className="title">Frete Grátis</span>
          <span className="details">Beneficio Lorem Ipsum</span>
          <a href="#" className="more">Ver mais Opções</a>
        </div>
      </MethodCard>
      <Actions>
        <Button solid>Comprar Agora</Button>
        <Button>Adicionar ao Carrinho</Button>
      </Actions>
      <Benefits>
        <li>
          <ShieldIcon />
          <p>Receba o produto ou o dinheiro de volta.</p>
        </li>
      </Benefits>
    </Container>
  );
};

export default ProductAction;
