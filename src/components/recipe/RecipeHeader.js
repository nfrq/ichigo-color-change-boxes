import { PageHeader, PageTitle } from '../shared/Page';
import { Row, Column } from '../shared/Grid';
import Box from '../box/Box';

function RecipeHeader() {
  return (
    <PageHeader>
      <Row>
        <Column className='image'>
          <Box label={1} color='red' />
        </Column>
        <Column>
          <Row className='widget'>
            <Column>
              <Box label={3} color='red' />
            </Column>
            <Column>
              <Box label={4} color='red' />
            </Column>
          </Row>
          <PageTitle>
            <Box label={2} color='red' />
          </PageTitle>
        </Column>
      </Row>
    </PageHeader>
  );
}

export default RecipeHeader;