import React from 'react';

import tshirtImage from '../../assets/tshirt.png';
import SellerInfo from '../SellerInfo';
import ProductAction from '../ProductAction';

import {
  Container,
  Row,
  Panel,
  Column,
  Gallery,
  Section,
  Description,
} from './styles';

const Product: React.FC = () => {
  return (
    <Container>
      <Row>
        <a href="#">Compartilhar</a>
        <a href="#">Vender um igual</a>
      </Row>
      <Panel>
        <Column>
          <Gallery>
            <img alt="T-Shirt" src={tshirtImage} />
          </Gallery>

          <Info />
        </Column>

        <Column>
          <ProductAction />
          <SellerInfo />

          <WarrantySection />
          <WarrantySection />
          <WarrantySection />
        </Column>
      </Panel>
    </Container>
  );
}

const WarrantySection = () => (
  <Section>
    <h4>Garantia</h4>

    <div>
      <span>
        <p className="title">Compra garantida com o Lorem Bacon</p>
        <p className="description">Receba o produto que está esperando ou devolvemos o seu dinheiro</p>
      </span>
      <span>
        <p className="title">Garantida do Vendedor</p>
        <p className="description">sem garantia</p>
      </span>
    </div>

    <a href="#">Saiba mais sobre garantia</a>
  </Section>
)

const Info = () => (
  <Description>
    Descrição

    <p>
      Bacon ipsum dolor amet tri-tip filet mignon meatball bacon chuck chicken prosciutto shoulder ribeye capicola biltong beef ribs shankle bresaola pork loin. Shank rump turkey ribeye porchetta shoulder ham hock kielbasa bacon prosciutto beef ball tip tenderloin jowl.
      <br />
      <br />
      Itens inclusos: <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      - 1x LED <br />
      <br />
      Bacon ipsum dolor amet tri-tip filet mignon meatball bacon chuck chicken prosciutto shoulder ribeye capicola biltong beef ribs shankle bresaola pork loin. Shank rump turkey ribeye porchetta shoulder ham hock kielbasa bacon prosciutto beef ball tip tenderloin jowl. Salami spare ribs bresaola frankfurter, pig rump corned beef pancetta chuck beef picanha sirloin biltong. Pork chop chicken brisket, picanha spare ribs andouille bresaola cow ground round. Fatback filet mignon drumstick alcatra buffalo. Rump sirloin chislic chuck shoulder.
      Ham venison tri-tip, prosciutto swine ground round pig buffalo ham hock. Capicola tri-tip cupim, andouille beef ribs prosciutto t-bone frankfurter chuck ground round pig kevin cow ham burgdoggen. Flank kielbasa meatball jerky, pork hamburger beef ribs pastrami ribeye shoulder kevin. Boudin picanha porchetta cow cupim strip steak turducken tongue leberkas.
    </p>

  </Description>
);

export default Product;
