import { Contact } from "./Contact";
import { ComponentStory, ComponentMeta } from "@storybook/react";

export default {
  title: "Contact section",
  component: Contact,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Contact>;

const Template: ComponentStory<typeof Contact> = (args) => (
  <Contact {...args} />
);

export const ContactSection = Template.bind({});
