import React, { useEffect, useRef, useState } from "react";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import stories from "../../data/Stories.json";
const Story = () => {
  const styleStory = (urlImage) => {
    return {
      backgroundImage: `url(${urlImage})`,
    };
  };

  const [scrollPosition, setScrollPosition] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const [storiesWidth, setStoriesWidth] = useState(0);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(false);
  const scrollStep = 100;

  useEffect(() => {
    const storiesContainer = document.querySelector(".stories-container");
    const storiesContent = document.querySelector(".stories");
    const containerWidth = storiesContainer.clientWidth; //Nhận được kích thước của containerwidht
    const storiesWidth = storiesContent.clientWidth; //Giá trị ScrollWidth bằng với chiều rộng tối thiểu mà k cần sử dụng cuộn X
    setContainerWidth(containerWidth);
    setStoriesWidth(storiesWidth);
    handleScrollVisibility(containerWidth, storiesWidth, scrollPosition);
  }, [scrollPosition]);
  const handleScrollVisibility = (
    containerWidth,
    storiesWidth,
    scrollPosition
  ) => {
    setShowLeftButton(scrollPosition > 0);
    setShowRightButton(containerWidth + scrollPosition < storiesWidth);
  };

  const handleScrollLeft = () => {
    setScrollPosition((prevPosition) => prevPosition - scrollStep);
  };

  const handleScrollRight = () => {
    setScrollPosition((prevPosition) => prevPosition + scrollStep);
  };

  return (
    <div className="stories-container">
      {showLeftButton && (
        <div className="scroll-button left" onClick={handleScrollLeft}>
          <ArrowBackIosIcon />
        </div>
      )}
      {showRightButton && (
        <div className="scroll-button right" onClick={handleScrollRight}>
          <ArrowForwardIosIcon />
        </div>
      )}
      <div
        className="stories"
        style={{ transform: `translateX(${-scrollPosition}px)` }}
      >
        <div className="story-box">
          <p>
            <img
              src="https://i.pinimg.com/236x/12/37/b3/1237b30268db9ee0c9cbe3a79b1ff8fa.jpg"
              className="avatar"
            />
          </p>
          <p className="username">Add to Story</p>
        </div>
        {stories.map((story) => (
          <div
            className="story-box"
            key={story.id}
            style={styleStory(story.background)}
          >
            <p>
              <img src={story.avatar} className="avatar" />
            </p>
            <p className="username">{story.username}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Story;
