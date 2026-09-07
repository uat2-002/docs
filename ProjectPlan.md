# Serial Tracker Project Plan

## Project Overview

**Project:** Serial Tracker

**Goal:** Build a web application that helps users track TV series they watch, manage watch progress, and receive notifications about new episodes.

**Technology Stack:** React (Frontend) + Node.js (Backend) using two separate repositories (polyrepo).

---

## 1. Product Description

Serial Tracker is a web application that allows users to:

- Register and log in
- Search for TV series using an external API
- Add series to their personal collection
- Track watched episodes
- Receive notifications when a new episode of a tracked series is released
- View both:
  - Series status (ongoing, ended, canceled)
  - Personal watch status (plan to watch, watching, watched, not worth it)

The project focuses on a manageable MVP that can be completed within the available timeframe.

---

## 2. Data Source

A free public IMDb API is not available. The following alternatives can be used:

### Option 1: OMDb API

- Easy to integrate
- Contains data partially sourced from IMDb
- Free API key with request limits

### Option 2: TMDb API

- Richer and more reliable dataset
- Provides posters, seasons, episodes, and series status information
- Free for non-commercial projects

### Recommended Choice

Use **TMDb API** as the primary source because it provides season, episode, and series status data required for notifications and tracking features.

---

## 3. Technology Stack

### Frontend

- React
- Vite
- TypeScript
- React Query
- Zustand or Redux Toolkit

### Backend

- Node.js
- Express or Fastify
- REST API

### Database

- PostgreSQL
- Prisma ORM
- Neon (serverless PostgreSQL)

### Authentication

- JWT-based authentication

### Styling

- Team choice
- Material UI is recommended

### Deployment

#### Backend

- Render
- Railway

#### Frontend

- Vercel
- Netlify

---

## 4. MVP Functional Requirements

### User Authentication

Users can:

- Register
- Log in
- Access protected data

### Series Search and Management

Users can:

- Search series through TMDb API
- View series details
- Add series to their personal collection

### Episode Tracking

Users can:

- Mark episodes as watched
- Track viewing progress

### New Episode Notifications

Users receive notifications when a tracked series releases a new episode.

**Minimum requirement:**

- In-app notifications

**Optional enhancements:**

- Email notifications
- Push notifications

### Series Status

The application should display the current series status:

- `ongoing`
- `ended`
- `canceled`

### User Watch Status

The application should support the following personal statuses:

- `plan_to_watch`
- `watching`
- `watched`
- `not_worth_it`

---

## 5. Team Roles

### Team Lead

Responsibilities:

- Task planning and decomposition
- Git workflow coordination
- API contract synchronization between frontend and backend

### Developers

Possible organization options:

- Feature-based ownership (authentication, catalog, notifications, tracking)
- Frontend/Backend specialization

### QA (Optional)

Responsibilities:

- Manual testing
- Basic unit testing
- End-to-end testing

---

## 6. Project Roadmap (5–6 Weeks)

| Week | Focus |
|--------|--------|
| 1 | Setup frontend and backend repositories, API access, database schema design, API contract |
| 2 | Authentication and external API integration |
| 3 | Watch statuses and watched episode tracking |
| 4 | New episode notifications and UI improvements |
| 5 | Testing, bug fixing, deployment |
| 6 | Demo presentation and retrospective |

---

## 7. Definition of Done

The project is considered complete when:

- Users can search for and add TV series
- Series status and user watch status are stored and displayed correctly
- Notifications are generated for newly released episodes
- Authentication protects user data
- A deployed version is available online
- A README explains the architecture and setup
- Core business logic is covered by tests

---

## 8. Known Risks

### API Limits

Free API plans may enforce rate limits. Backend caching should be considered.

### Database Cold Starts

The free Neon tier may become inactive after periods of inactivity and require a short startup time when receiving the next request.

### Notification Updates

The application must periodically check for new episodes using scheduled jobs or cron tasks because TMDb does not push updates automatically.

### Frontend/Backend Synchronization

Changes to the API contract must be communicated to avoid integration issues between repositories.

### Scope Creep

Additional ideas and features should be saved for future iterations and not added to the MVP unless approved by the team.

---

## Future Backlog (Out of Scope for MVP)

- Personal ratings
- Personal notes
- Viewing statistics
- Social features and friend lists
- Shared watchlists
- Recommendation system
- Offline mode
