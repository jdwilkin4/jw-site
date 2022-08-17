import { Media } from "./Media";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import withMock from "storybook-addon-mock";

export default {
  title: "Media section",
  component: Media,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [withMock],
} as ComponentMeta<typeof Media>;

const Template: ComponentStory<typeof Media> = (args) => <Media {...args} />;

export const MediaSection = Template.bind({});

MediaSection.parameters = {
  mockData: [
    {
      url: "https://jsonplaceholder.typicode.com/todos/1",
      method: "GET",
      status: 200,
      response: {
        data: "Mock data for Media section",
      },
    },
  ],
};
