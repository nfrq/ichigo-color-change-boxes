import { PageContent } from '../shared/Page';
import { Row, Column } from '../shared/Grid';
import Box from '../box/Box';

function RecipeContent() {
  return (
    <PageContent>
      <Row>
        <Column className='main'>
          <Box label={7} />
        </Column>
        <Column className='widget-left'>
          <Box label={5} />
          <Box label={6} />
        </Column>
        <Column className='widget-right'>
          <Box label={8} />
          <Box label={9} />
        </Column>
      </Row>
    </PageContent>
  );
}

export default RecipeContent;