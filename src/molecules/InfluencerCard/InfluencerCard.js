import React from "react";
// Style
import './style.css';

// constants
import { LINKEDIN_IMAGE, TWITTER_IMAGE, INSTAGRAM_IMAGE } from "../../constants";

// Atoms
import SmileIcon from "../../atoms/Icons/Smile";
import Profiles from "../../atoms/Icons/Profiles";
import Like from "../../atoms/Icons/Like";
import Comment from "../../atoms/Icons/Comment";
import RateMeter from "../../atoms/RateMeter/RateMeter";
import CircularArrow from "../../atoms/Icons/CircularArrow";
import NeutralFace from "../../atoms/Icons/NeutralFace";

const tagIconMapper = {
  good: <SmileIcon />,
  avg: <NeutralFace />
}

const InfluencerCard = React.memo(({ inflencerData, key }) => {
  return(
    <div className="i-card-wrapper" key={key}>
      <div className={`tag tag-${inflencerData.performance}`}>
        {tagIconMapper[inflencerData.performance]}
        {inflencerData.tag}
      </div>
      <div className="floating-socials">
        <img src={TWITTER_IMAGE} alt="twitter" height={22}/>
        <img src={LINKEDIN_IMAGE} alt="linkedin" height={18}/>
      </div>
      <div className="card-img-wrapper-1">
        <div className="card-img-wrapper-2">
          <img className="profile-card-img" src={inflencerData.profile_pic} alt={inflencerData.name}/>
        </div>
      </div>
      <div className="insta-handle">
        <img className="insta-handle-img" src={INSTAGRAM_IMAGE} alt="insta handle"/>
        {inflencerData.name}
      </div>
      <div className="profile-info-wrapper">
        <div className="profile-info">
        <div className="profile-info-icon"><Profiles /> {inflencerData.followers}</div>
          <p>Followers</p>
        </div>
        <div className="profile-info">
        <div className="profile-info-icon"><Like /> {inflencerData.likes}</div>
        <p>Likes</p>
        </div>
        <div className="profile-info">
        <div className="profile-info-icon"><Comment /> {inflencerData.comments}</div>
        <p>Comments</p>
        </div>
      </div>
      <div className="engagment-rate-wrapper">
        <h4> Engagment Rate </h4>
        <RateMeter />
        <h1>{inflencerData.engagement_rate}%</h1>
      </div>
      <div className="footer-text">
        To get full report! &nbsp;<span> Login <CircularArrow /></span>
      </div>

    </div>
  )
})

export default InfluencerCard