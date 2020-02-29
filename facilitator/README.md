# Facilitators Guide: Updating and Deleting Resources

## Overview

Today, we introduce the ability to update or delete a book from the collection. The to-do app demo contains the code to update a single task, but not the code to delete a book. Discuss the limitation of HTML5 forms only being capable of getting and posting resources. There are several work-arounds, and the one we have chosen to teach involves the `method-override` npm package.

## Learning Objectives

Review the detailed objectives in today's [student-facing readme](../README.md).

## Preparation

- Remind students that they will work with the same partner for labs 2 and 3.
- Familiarize yourself with the mechanics behind [Method Override](./DEMO.md)
- Practice [the demo](../demo/todo-app)

## Lecture Outline

Below is the expected lecture outline and flow. One possible way to present this material is documented in the [example lecture](../facilitator/LECTURE-EXAMPLE.md) notes.

### Warm-Up

- **Student Analysis** (5 min)
  - Show or print the [warm-up code](../warm-up/warm-up.md)
- **Debrief** (5-10 min)
  - Refer to the [Warmup Notes](../warm-up/NOTES.md)
  - Optionally demo the running code at Repl.it

### Shred Talk

- **Why**
  - Daily "Shred Talks" introduce the student to a new javascript coding concept, setting them up to complete the daily "Code Challenge" series
- **What**
  - Refer to the [challenge documentation](../challenges/README.md)
- **How** (10 min)
  - Follow the [Demo Code](../challenges/DEMO.md)
- **Note**
  - If you are short on time, this can be omitted from class lecture. There are official videos that students can watch in lieu of you leading this portion of class.

### Code Review

- Conduct another exercise where the class traces the path of code execution. This exercise will differ from the exercise in class 7 because of server-side rendering and EJS loading partials.
- If it helps, use a group's broken code for code review in a mob-debugging session. Facilitate this session to prevent students from talking over each other, but allow students to suggest the next steps and lead the debugging process. This may also be an option in lecture 14, depending on the progress of the cohort.

### Delete and Update

- **Why** (5 min)
  - Delete and Update complete the CRUD cycle
  - Results in a truly "Full Stack" application
- **What** (10 min)
  - Identify the resource you want to work with
  - Usually by ID
  - Communicate your intent to the server
    - ID, Action to take, and possibly any changed data
- **How** (30 min)
  - The server wants to use REST verbs (GET/POST/PUT/DELETE)
  - The browser can only use GET and POST
  - We need some help to send those Actions down
    - Express has custom middleware called "Method Override" that allows us to fudge this.
    - Do a walk through of just the middleware to explain it's operation.
- **Experimentation and Discovery Ideas**

### Demo Build

- Implement Update and Delete in the To Do app, using Method Override

## Lab Notes

- Today will likely serve as a catch-up day if students have fallen behind.
- Be prepared for off-topic questions as a result

## What changed from the previous class?

- The user can now update or delete a single book.

## What might students struggle with today?

- Forgetting to include the hidden input in their form

## Past bugs, issues or surprises

## General Comments and Notes

![Method override](whiteboard-diagrams/method-override.png)
