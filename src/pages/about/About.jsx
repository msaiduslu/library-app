import React from "react";
import {
  AboutContainer,
  IconContainer,
  InfoContainer,
  ProfileImg,
} from "./About.style";
import Icon from "../../components/icon/Icon";
import { iconData } from "../../helper/iconData";
const About = () => {
  return (
    <AboutContainer>
      <ProfileImg
        src="https://img.freepik.com/premium-psd/3d-man-casual-work-from-home-technology-communication-teamwork-laptop-workshop-message_593668-231.jpg?w=826"
        alt="Musu"
      />
      <InfoContainer>
        <h2>Hi, I'm MSU</h2>
        <h3>I'm currently learning Full-Stack Development Languages.</h3>
        <h4>
          I've already known JS, ReactJS, NextJs, ReactNative, Django, NodeJS,
          MongoDB,SQL, Python, AWS Services.
        </h4>
        <h4>💬 You can ask me anything you want to know</h4>
        <IconContainer>
          {iconData.map((item) => (
            <a href="item.href">
              <Icon icon={item.icon} path={item.path} hoverColor={item.color} />
            </a>
          ))}
        </IconContainer>
      </InfoContainer>
    </AboutContainer>
  );
};

export default About;
