# Paired Programming Test - Person Management API

Welcome to the paired programming exercise! In this task, you will be building a RESTful API to manage person data. The API should support basic CRUD operations, authentication, and include unit tests.

## Requirements

### 1. Database Models

Define the schema for person data with the following fields:
- First Name
- Last Name
- Date of Birth
- Email Address

### 2. Authentication

Create an authentication route that allows users to log in. You will need to:
- Implement a login route that issues a JWT token.
- Implement middleware to protect the other routes, requiring a valid JWT token.

### 3. CRUD Routes

Implement the following routes:
- POST `/persons`: Create a new person.
- GET `/persons`: Retrieve a list of all persons.
- GET `/persons/:id`: Retrieve a specific person by ID.
- PUT `/persons/:id`: Update a specific person by ID.
- DELETE `/persons/:id`: Delete a specific person by ID.

All routes except login should require authentication.

### 4. Unit Tests

Write unit tests to cover both success and failure scenarios for the above routes. Use Jest or another testing framework of your choice.

### 5. Comments

Please include meaningful inline comments in your code to explain the logic and any decisions made.

## Cloning and Setup

### Cloning the Repository

1. Open your terminal and navigate to the directory where you want to clone the repository.
2. Run the following command:

   ```bash
   git clone https://github.com/hcevikGA/ga-ppt.git

3. Navigate to the project directory:
   
   ```bash
   cd ga-ppt

### Setup

1. Install dependencies
   ```bash
   npm install
4. Start the server
   ```bash
   npm start
6. Run tests
   ```bash
   npm test

## Evaluation Criteria
- Code quality and style
- Proper implementation of REST principles
- Proper handling of authentication
- Coverage and quality of unit tests
- Thoughtful inline comments and documentation

## Time Allocation
You have 1 hour and 30 minutes for this task. If you have any questions or need further clarification on any part of the task, please don't hesitate to ask.

Good luck!
