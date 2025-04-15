import { describe, expect, it } from "vitest"
import { render } from "vitest-browser-react"
import { App } from "./App"
const context = describe

describe("App", () => {
  it("renders initial count", () => {
    const { getByText } = render(<App />)
    expect(getByText("Count: 0")).toBeInTheDocument()
  })

  context("when incrementing", () => {
    it("increments count", async () => {
      const { getByText, getByRole } = render(<App />)

      await getByRole("button", { name: "Increment " }).click()

      await expect.element(getByText("Count: 1")).toBeInTheDocument()
    })
  })

  context("when decrementing", () => {
    it("decrements count", async () => {
      const { getByText, getByRole } = render(<App />)

      await getByRole("button", { name: "Decrement " }).click()

      await expect.element(getByText("Count: -1")).toBeInTheDocument()
    })
  })

  context("when resetting", () => {
    it("resets count", async () => {
      const { getByText, getByRole } = render(<App />)

      await getByRole("button", { name: "Reset " }).click()

      await expect.element(getByText("Count: 0")).toBeInTheDocument()
    })
  })
})
