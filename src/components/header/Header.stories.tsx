import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Header } from "./Header";

export default {
  title: "Header section",
  component: Header,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => <Header {...args} />;

export const HeaderSection = Template.bind({});
