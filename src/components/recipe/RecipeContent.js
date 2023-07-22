import { PageContent } from '../shared/Page';
import { Row, Column } from '../shared/Grid';
import Box from '../box/Box';

function RecipeContent() {
  return (
    <PageContent>
      <Row>
        <Column className='main'>
          <Box label={7} color='yellow' />
        </Column>
        <Column className='widget-left'>
          <Box label={5} color='yellow' />
          <Box label={6} color='yellow' />
        </Column>
        <Column className='widget-right'>
          <Box label={8} color='yellow' />
          <Box label={9} color='yellow' />
        </Column>
      </Row>
    </PageContent>
  );
}

export default RecipeContent;