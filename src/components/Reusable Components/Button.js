import styled from 'styled-components';

export const Btn = styled.button`
  display: block;
  padding-top: ${p => p.theme.space[3]}px;
  padding-bottom: ${p => p.theme.space[3]}px;
  padding-left: ${p => p.theme.space[5]}px;
  padding-right: ${p => p.theme.space[5]}px;
  border: ${p => p.theme.borders.none};
  border-radius: ${p => p.theme.radii.md};
  background-color: ${p => p.theme.colors.primary};
  color: ${p => p.theme.colors.white};
  cursor: pointer;
  transition: background-color 300ms cubic-bezier(0.4, 0, 0.2, 1);
  margin-left: ${p => p.theme.space[3]}px;
  margin-top: ${p => p.theme.space[5]}px;

  :hover:not(:disabled),
  :focus:not(:disabled) {
    background-color: teal;
  }
`;
