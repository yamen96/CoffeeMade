import React from 'react';
import { useSelector } from 'react-redux';

const ImageViewer = () => {
	const imgData = useSelector((state) => state.contents.content);

  return <div style={{display: "flex", justifyContent: "center"}}>
    <img src={`data:image/png;base64,${imgData}`} style={{maxWidth: "100%"}}/>
  </div>
}

export default ImageViewer;