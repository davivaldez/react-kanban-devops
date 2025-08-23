import { PlusIcon } from "@radix-ui/react-icons"
import { Badge, Box, Button, Dialog, Flex, RadioGroup, Text, TextArea, TextField } from "@radix-ui/themes"
import type { FormEventHandler } from "react"
import z from "zod"
import { useTasks } from "../hooks/useTasks"

const CreateTaskSchema = z.object({
  title: z.string(),
  description: z.string(),
  status: z.enum(["todo", "doing", "done"]),
  priority: z.enum(["low", "medium", "high"])
})

export const CreateTaskForm: React.FC = () => {
  const { createTask } = useTasks()

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (ev) => {
    ev.preventDefault()

    const formData = new FormData(ev.currentTarget)

    const title = formData.get("title")
    const description = formData.get("description")
    const status = formData.get("status")
    const priority = formData.get("priority")

    ev.currentTarget.reset()

    const taskData = CreateTaskSchema.parse({ title, description, status, priority })
    await createTask(taskData)
  }

  return (
    <Dialog.Root>
      <Dialog.Trigger>
        <Button>
          <PlusIcon /> New Task
        </Button>
      </Dialog.Trigger>

      <Dialog.Content maxWidth="32rem">
        <Dialog.Title>New Task</Dialog.Title>
        <Dialog.Description size="2" mb="4">
          Add new tasks to your board.
        </Dialog.Description>

        <form onSubmit={handleSubmit}>
          <Flex direction="column" gap="4">
            <Box maxWidth="32rem">
              <Box mb="2">
                <Text as="label" htmlFor="title">Title</Text>
              </Box>
              <TextField.Root placeholder="Enter a title" name="title" id="title" autoFocus required />
            </Box>

            <Box maxWidth="32rem">
              <Box mb="2">
                <Text as="label" htmlFor="description">Description</Text>
              </Box>
              <TextArea placeholder="Describe the task" name="description" id="description" required />
            </Box>

            <Flex gap="8">
              <Box>
                <Text as="div" mb="2">Situation</Text>
                  <RadioGroup.Root name="status" defaultValue="todo">
                    <RadioGroup.Item value="todo">
                      <Badge color="gray">
                        To Do
                      </Badge>
                    </RadioGroup.Item>

                    <RadioGroup.Item value="doing">
                      <Badge color="yellow">
                        Doing
                      </Badge>
                    </RadioGroup.Item>

                    <RadioGroup.Item value="done">
                      <Badge color="green">
                        Done
                      </Badge>
                    </RadioGroup.Item>
                  </RadioGroup.Root>
              </Box>

              <Box>
                <Text as="div" mb="2">Priority</Text>
                <RadioGroup.Root name="priority" defaultValue="low">
                  <RadioGroup.Item value="low">
                    <Badge color="sky">
                      Low
                    </Badge>
                  </RadioGroup.Item>

                  <RadioGroup.Item value="medium">
                    <Badge color="amber">
                      Medium
                    </Badge>
                  </RadioGroup.Item>

                  <RadioGroup.Item value="high">
                    <Badge color="tomato">
                      High
                    </Badge>
                  </RadioGroup.Item>
                </RadioGroup.Root>

              </Box>
            </Flex>

            <Flex gap="2" justify="end">
              <Dialog.Close>
                <Button color="gray" variant="outline">Cancel</Button>
              </Dialog.Close>

              <Button type="submit">Create Task</Button>
            </Flex>
          </Flex>
        </form>
      </Dialog.Content>
    </Dialog.Root>
  )
}