import styled from 'styled-components/macro';

export const TradeProduct = styled.div`
  position: relative;

  img {
    max-width: 100%;
  }
`;

export const TradeProductOverlay = styled.div`
  position: absolute;
  left: 10px;
  right: 10px;
  bottom: 10px;
  color: #FFF;
  font-size: 15px;
  text-shadow: 0 0 3px #000;
`;