import React from 'react';

import styled from '@emotion/styled';

import { Card } from '../components/Card';

export default {
  title: 'Components/Card',
  component: Card,
  argTypes: {
    size: {
      control: { type: 'radio', options: ['small', 'large'] },
    },
    lastChanged: {
      table: {
        disable: true,
      },
    },
    sendDate: {
      table: {
        disable: true,
      },
    },
    executionDate: {
      table: {
        disable: true,
      },
    },
    status: {
      control: { type: 'radio', options: ['draft', 'finished', 'published', 'archived'] },
    },
    type: {
      control: { type: 'radio', options: ['event', 'search', undefined] },
    },
    title: {
      control: { type: 'text' },
    },
    image: {
      control: { type: 'object' },
    },
  },
};

const ColumnContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
`;

const RowContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Default = (args) => <Card {...args} />;
Default.args = {
  title: 'title',
  image: { src: 'https://http.cat/201', text: 'httpCat' },
  lastChanged: new Date(),
  type: 'search',
  status: 'finished',
  sendDate: new Date(),
};

export const Sizes = (args) => (
  <ColumnContainer>
    <Card {...args} size="small" {...args} />
    <Card {...args} size="large" />
  </ColumnContainer>
);

Sizes.args = {
  title: 'title',
  image: { src: 'https://http.cat/201', text: 'httpCat' },
  lastChanged: new Date(),
  type: 'search',
  status: 'finished',
  sendDate: new Date(),
};

export const Pictures = (args) => (
  <ColumnContainer>
    <Card
      size="small"
      title={'title'}
      image={{ src: 'https://http.cat/201', text: 'httpCat' }}
      lastChanged={new Date()}
      type={'search'}
      status={'finished'}
      sendDate={new Date()}
      {...args}
    />
    <Card
      size="large"
      title={'title'}
      image={{ src: 'https://http.cat/201', text: 'httpCat' }}
      lastChanged={new Date()}
      type={'event'}
      status={'draft'}
      {...args}
    />
  </ColumnContainer>
);

Pictures.args = {
  title: 'title',
  image: { src: 'https://http.cat/201', text: 'httpCat' },
  lastChanged: new Date(),
  type: 'search',
  status: 'finished',
  sendDate: new Date(),
};

export const Caption = (args) => (
  <RowContainer>
    <Card size="large" type="search" status="planned" {...args} executionDate={new Date()} />
    <Card size="large" type="search" status="draft" {...args} />
    <Card size="large" type="search" sendDate={new Date()} status="finished" {...args} />
    <Card size="large" type="event" lastChanged={new Date()} status="active" {...args} />
  </RowContainer>
);

Caption.args = {
  title: 'title',
  image: { src: 'https://http.cat/201', text: 'httpCat' },
  lastChanged: new Date(),
};

export const Tags = (args) => (
  <RowContainer style={{ display: 'inline-flex', flexWrap: 'wrap', columnGap: '1rem', rowGap: '1rem' }}>
    <Card
      size="large"
      title={'Title'}
      image={{ src: 'https://http.cat/201', text: 'httpCat' }}
      sendDate={new Date()}
      type={'event'}
      status={'draft'}
      {...args}
    />
    <Card
      size="large"
      title={'Title'}
      image={{ src: 'https://http.cat/201', text: 'httpCat' }}
      sendDate={new Date()}
      status={'finished'}
      {...args}
    />
    <Card
      size="large"
      title={'Title'}
      image={{ src: 'https://http.cat/201', text: 'httpCat' }}
      sendDate={new Date()}
      type={'search'}
      status={'published'}
      {...args}
    />
    <Card
      size="large"
      title={'Title'}
      image={{ src: 'https://http.cat/201', text: 'httpCat' }}
      lastChanged={new Date()}
      status={'active'}
      {...args}
    />
  </RowContainer>
);
