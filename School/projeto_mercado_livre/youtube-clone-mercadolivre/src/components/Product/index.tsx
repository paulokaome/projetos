import React from "react";

import {
  Container,
  Row,
  Panel,
  Section,
  Description,
  Column,
  Gallery,
} from "./styles";
import tshirtImage from "../../assets/tshirt.png";
import SellerInfo from '../SellerInfo'
import ProductAction from '../ProductAction'

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um Igual</a>
      </Row>

      <Panel>
        <Column>
          <Gallery>
            <img alt="T-Shit" src={tshirtImage} />
          </Gallery>
          <Info />
        </Column>

        <Column>
          <ProductAction/>
          <SellerInfo/>
          <WarrantySecction />
          <WarrantySecction />
          <WarrantySecction />
        </Column>
      </Panel>
    </Container>
  );
};

const WarrantySecction = () => (
  <Section>
    <h4>Garantia</h4>

    <div>
      <span>
        <p className="title">Compra Garantida com o Lorem Ipsum</p>
        <p className="description">
          Receba o Produto que está esperando ou devolvemos o seu dinheiro
        </p>
      </span>
      <span>
        <p className="title">Garantia do Vendendor</p>
        <p className="description">Sem Garantia</p>
      </span>
    </div>
    <a href="#">Saiba mais sobre garantia</a>
  </Section>
);

const Info = () => (
  <Description>
    <h2>Descrição</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam vulputate
      leo leo. Nulla feugiat turpis ac orci facilisis, in porta dui suscipit.
      Sed ullamcorper mauris interdum elit maximus, vitae malesuada enim
      vehicula. Fusce tellus eros, sodales at ipsum id, laoreet aliquam erat.
      Mauris pellentesque leo a orci tristique pulvinar. Phasellus arcu ex,
      cursus vel posuere eu, blandit ac libero. Sed vitae nibh tortor.
    </p>
    <br />
    Cras porttitor tortor at mollis lacinia. Cras quis facilisis lacus. Proin
    vel rhoncus metus. Nam vel nisi ut libero ultrices semper a faucibus libero.
    Nunc velit ipsum, luctus non fringilla vitae, mattis vitae felis. Quisque
    lobortis lectus nisi, ut tempus odio eleifend in. In suscipit lacus a dolor
    porttitor rhoncus. Pellentesque quis enim convallis mi interdum condimentum
    sit amet ac turpis. Sed a tellus quis odio commodo efficitur at id lacus
  </Description>
);

export default Product;
