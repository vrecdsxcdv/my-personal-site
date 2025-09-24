import React from "react";

type Props = React.ImgHTMLAttributes<HTMLImageElement> & { src: string };

function withBase(src: string) {
  if (/^https?:\/\//i.test(src)) return src;
  const clean = src.replace(/^\/+/, "");
  return `${import.meta.env.BASE_URL}${clean}`;
}

export default function Image({ src, ...rest }: Props) {
  return <img src={withBase(src)} {...rest} />;
}
