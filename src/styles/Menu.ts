import styled from 'styled-components';
import { Box } from 'grommet';

export const Menu = styled(Box)`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 40px;
  align-items: center;
  background: #fafafa;
  border-bottom: 1px solid #f2f2f2;
`;

export const MenuItem = styled.div`
  padding: 0 8px;
`;