import { PageHeader, PageTitle } from '../shared/Page';
import { Row, Column } from '../shared/Grid';
import Box from '../box/Box';

function RecipeHeader() {
  return (
    <PageHeader>
      <Row>
        <Column className='image'>
          <Box label={1} />
        </Column>
        <Column>
          <Row className='widget'>
            <Column>
              <Box label={3} />
            </Column>
            <Column>
              <Box label={4} />
            </Column>
          </Row>
          <PageTitle>
            <Box label={2} />
          </PageTitle>
        </Column>
      </Row>
    </PageHeader>
  );
}

export default RecipeHeader;