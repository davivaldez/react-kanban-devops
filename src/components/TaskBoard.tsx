import type React from "react";
import type { Task } from "../entities/Task";
import { Badge, Flex, Grid, ScrollArea } from "@radix-ui/themes";
import { TaskCard } from "./TaskCard";

export const TaskBoard: React.FC = () => {

  const tasksTodo: Task[] = [
    {
      "id": 1,
      "title": "Plan marketing strategy",
      "description": "Develop a comprehensive marketing strategy for the upcoming quarter.",
      "status": "todo",
      "priority": "low"
    },
    {
      "id": 4,
      "title": "Update project documentation",
      "description": "Revise and update the project documentation to reflect recent changes.",
      "status": "todo",
      "priority": "medium"
    }
  ]

  const tasksInProgress: Task[] = [
    {
      "id": 2,
      "title": "Team training session",
      "description": "Organize a training session for the team on the new project management tool.",
      "status": "doing",
      "priority": "medium"
    }
  ]

  const tasksDone: Task[] = [
    {
      "id": 3,
      "title": "Client feedback review",
      "description": "Analyze feedback from clients and prepare a report with actionable insights.",
      "status": "done",
      "priority": "high"
    }
  ]

  return (
    <ScrollArea scrollbars="horizontal">
      <Grid columns="3" gap="4" minWidth="64rem">
        <Flex direction="column" gap="4">
          <Badge size="3" color="gray">
            To Do (1)
          </Badge>

          {tasksTodo.map(task => <TaskCard key={task.id} task={task} />)}
        </Flex>

        <Flex direction="column" gap="4">
          <Badge size="3" color="yellow">
            Doing (1)
          </Badge>

          {tasksInProgress.map(task => <TaskCard key={task.id} task={task} />)}
        </Flex>

        <Flex direction="column" gap="4">
          <Badge size="3" color="green">
            Done (1)
          </Badge>

          {tasksDone.map(task => <TaskCard key={task.id} task={task} />)}
        </Flex>
      </Grid>
    </ScrollArea>
  )
}