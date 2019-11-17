import React from 'react'

export const Figure = ({type="gif", src, caption, width}) => {
  let media;
  switch (type) {
    case "video":
      media = <video src={src} width={width ? width : "100%"} />;
      break;
    case "gif":
      media = <video src={src} width={width ? width : "450px"} autoPlay loop muted playsInline />;
      break;
    default:
      break;
  }
  return (
    <figure>
      {media}
      <figcaption>{caption}</figcaption>
    </figure>
  )
}

export const Iframe = ({src, title, height="400px", width="100%"}) => (
  <>
    <iframe src={src} title={title} height={height} width={width} />
  </>
)