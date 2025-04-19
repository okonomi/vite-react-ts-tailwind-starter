import type { Meta, StoryObj } from "@storybook/react"
import { App } from "./App"

const meta = {
  title: "Components/App",
  component: App,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof App>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
