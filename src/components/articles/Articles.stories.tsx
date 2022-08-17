import { Articles } from "./Articles";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import withMock from "storybook-addon-mock";

export default {
  title: "Articles section",
  component: Articles,
  parameters: {
    layout: "fullscreen",
  },
  decorators: [withMock],
} as ComponentMeta<typeof Articles>;

const Template: ComponentStory<typeof Articles> = (args) => (
  <Articles {...args} />
);

export const ArticlesSection = Template.bind({});

ArticlesSection.parameters = {
  mockData: [
    {
      url: "https://jsonplaceholder.typicode.com/todos/1",
      method: "GET",
      status: 200,
      response: {
        data: "Mock data for Articles section",
      },
    },
  ],
};
