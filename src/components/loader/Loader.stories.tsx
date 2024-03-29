import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Loader } from "./Loader";

export default {
  title: "Loader Component",
  component: Loader,
  parameters: {
    layout: "fullscreen",
  },
} as ComponentMeta<typeof Loader>;

const Template: ComponentStory<typeof Loader> = (args) => <Loader {...args} />;

export const LoaderComponent = Template.bind({});
