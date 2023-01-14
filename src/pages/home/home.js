import React from 'react';
import SearchInput from '../../atoms/SearchInput/SearchInput';
import Header from '../../molecules/Header/Header';
import InfluencerCard from '../../molecules/InfluencerCard/InfluencerCard';

// Style
import './style.css';

const Home = React.memo(() => {

  return (
    <>
      <Header />
      <div className='body-text'>
        <h1><span>Free</span>{' Instagram Engagement Rate Calculator'}</h1>
        <p>{'Try our free engagement Rate Calculator to find out the engagement of any Instagram account'}</p>
      </div>
      <SearchInput />
      <div className='card-wrapper'>
        {INFLUENCERS_DATA.map((datum, index) => {
          if(!datum) return null;
          return <InfluencerCard inflencerData = {datum} key={index}/>
         } )}
      </div>
    </>
  )
})

export default Home

const INFLUENCERS_DATA = [
  {
    name: 'Sachin',
    profile_pic: 'https://d1311wbk6unapo.cloudfront.net/ResellerGroup/tr:w-600,f-webp,fo-auto/nushop/profile_pic_sachin.jpeg_Q1124OM6CI_2022-04-07',
    followers: '1.1M',
    likes: '31.5K',
    comments: '210',
    performance: 'good',
    tag: 'Good ER',
    engagement_rate: 2.82, 
  },
  {
    name: 'Gima Ashi',
    profile_pic: 'https://i.pinimg.com/originals/0a/cc/73/0acc7372108d793744ef281d7b212963.jpg',
    followers: '6.1M',
    likes: '8.5K',
    comments: '110',
    performance: 'avg',
    tag: 'Average ER',
    engagement_rate: 1.82, 
  }
]