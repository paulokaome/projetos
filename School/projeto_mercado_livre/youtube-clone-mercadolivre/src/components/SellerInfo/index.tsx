import React from "react";

import {
  Container,
  Title,
  LocationCard,
  LocationIcon,
  ReputationCard,
  ReputationThermeter,
  ReputationRow,
  SupportIcon,
  ClockIcon,
  More
} from "./styles";

const SellerInfo: React.FC = () => {
  return (
    <Container>
      <Title>Informações sobre o vendedor</Title>

      <LocationCard>
        <LocationIcon />

        <div>
          <p>Localização</p>
          <strong>São Paulo , São Paulo</strong>
        </div>
      </LocationCard>

      <ReputationCard>
        <ReputationThermeter>
          <li />
          <li />
          <li />
          <li />
          <li className="active" />
        </ReputationThermeter>

        <ReputationRow>

          <div>
            <strong>561</strong>
            <span>Vendas nos últimos 4 meses</span>
          </div>

          <div>
            <strong>
              <SupportIcon />
            </strong>
            <span>Presta um bom atendimento</span>
          </div>

          <div>
            <strong>
              <ClockIcon />
            </strong>
            <span></span>
          </div>

        </ReputationRow>
      </ReputationCard>

      <More>Ver mais dados do vendedor</More>
    </Container>
  );
};

export default SellerInfo;
