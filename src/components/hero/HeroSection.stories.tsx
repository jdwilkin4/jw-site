import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Hero } from "./HeroSection";

export default {
  title: "Hero Section",
  component: Hero,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Hero>;

const Template: ComponentStory<typeof Hero> = (args) => <Hero {...args} />;

export const HeroSection = Template.bind({});
