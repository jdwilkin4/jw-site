import { About } from "./About";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "About section",
  component: About,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof About>;

const Template: ComponentStory<typeof About> = (args) => <About {...args} />;

export const AboutSection = Template.bind({});
