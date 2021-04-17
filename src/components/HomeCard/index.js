import React from "react";
import { Image } from "react-bootstrap";
import Images from "../../images.json";
import "./style.css";

function HomeCard() {
  return (
    <div className="aboutMe">
      <Image className="aboutMeImage"
        height="150"
        width="150"
        variant="top"
        src={Images[0].img}
        roundedCircle
        fluid
      />
      <p>
        Well for starters my name, clearly, is David Eldridge! I have 12 years
        of management experience - close to half my life! - and I am so excited
        to bring those soft skills to the tech world. After graduating college
        (with a triple major) I had wanted to get into coding but an upside down
        economy and a need to alleviate my student loan debt I abstained for
        several years. During that time I had a 6 year career with Enterprise
        Rent-A-Car working my way from Management Trainee to District Manager.
        After stepping away to focus on my family and find what I really wanted
        to do with my life I looked into a large array of career choices. From
        being an insurance agent, to a call center manager, to the medical field
        nothing scratched the itch I had. That itch was to be challenged
        everyday and work in a logical yet creative field. I started to teach
        myself coding and quickly realized this is what I wanted to do. With a
        wide array of specialties to companies and market sectors it was
        specific enough to know what my next step would be but also broad enough
        to feel like I wasn't going to get trapped in something overly specific
        too early. I did a lot of research in different programs and found the
        Rutgers program to strike the right balance of price, career services,
        and time. I am extremely proud, excited and motivated to ace the Rutgers
        Boot Camp program and help as many fellow students as possible. If
        you've made it this far thank you for your time and I hope to be working
        with you in the future!
      </p>
    </div>
  );
}

export default HomeCard;
