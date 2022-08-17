import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ErrorMessage } from "./ErrorMessage";

export default {
  title: "Error message",
  component: ErrorMessage,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof ErrorMessage>;

const Template: ComponentStory<typeof ErrorMessage> = (args) => (
  <ErrorMessage {...args} />
);

export const ErrorMessageComponent = Template.bind({});
