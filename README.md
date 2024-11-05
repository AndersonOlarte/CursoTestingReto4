# Todo App - Automated Testing with Playwright

This project uses [Playwright](https://playwright.dev/) for automated end-to-end testing of a Todo app. Playwright enables cross-browser testing, allowing us to ensure the Todo app works consistently across different browsers and devices. The tests cover core functionality, such as adding, editing, marking as complete, and deleting tasks.

## Table of Contents

- [Project Overview](#project-overview)
- [Test Coverage](#test-coverage)
- [Tech Stack](#tech-stack)
- [Setup](#setup)
- [Running Tests](#running-tests)
- [Writing Tests](#writing-tests)
- [Folder Structure](#folder-structure)
- [Contributing](#contributing)
- [License](#license)

## Project Overview

This Todo app provides a platform for users to manage tasks with essential features like adding, updating, deleting, and completing tasks. The Playwright test suite automates checks on these features to ensure quality and reliability.

## Test Coverage

The Playwright test suite includes coverage for:

- **Task Addition**: Verify that users can add new tasks to the list.
- **Marking as Completed**: Test that users can mark tasks as completed.
- **Task clean up**: Once a task is completed it should be clean up from the TODO list


## Tech Stack

- **Testing Framework**: [Playwright](https://playwright.dev/)
- **Assertion Library**: Built-in Playwright assertions
- **TypeScript**: Choose TypeScript if type safety is preferred
- **CI/CD Integration**: GitHub Actions 

## Setup

To set up the project and Playwright for testing:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/AndersonOlarte/CursoTestingReto4.git
   cd todo-app-playwright-tests
