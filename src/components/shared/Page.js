import Block from './Block';

function Page({children}) {
  return <Block className='page' children={children} />;
}

function PageHeader({children}) {
  return <Block className='page-header' children={children} />;
}

function PageContent({children}) {
  return <Block className='page-content' children={children} />;
}

function PageTitle({children}) {
  return <Block className='page-title' children={children} />;
}

export {
  Page, 
  PageHeader, 
  PageContent, 
  PageTitle
};