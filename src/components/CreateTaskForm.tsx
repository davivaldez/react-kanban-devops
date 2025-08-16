import { PlusIcon } from "@radix-ui/react-icons"
import { Box, Button, Dialog, Flex, RadioGroup, Text, TextArea, TextField } from "@radix-ui/themes"

export const CreateTaskForm: React.FC = () => {
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

        <form>
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
                      To Do
                    </RadioGroup.Item>

                    <RadioGroup.Item value="doing">
                      Doing
                    </RadioGroup.Item>

                    <RadioGroup.Item value="done">
                      Done
                    </RadioGroup.Item>
                  </RadioGroup.Root>
              </Box>

              <Box>
                <Text as="div" mb="2">Priority</Text>
                <RadioGroup.Root name="priority" defaultValue="low">
                  <RadioGroup.Item value="low">
                    Low
                  </RadioGroup.Item>

                  <RadioGroup.Item value="medium">
                    Medium
                  </RadioGroup.Item>

                  <RadioGroup.Item value="high">
                    High
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