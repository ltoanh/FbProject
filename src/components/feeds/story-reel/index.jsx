import React from "react";
import Story from "./Story";
import "./story-reel.css";

function StoryReel() {
  return (
    <div className="story-reel">
      <Story
        profileSrc="https://images.pexels.com/users/avatars/3525678/-897.jpeg?auto=compress&fit=crop&h=256&w=256"
        imageSrc="https://images.pexels.com/photos/8642176/pexels-photo-8642176.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        title="Awake Your Power"
      />
      <Story
        profileSrc="https://images.pexels.com/users/avatars/3660000/any-lane-101.png?auto=compress&fit=crop&h=256&w=256"
        imageSrc="https://images.pexels.com/photos/9891992/pexels-photo-9891992.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
        title="Daria Nekipelova"
      />
      <Story
        profileSrc="https://images.pexels.com/users/avatars/2408093/ekaterina-bolovtsova-287.jpeg?auto=compress&fit=crop&h=256&w=256"
        imageSrc="https://images.pexels.com/photos/10078143/pexels-photo-10078143.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        title="Daria Klet"
      />
      <Story
        profileSrc="https://images.pexels.com/users/avatars/79786369/-702.jpeg?auto=compress&fit=crop&h=256&w=256"
        imageSrc="https://images.pexels.com/photos/9967679/pexels-photo-9967679.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        title="Никита Семехин"
      />
      <Story
        profileSrc="https://images.pexels.com/users/avatars/121008470/ekaterina-775.jpeg?auto=compress&fit=crop&h=256&w=256"
        imageSrc="https://images.pexels.com/photos/10152718/pexels-photo-10152718.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
        title="Ekaterina"
      />
    </div>
  );
}

export default StoryReel;
