import type { Meta, StoryObj } from "@storybook/react"
import { Button } from "./Button"

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    color: {
      control: { type: "radio" },
      options: ["blue", "red", "gray"],
    },
    type: {
      control: { type: "radio" },
      options: ["button", "submit", "reset"],
    },
    onClick: { action: "clicked" },
  },
}

export default meta

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    children: "Primary Button",
    color: "blue",
  },
}

export const Red: Story = {
  args: {
    children: "Red Button",
    color: "red",
  },
}

export const Gray: Story = {
  args: {
    children: "Gray Button",
    color: "gray",
  },
}

export const WithOnClick: Story = {
  args: {
    children: "Click Me",
    onClick: () => alert("Button clicked!"),
  },
}
