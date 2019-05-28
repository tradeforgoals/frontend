import React from 'react';

type CdnImageProps = React.InputHTMLAttributes<HTMLImageElement>;

export const CdnImage: React.FunctionComponent<CdnImageProps> = (props) => {
  const { src, alt, width, height } = props;
  let cdnBase = 'https://tradeforgoals-cdn.azurewebsites.net';

  if (src && src.indexOf('data:image') > -1) {
    cdnBase = '';
  }

  return (
    <img src={`${cdnBase}${src}`} alt={alt} width={width} height={height} />
  );
};