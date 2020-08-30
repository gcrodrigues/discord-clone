import styled from "styled-components";
import { Settings, Mic, Headset } from "styled-icons/material";

export const Container = styled.div`
  grid-area: UI;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: var(--quaternary);
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.2);
  padding: 10px;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.div`
  width: 32px;
  height: 32px;

  border-radius: 50%;
  background-color: var(--gray);
`;

export const UserData = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 8px;

  > strong {
    font-size: 15px;
    color: var(--white);
    display: block;
  }

  > span {
    color: var(--gray);
    font-size: 13px;
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;

  svg + svg {
    margin-left: 5px;
  }
`;

export const MicIcon = styled(Mic)`
  width: 20px;
  height: 20px;

  cursor: pointer;

  color: var(--white);
  opacity: 0.7;

  transition: opacity 0.2s;

  &:hover,
  &:active {
    opacity: 1;
  }
`;

export const HeadphoneIcon = styled(Headset)`
  width: 20px;
  height: 20px;

  cursor: pointer;

  color: var(--white);
  opacity: 0.7;

  transition: opacity 0.2s;

  &:hover,
  &:active {
    opacity: 1;
  }
`;

export const SettingsIcon = styled(Settings)`
  width: 20px;
  height: 20px;

  cursor: pointer;

  color: var(--white);
  opacity: 0.7;

  transition: opacity 0.2s;

  &:hover,
  &:active {
    opacity: 1;
  }
`;
