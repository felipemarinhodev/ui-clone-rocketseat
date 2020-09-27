import React from 'react';
import StickyBox from 'react-sticky-box';

import {
  Container,
  SearchWrapper,
  SearchInput,
  SearchIcon,
  Body,
} from './styles';
import List from '../List';
import FollowSuggestion from '../FollowSuggestion';
import News from '../News';

const SideBar: React.FC = () => {
  return (
    <Container>
      <StickyBox>
        <SearchWrapper>
          <SearchInput placeholder="Buscar no Twitter" />
          <SearchIcon />
        </SearchWrapper>

        <Body>
          <List
            title="Talvez você curta"
            elements={[
              <FollowSuggestion
                name="Vivi Lima"
                nickname="@vii829"
              />,
              <FollowSuggestion
                name="Malu Lima"
                nickname="@mllm"
              />,
              <FollowSuggestion
                name="Felipe Barbosa"
                nickname="@felipebarbosa"
              />
            ]}
          />
          <List
            title="O que está acontecendo"
            elements={[
            <News
              subject="Assuntos do momento no Brasil"
              description="Bootcampo da Rocketseat"
            />,
            <News
              subject="Assuntos do momento no Brasil"
              description="Bootcampo da Rocketseat"
            />,
            <News
              subject="Assuntos do momento no Brasil"
              description="Bootcampo da Rocketseat"
            />,
          ]}
          />
          <List
            title="O que está acontecendo"
            elements={[
            <News
              subject="Assuntos do momento no Brasil"
              description="Bootcampo da Rocketseat"
            />,
            <News
              subject="Assuntos do momento no Brasil"
              description="Bootcampo da Rocketseat"
            />,
            <News
              subject="Assuntos do momento no Brasil"
              description="Bootcampo da Rocketseat"
            />,
          ]}
          />
          <List
            title="O que está acontecendo"
            elements={[
            <News
              subject="Assuntos do momento no Brasil"
              description="Bootcampo da Rocketseat"
            />,
            <News
              subject="Assuntos do momento no Brasil"
              description="Bootcampo da Rocketseat"
            />,
            <News
              subject="Assuntos do momento no Brasil"
              description="Bootcampo da Rocketseat"
            />,
          ]}
          />
          <List
            title="O que está acontecendo"
            elements={[
            <News
              subject="Assuntos do momento no Brasil"
              description="Bootcampo da Rocketseat"
            />,
            <News
              subject="Assuntos do momento no Brasil"
              description="Bootcampo da Rocketseat"
            />,
            <News
              subject="Assuntos do momento no Brasil"
              description="Bootcampo da Rocketseat"
            />,
          ]}
          />
          <List
            title="O que está acontecendo"
            elements={[
            <News
              subject="Assuntos do momento no Brasil"
              description="Bootcampo da Rocketseat"
            />,
            <News
              subject="Assuntos do momento no Brasil"
              description="Bootcampo da Rocketseat"
            />,
            <News
              subject="Assuntos do momento no Brasil"
              description="Bootcampo da Rocketseat"
            />,
          ]}
          />
        </Body>
      </StickyBox>
    </Container>
  );
}

export default SideBar;