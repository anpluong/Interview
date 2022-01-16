# Code Review Assessment

## Instructions

Assume that you're a senior engineer working with a junior engineer on an App. The junior engineer has just submitted a merge request for the entire app. Your job is to review the code and give feedback to the junior engineer to bring it up to production quality.

1. Review the project requirements listed in the
   introduction.
2. Review the commit message in commit.md.
3. Review the source code.
4. Test the application in the app window.
5. Provide your feedback as if you were commenting
   in an MR, in the form of a list of improvements.
   Revisit any of the materials as needed.

   You should aim to spend 15 minutes, your feedback doesn't need to be 100%.

## Introduction

This is a Todo App with the following requirements:

- Creates a Todo by entering text into the input and
  clicking the Add Icon, or pressing Enter in the
  input.
- Displays Todos in descending order by time created,
  so that the newest todo is at the top.
- Toggle a Todos complete status by clicking the
  checkbox next to it.
- No Duplicate Todos are allowed.
- No Empty Todos are allowed.

## Organization

### Stackblitz

On the left side you will see the PROJECT window, here you will find all the files associated with the project. Clicking on a file will open it here in the editor.

On the right side you will find the Todo App running, and below that the Console tab to view logs.

### Project

There are 2 components in this application, the main App component, and the Todo component.

This README introduces the task and describes the organization.

You will find a mock commit message in commit.md that describes the changes in the commit.
