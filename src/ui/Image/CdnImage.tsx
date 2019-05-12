import React from 'react';

type CdnImageProps = React.InputHTMLAttributes<HTMLImageElement> & {

};

export const CdnImage: React.FunctionComponent<CdnImageProps> = (props) => {
  const { src, alt, width, height } = props;
  const cdnBase = 'https://tradeforgoals-cdn.azurewebsites.net';

  return (
    <img src={`${cdnBase}${src}`} alt={alt} width={width} height={height} />
  );
};