# AI Safety Incident Log API

This project implements a simple RESTful API service to log and manage hypothetical AI safety incidents. It is designed to demonstrate backend development skills, including API design, data persistence, and request/response handling.

---

## Quick Links
- [Technology Stack](#technology-stack)
- [Features](#features)
- [API Endpoints](#api-endpoints)
  - [GET /api/v1/incidents/getAllIncidents](#1-get-api-v1-incidents-getallincidents)
  - [POST /api/v1/incidents/logIncident](#2-post-api-v1-incidents-logincident)
  - [GET /api/v1/incidents/getIncidentById/:id](#3-get-api-v1-incidents-getincidentbyidid)
  - [DELETE /api/v1/incidents/deleteIncident/:id](#4-delete-api-v1-incidents-deleteincidentid)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
  - [Database Setup](#database-setup)
  - [Running the API](#running-the-api)
- [Examples of API Usage](#examples-of-api-usage)
  - [Using curl](#using-curl)
- [Challenges and Design Decisions](#challenges-and-design-decisions)


---

## Technology Stack
- **Language**: JavaScript (Node.js)
- **Framework**: Express.js
- **Database**: MongoDB (with Mongoose ODM)

---

## Features
- Create, retrieve, and delete AI safety incidents.
- Basic input validation (e.g., allowed severity values).
- Pre-populated database with sample incidents for testing.
- Adherence to RESTful API principles.
- Error handling for invalid requests and database issues.

---

## API Endpoints

### 1. `GET /api/v1/incidents/getAllIncidents`
- **Description**: Retrieve all incidents stored in the database.
- **Response**:
  ```json
  [
    { "id": 1, "title": "...", "description": "...", "severity": "...", "reported_at": "..." },
    { "id": 2, "title": "...", "description": "...", "severity": "...", "reported_at": "..." }
  ]
  ```

### 2. `POST /api/v1/incidents/logIncident`
- **Description**: Log a new incident in the database.
- **Request Body**:
  ```json
  {
    "title": "New Incident Title",
    "description": "Detailed description here.",
    "severity": "Medium"
  }
  ```
- **Response** (on success):
  ```json
  {
    "id": 3,
    "title": "New Incident Title",
    "description": "Detailed description here.",
    "severity": "Medium",
    "reported_at": "2025-04-02T18:00:00Z"
  }
  ```
- **Validation**: Ensures `title`, `description`, and `severity` are provided, and `severity` is one of `Low`, `Medium`, or `High`.

### 3. `GET /api/v1/incidents/getIncidentById/:id`
- **Description**: Retrieve a specific incident by its ID.
- **Response** (on success):
  ```json
  {
    "id": 1,
    "title": "...",
    "description": "...",
    "severity": "...",
    "reported_at": "..."
  }
  ```
- **Error**: Returns `404 Not Found` if the ID does not exist.

### 4. `DELETE /api/v1/incidents/deleteIncident/:id`
- **Description**: Delete an incident by its ID.
- **Response** (on success): `204 No Content` or a confirmation message.
- **Error**: Returns `404 Not Found` if the ID does not exist.

---

## Getting Started

### Prerequisites
1. **Node.js**: Install from [Node.js official site](https://nodejs.org).
2. **MongoDB**: Set up a local or cloud instance (e.g., MongoDB Atlas).

### Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/incident-log-api.git
   ```
2. Navigate to the project directory:
   ```bash
   cd incident-log-api
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

### Configuration
1. Create a `.env` file in the root directory with the following variables:
   ```env
   MONGO_URI=mongodb://localhost:27017/incident-log-api
   PORT=8000
   ```
2. Replace `MONGO_URI` with your MongoDB connection string if using a cloud instance.

### Database Setup
To pre-populate the database with sample data:
1. Run the seed script:
   ```bash
   node seed.js
   ```
2. Verify the database contains the sample incidents.

### Running the API
Start the server with:
```bash
npm start
```
The API will be available at `http://localhost:8000`.

---

## Examples of API Usage

### Using `curl`
#### Retrieve all incidents:
```bash
curl -X GET http://localhost:8000/api/v1/incidents/getAllIncidents
```

#### Create a new incident:
```bash
curl -X POST http://localhost:8000/api/v1/incidents/logIncident \
-H "Content-Type: application/json" \
-d '{"title":"Example Incident","description":"This is a test incident.","severity":"Medium"}'
```

#### Retrieve a specific incident:
```bash
curl -X GET http://localhost:8000/api/v1/incidents/getIncidentById/1
```

#### Delete an incident:
```bash
curl -X DELETE http://localhost:8000/api/v1/incidents/deleteIncident/1
```

---

## Challenges and Design Decisions
- **Validation**: Implemented server-side validation to ensure robust data integrity.
- **Error Handling**: Added descriptive error messages for missing or invalid requests.
- **Scalability**: Used MongoDB to handle potentially large datasets efficiently.

---



