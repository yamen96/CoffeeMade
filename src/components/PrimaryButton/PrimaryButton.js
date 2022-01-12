import styled from "styled-components"

export const PrimaryButton = styled.button`
  background-color: ${({theme}) => theme.primaryButtonColor };
  padding: 10px;
  border: none;
  margin-top: 25px;
  border-radius: 5px;
  color: ${({theme}) => theme.primaryButtonTextColor };
  cursor: pointer;
  font-size: 13pt;
  width: 100%;
  transition: all 0.15s ease-in-out;
  &:hover {
    background-color: ${({theme}) => theme.primaryButtonColorOnHover };
  }
`