import React from "react";
import "./outterbox.scss";
import InnerBox from "../innerbox/innerbox";

class outterBox extends React.Component {
  constructor() {
    super();
    this.state = {
      sections: [
        {
          title: "hats",
          imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
          id: 1,
          linkUrl: "hats",
        },
        {
          title: "jackets",
          imageUrl:
            "https://i.ibb.co/PwX08TF/1202442-burberry-aw09-emma-watson-jpg-9997.jpg",
          id: 2,
          linkUrl: "jackets",
        },
        {
          title: "sneakers",
          imageUrl: "https://i.ibb.co/kSgkZMh/THE-TEN.jpg",
          id: 3,
          linkUrl: "sneakers",
        },
        {
          title: "womens",
          imageUrl:
            "https://i.ibb.co/SJHRrRw/Anne-Hathaway-religion-hobbies-political-views-celeb-investigator.jpg",
          size: "large",
          id: 4,
          linkUrl: "women",
        },
        {
          title: "mens",
          imageUrl:
            "https://i.ibb.co/nr7Mq3Y/82345241-10156617796041571-8163376251390656512-o.jpg",
          size: "large",
          id: 5,
          linkUrl: "men",
        },
      ],
    };
  }

  render() {
    return (
      <div className="outterboxes">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <InnerBox key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default outterBox;
