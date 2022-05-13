import React from 'react';

const PreviewArticle = () => {
  return( 
    <div className="blog-preview">
      <img src={require("./FSTorganicBeans2010.jpg")} style={{width:"250px", height:"500px" }}/>
      <h2>Lorem ipsum dolor site amet</h2>
      <small>12 mai 2022</small>
    </div>
)};

export default PreviewArticle;