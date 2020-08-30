import React from "react";

import ChannelButton from "../ChannelButton";
import { Container, Category, AddCategoryIcon } from "./styles";

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de texto</span>
        <AddCategoryIcon />
      </Category>

      <ChannelButton channelName="chat-livre" />
      <ChannelButton channelName="trabalho" />
      <ChannelButton channelName="valorant" />
      <ChannelButton channelName="csgo" />
      <ChannelButton channelName="osu" />
      <ChannelButton channelName="react" />
    </Container>
  );
};

export default ChannelList;
