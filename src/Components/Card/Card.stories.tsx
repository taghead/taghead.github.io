import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Card } from "./Card";

export default {
  title: "Card",
  component: Card,
} as ComponentMeta<typeof Card>;

export const Primary: ComponentStory<typeof Card> = () => <Card />;
