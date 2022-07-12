import React from "react";
import { Component } from "react";
import ImageGallery from "react-image-gallery";

const images = [
  {
    original: "/images/Bridal/IMG_3712.PNG",
    thumbnail: "/images/Bridal/IMG_3712.PNG",
  },
  {
    original: "/images/Bridal/IMG_3713.PNG",
    thumbnail: "/images/Bridal/IMG_3713.PNG",
  },
  {
    original: "/images/Bridal/IMG_3715.PNG",
    thumbnail: "/images/Bridal/IMG_3715.PNG",
  },
  {
    original: "/images/Wedding/8a1bc2c8-561a-444b-81e4-cf7af4b6fc3c.jpg",
    thumbnail: "/images/Wedding/8a1bc2c8-561a-444b-81e4-cf7af4b6fc3c.jpg",
  },
  {
    original: "/images/Wedding/1b919406-6388-4bf0-83e0-f0486e6bfc81.jpg",
    thumbnail: "/images/Wedding/1b919406-6388-4bf0-83e0-f0486e6bfc81.jpg",
  },
  {
    original: "/images/Wedding/9c1353c3-3890-42a8-8487-94a8e4ac6841.jpg",
    thumbnail: "/images/Wedding/9c1353c3-3890-42a8-8487-94a8e4ac6841.jpg",
  },
];

class MyGallery extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container mt-4">
          <iframe
            className="mt-4 rounded opacity-75"
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/jpv2tMJJuz0"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <div className="mt-3">
            <ImageGallery items={images} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default MyGallery;
