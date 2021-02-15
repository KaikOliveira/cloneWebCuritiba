import React from 'react';

import {
  Wrapper,
  SectionLeft,
  SectionRight
} from './styles';

const News: React.FC = () => {
  return (
    <Wrapper>
      <SectionLeft />
      <SectionRight>
        <div>
          <p>top</p>
        </div>
        <div>
          <p>bottom</p>
        </div>
      </SectionRight>
    </Wrapper>
  )
}

export default News;
