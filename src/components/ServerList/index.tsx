import React from "react";

import { Container, Separator } from "./styles";
import ServerButton from "../ServerButton";
const ServerList: React.FC = () => {
  return (
    <Container>
      <ServerButton isHome />

      <Separator />

      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton mentions={6} />
      <ServerButton />
      <ServerButton />
      <ServerButton mentions={15} />
      <ServerButton hasNotifications />
      <ServerButton />
      <ServerButton hasNotifications />
      <ServerButton hasNotifications />
      <ServerButton />
    </Container>
  );
};

export default ServerList;
