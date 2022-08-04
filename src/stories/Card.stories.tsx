import React from 'react';

import { Card } from '../components/Card';

export default {
  title: 'Components/Card',
  component: Card,
};

export const Default = (args) => <Card {...args} />;

export const Sizes = () => (
  <div>
    <Card size="small" title={'title'} image={undefined} lastChanged={new Date()} type={'event'} status={'draft'} />
    <Card size="large" title={'title'} image={undefined} lastChanged={new Date()} type={'event'} status={'draft'} />
  </div>
);

export const Pictures = () => (
  <div>
    <Card
      size="small"
      title={'title'}
      image={{ src: 'https://http.cat/201', text: 'httpCat' }}
      lastChanged={new Date()}
      type={'search'}
      status={'finished'}
      sendDate={new Date()}
    />
    <Card
      size="large"
      title={'title'}
      image={{ src: 'https://http.cat/201', text: 'httpCat' }}
      lastChanged={new Date()}
      type={'event'}
      status={'draft'}
    />
  </div>
);

export const Caption = () => (
  <div>
    <Card
      size="small"
      title={'title'}
      image={{ src: 'https://http.cat/201', text: 'httpCat' }}
      lastChanged={new Date()}
      type={'search'}
      status={'archived'}
      executionDate={new Date()}
    />
    <Card
      size="large"
      title={'title'}
      image={{ src: 'https://http.cat/201', text: 'httpCat' }}
      lastChanged={new Date()}
      // type={'event'}
      status={'draft'}
    />
  </div>
);

export const Tags = () => (
  <div style={{ display: 'inline-flex', flexWrap: 'wrap', columnGap: '1rem', rowGap: '1rem' }}>
    <Card
      size="large"
      title={'Title'}
      image={{ src: 'https://http.cat/201', text: 'httpCat' }}
      sendDate={new Date()}
      type={'event'}
      status={'draft'}
    />
    <Card
      size="large"
      title={'Title'}
      image={{ src: 'https://http.cat/201', text: 'httpCat' }}
      sendDate={new Date()}
      type={'search'}
      status={'finished'}
    />
    <Card
      size="large"
      title={'Title'}
      image={{ src: 'https://http.cat/201', text: 'httpCat' }}
      sendDate={new Date()}
      type={'search'}
      status={'published'}
    />
    <Card
      size="large"
      title={'Title'}
      image={{ src: 'https://http.cat/201', text: 'httpCat' }}
      sendDate={new Date()}
      type={'search'}
      status={'archived'}
    />
  </div>
);
