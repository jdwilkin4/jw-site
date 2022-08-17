import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MobileMenuIcon } from "./MobileMenuIcon";

export default {
  title: "Mobile menu icon",
  component: MobileMenuIcon,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof MobileMenuIcon>;

const Template: ComponentStory<typeof MobileMenuIcon> = (args) => (
  <MobileMenuIcon {...args} />
);

export const MobileMenuIconComponent = Template.bind({});
