# Serial Tracker Backlog

This document complements the main project plan and provides a detailed backlog organized by epics and tickets.

**Technology Stack:** React (Frontend) + Node.js (Backend) using two separate repositories (polyrepo).

### Repository Labels

- **[FE]** Frontend repository
- **[BE]** Backend repository
- **[FE+BE]** Requires coordination between frontend and backend teams

### Effort Estimates

- **S** Small
- **M** Medium
- **L** Large

---

# Epic 0 — Project Setup

## EP0-1. Initialize Frontend Repository [FE] (S)

### Tasks

- Create React application using Vite and TypeScript
- Configure ESLint and Prettier
- Configure basic CI pipeline:
  - Lint
  - Build validation on push

### Definition of Done

- Every push to `main` passes CI checks successfully

---

## EP0-1b. Initialize Backend Repository [BE] (S)

### Tasks

- Create Node.js application using Express or Fastify
- Configure TypeScript
- Configure ESLint and Prettier
- Configure basic CI pipeline:
  - Lint
  - Build validation on push

### Definition of Done

- Every push to `main` passes CI checks successfully

---

## EP0-2. Obtain TMDb API Access [BE] (S)

### Tasks

- Register for TMDb API access
- Store API key in environment variables
- Create `.env.example`

### Definition of Done

- Test request successfully returns data from TMDb

---

## EP0-3. Create Database and ORM Schema [BE] (M)

### Tasks

- Create PostgreSQL database using Neon
- Configure Prisma ORM
- Create initial models:
  - User
  - Series
  - UserSeries

### Definition of Done

- Database migrations run successfully
- Tables are created
- `.env.example` contains required environment variables

---

## EP0-4. Define API Contract [FE+BE] (M)

### Tasks

Create a shared API specification covering:

- Authentication
- Series search
- User statuses
- Episode tracking
- Notifications

### Definition of Done

- Both repositories reference the same API contract document

---

# Epic 1 — Authentication

## EP1-1. User Registration API [BE] (M)

### Tasks

- Create registration endpoint
- Validate email and password
- Hash passwords using bcrypt or Argon2

### Definition of Done

- Users are stored in the database
- Passwords are never stored in plain text

---

## EP1-1b. Registration Form [FE] (S)

### Tasks

- Build registration form UI
- Connect registration API
- Display validation errors

### Definition of Done

- Successful registration redirects user to the main screen
- Validation errors are shown properly

---

## EP1-2. JWT Authentication [BE] (M)

### Tasks

- Create login endpoint
- Generate JWT tokens
- Validate JWT for protected routes

### Definition of Done

- Protected endpoints return `401 Unauthorized` without a valid token

---

## EP1-2b. Login and Logout UI [FE] (M)

### Tasks

- Create login form
- Store authentication token
- Attach token to API requests
- Implement logout

### Definition of Done

- Protected pages require authentication
- Logout works correctly

---

## EP1-3. Secure Private API Routes [BE] (S)

### Tasks

- Implement authentication middleware
- Restrict access to user-specific data

### Definition of Done

- Unauthorized requests return `401` or `403`

---

# Epic 2 — Series Catalog and Personal Library

## EP2-1. Series Search Endpoint [BE] (M)

### Tasks

- Create backend proxy for TMDb API
- Return search results to frontend

### Definition of Done

- Search endpoint returns relevant results
- Empty and error responses are handled

---

## EP2-1b. Search Interface [FE] (S)

### Tasks

- Build search input
- Display search results

### Definition of Done

- Search results are rendered as series cards

---

## EP2-2. Series and UserSeries Data Models [BE] (M)

### Tasks

Create the following models:

### Series

- tmdb_id
- title
- poster
- status (`ongoing`, `ended`, `canceled`)
- metadata

### UserSeries

- user_id
- series_id
- user_status
- date_added

### Allowed User Status Values

- `plan_to_watch`
- `watching`
- `watched`
- `not_worth_it`

### Definition of Done

- Database schema is finalized
- Series status and user status are stored separately

---

## EP2-3. Add Series Endpoint [BE] (M)

### Tasks

- Create endpoint that adds a series to the user's library

### Definition of Done

- New entries are created with default status `plan_to_watch`

---

## EP2-3b. Add Series Button [FE] (S)

### Tasks

- Add button to series card
- Update UI after successful request

### Definition of Done

- Added series appears immediately in the user's list

---

## EP2-4. Update User Status Endpoint [BE] (S)

### Tasks

- Create endpoint for updating user_status

### Definition of Done

- Only allowed status values are accepted
- Changes are saved successfully

---

## EP2-4b. User Status Selector [FE] (S)

### Tasks

- Create status switching component

### Definition of Done

- Status changes are saved and displayed immediately

---

# Epic 3 — Episode Tracking

## EP3-1. Episode List Endpoint [BE] (M)

### Tasks

- Retrieve seasons and episodes from TMDb
- Return structured episode data

### Definition of Done

- Endpoint returns season → episode hierarchy

---

## EP3-1b. Episode List UI [FE] (S)

### Tasks

- Display seasons and episodes

### Definition of Done

- Users can browse season and episode information

---

## EP3-2. Episode Progress Endpoint [BE] (M)

### Tasks

- Store watched state for episodes

### Definition of Done

- Episode progress persists between sessions

---

## EP3-2b. Episode Watched Checkbox [FE] (S)

### Tasks

- Add watched toggle for episodes
- Connect to progress endpoint

### Definition of Done

- Watched state remains after page refresh

---

# Epic 4 — Series Status and Notifications

## EP4-1. Synchronize Series Status with TMDb [BE] (M)

### Tasks

- Import status from TMDb
- Map values to:
  - ongoing
  - ended
  - canceled

### Definition of Done

- Status is stored and returned correctly

---

## EP4-2. Scheduled Check for New Episodes [BE] (L)

### Tasks

- Implement cron job or scheduled task
- Detect newly released episodes

### Definition of Done

- Task runs on schedule
- Changes are logged successfully

---

## EP4-3. Notifications API and Storage [BE] (M)

### Tasks

- Create Notification model
- Store notification when a new episode is detected
- Create endpoint for unread notifications

### Definition of Done

- API returns unread notifications for users

---

## EP4-3b. Notifications UI [FE] (S)

### Tasks

- Create notification dropdown or bell component

### Definition of Done

- Users can see notifications about newly released episodes

---

## EP4-4. Email Notifications (Optional) [BE] (M)

### Tasks

- Send emails when new episodes are released

### Definition of Done

- Test user receives email notifications successfully

---

# Epic 5 — Testing and Release

## EP5-1. Unit and End-to-End Tests [FE+BE] (M)

### Backend

- User status logic
- New episode detection logic

### Frontend

- Login form
- User status selector

### Definition of Done

- Tests pass in CI for both repositories

---

## EP5-2. Error Handling and Edge Cases [FE+BE] (S)

### Scenarios

- No search results found
- External API not available
- API rate limiting
- Empty user library

### Definition of Done

- User-friendly error messages are displayed
- APIs return proper error codes

---

## EP5-3. Backend Deployment [BE] (M)

### Tasks

- Deploy backend to Render or Railway
- Configure production database connection

### Definition of Done

- API is publicly accessible
- Database connection works correctly

---

## EP5-3b. Frontend Deployment [FE] (S)

### Tasks

- Deploy frontend to Vercel or Netlify
- Connect to deployed backend

### Definition of Done

- Application is publicly accessible
- Full end-to-end functionality works

---

## EP5-4. Documentation [FE+BE] (S)

### Tasks

Create README files containing:

- Technology stack
- API contract reference
- Local setup instructions

### Definition of Done

- Another developer can run the project locally using only the README

---

# Sprint Plan

## Sprint 1

- EP0-1
- EP0-1b
- EP0-2
- EP0-3
- EP0-4

---

## Sprint 2

- EP1-1
- EP1-1b
- EP1-2
- EP1-2b
- EP1-3
- EP2-1
- EP2-1b

---

## Sprint 3

- EP2-2
- EP2-3
- EP2-3b
- EP2-4
- EP2-4b
- EP3-1
- EP3-1b
- EP3-2
- EP3-2b

---

## Sprint 4

- EP4-1
- EP4-2
- EP4-3
- EP4-3b
- EP4-4 (optional)

---

## Sprint 5

- EP5-1
- EP5-2
- EP5-3
- EP5-3b

---

## Sprint 6

- EP5-4
- Bug fixing and stabilization
- Demo preparation
