import React from 'react';
import styled from '@emotion/styled';
import Delete from '@mui/icons-material/DeleteOutline';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Card } from '../components';

export default {
  title: 'Atoms/Card',
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
    tags: {
      options: [['draft'], ['finished', 'draft'], ['published'], ['archived']],
      control: {
        type: 'radio',
      },
    },
    title: {
      control: { type: 'text' },
    },
    image: {
      control: { type: 'object' },
    },
  },
} as ComponentMeta<typeof Card>;

const ColumnContainer = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
`;

const RowContainer = styled.div`
  display: flex;
  gap: 1rem;
`;

export const Default: ComponentStory<typeof Card> = (args) => <Card {...args} />;
Default.args = {
  title: 'title',
  image: { src: 'https://http.cat/201', text: 'httpCat' },
  lastChanged: new Date(),
  sendDate: new Date(),
  size: 'small',
};

export const Sizes: ComponentStory<typeof Card> = (args) => (
  <ColumnContainer>
    <Card {...args} size="small" />
    <Card {...args} size="large" />
  </ColumnContainer>
);

Sizes.args = {
  title: 'title',
  image: { src: 'https://http.cat/201', text: 'httpCat' },
  lastChanged: new Date(),
  sendDate: new Date(),
};

export const Pictures: ComponentStory<typeof Card> = ({ size, title, ...args }) => (
  <ColumnContainer>
    <Card
      size="small"
      title={'title'}
      image={{ src: 'https://http.cat/201', text: 'httpCat' }}
      lastChanged={new Date()}
      sendDate={new Date()}
      {...args}
    >
      <Delete />
    </Card>
    <Card
      size="large"
      title={'title'}
      image={{ src: 'https://http.cat/201', text: 'httpCat' }}
      lastChanged={new Date()}
      {...args}
    />
  </ColumnContainer>
);

export const Caption: ComponentStory<typeof Card> = ({ size, ...args }) => (
  <RowContainer>
    <Card size="large" {...args} executionDate={new Date()} />
    <Card size="large" {...args} />
    <Card size="large" sendDate={new Date()} {...args} />
    <Card size="large" lastChanged={new Date()} {...args} />
  </RowContainer>
);

Caption.args = {
  title: 'title',
  image: { src: 'https://http.cat/201', text: 'httpCat' },
  lastChanged: new Date(),
};

export const Tags: ComponentStory<typeof Card> = ({ size, title, ...args }) => (
  <RowContainer style={{ display: 'inline-flex', flexWrap: 'wrap', columnGap: '1rem', rowGap: '1rem' }}>
    <Card
      size="large"
      title={'Title'}
      image={{ src: 'https://http.cat/201', text: 'httpCat' }}
      sendDate={new Date()}
      {...args}
    />
    <Card
      size="large"
      title={'Title'}
      image={{ src: 'https://http.cat/201', text: 'httpCat' }}
      sendDate={new Date()}
      {...args}
    />
    <Card
      size="large"
      title={'Title'}
      image={{ src: 'https://http.cat/201', text: 'httpCat' }}
      sendDate={new Date()}
      {...args}
    />
    <Card
      size="large"
      title={'Title'}
      image={{ src: 'https://http.cat/201', text: 'httpCat' }}
      lastChanged={new Date()}
      {...args}
    />
  </RowContainer>
);
