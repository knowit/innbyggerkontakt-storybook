import React from 'react';
import {Card} from '../components/Card/Card';

export default {
     title: "Components/Card",
     component: Card
 }

 export const Primary = (args) => <Card {...args}/>

 export const Sizes = () => 
    <div>
        <Card size="small" title={'title'} image={''} lastChanged={''} bulletinType={'event'} bulletinStatus={'draft'}/>
        <Card size="large" title={'title'} image={''} lastChanged={''} bulletinType={'event'} bulletinStatus={'draft'}/>
    </div>

export const Pictures = () => 
<div>
    <Card size="small" title={'title'} image={'https://http.cat/201'} lastChanged={''} bulletinType={'event'} bulletinStatus={'draft'}/>
    <Card size="large" title={'title'} image={'https://http.cat/201'} lastChanged={''} bulletinType={'event'} bulletinStatus={'draft'}/>
</div>

export const Tags = () => 
<div style={{display: 'inline-flex', flexWrap: 'wrap', columnGap: '1rem', rowGap: '1rem' }}>
    <Card size="large" title={'Title'} image={'https://http.cat/201'} lastChanged={'10.05.96'} date={'10.05.96'} bulletinType={'event'} bulletinStatus={'draft'}/>
    <Card size="large" title={'Title'} image={'https://http.cat/201'} lastChanged={'10.05.96'} date={'10.05.96'} bulletinType={'event'} bulletinStatus={'finished'}/>
    <Card size="large" title={'Title'} image={'https://http.cat/201'} lastChanged={'10.05.96'} date={'10.05.96'} bulletinType={'search'} bulletinStatus={'draft'}/>
    <Card size="large" title={'Title'} image={'https://http.cat/201'} lastChanged={'10.05.96'} date={'10.05.96'} bulletinType={'search'} bulletinStatus={'finished'}/>
</div>