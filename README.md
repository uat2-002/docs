# Git Workflow

## 1. Branch Strategy

The repository uses the following branch strategy:

```text
main
└── development
    ├── feature/*
    ├── bugfix/*
    └── hotfix/*
```

### Branches

| Branch        | Purpose                                    |
| ------------- | ------------------------------------------ |
| `main`        | Production-ready code                      |
| `development` | Integration branch for ongoing development |
| `feature/*`   | New functionality                          |
| `bugfix/*`    | Non-production bug fixes                   |
| `hotfix/*`    | Critical production fixes                  |

---

## 2. `main` Branch

`main` contains production-ready code.

Rules:

* No direct commits to `main`.
* Changes must be merged through a Pull Request.
* Force pushes are prohibited.
* Branch deletion is prohibited.
* Only tested and reviewed changes may be merged into `main`.

---

## 3. `development` Branch

`development` is the main integration branch.

Rules:

* Feature and bugfix branches are created from `development`.
* Completed work is merged back into `development` through a Pull Request.
* `development` is merged into `main` after testing and validation.
* Force pushes are prohibited.
* Branch deletion is prohibited.

---

## 4. Feature and Bugfix Branches

### Branch Naming

Branch names must follow this format:

```text
<type>/<work-item-id>-<short-description>
```

Examples:

```text
feature/EP1-1-create-login-page
feature/EP2-10-add-user-management
bugfix/EP3-15-fix-email-validation
bugfix/EP4-21-fix-user-search
```

Rules:

* Create branches from `development`.
* One branch = one task.
* Include the corresponding work item ID.
* Use a short, meaningful description.
* Use lowercase for the description.
* Separate words with hyphens (`-`).

---

## 5. Hotfix Branches

Hotfixes are used only for critical issues affecting production.

Hotfix branches are created from `main`.

Example:

```text
main
 ↓
hotfix/EP5-54-fix-login-error
 ↓
main
```

After the hotfix is merged into `main`, the same changes must also be merged into `development` to keep the branches synchronized.

---

## 6. Pull Request Naming

The Pull Request title should contain the same work item ID as the branch.

Example:

```text
Branch:
feature/EP1-1-create-login-page

Pull Request:
EP1-1: Create login page
```

Another example:

```text
Branch:
bugfix/EP3-15-fix-email-validation

Pull Request:
EP3-15: Fix email validation
```

### Rules

* One Pull Request = one task.
* PRs for features and bugfixes target `development`.
* Hotfix PRs target `main`.
* The work item ID must match the branch and PR.
* PR titles should be clear and written in English.

---

## 7. Development Flow

### Feature / Bugfix

```text
development
     ↓
feature/* / bugfix/*
     ↓
Pull Request
     ↓
development
     ↓
testing
     ↓
Pull Request
     ↓
main
```

Workflow:

1. Update the `development` branch.
2. Create a branch from `development`.
3. Implement the task.
4. Commit the changes.
5. Push the branch to GitHub.
6. Create a Pull Request to `development`.
7. Review and merge the Pull Request.
8. Test the changes in `development`.
9. Create a Pull Request from `development` to `main`.
10. Merge after validation.

---

## 8. Example

Update `development`:

```bash
git switch development
git pull origin development
```

Create a feature branch:

```bash
git switch -c feature/EP1-1-create-login-page
```

Implement the task and commit:

```bash
git add .
git commit -m "feat: add login page"
```

Push the branch:

```bash
git push -u origin feature/EP1-1-create-login-page
```

Create a Pull Request:

```text
feature/EP1-1-create-login-page
                ↓
          development
```

PR title:

```text
EP1-1: Create login page
```

After testing:

```text
development
     ↓
    main
```

---

# 9. Commit Convention

Commit messages should follow this format:

```text
<type>: <description>
```

Examples:

```text
feat: add login page
feat: implement user authentication
fix: handle empty password validation
refactor: extract authentication service
docs: update README
test: add authentication tests
chore: update dependencies
```

### Allowed Types

| Type       | Description                                 |
| ---------- | ------------------------------------------- |
| `feat`     | New functionality                           |
| `fix`      | Bug fix                                     |
| `refactor` | Code restructuring without behavior changes |
| `docs`     | Documentation changes                       |
| `test`     | Tests                                       |
| `chore`    | Maintenance, dependencies, configuration    |

### Commit Rules

* Write commit messages in English.
* Use the imperative mood: `add`, `fix`, `update`, `remove`.
* Keep commits focused on one logical change.
* Avoid generic messages.

Bad:

```text
fix
update
changes
tmp
wip
test
```

Good:

```text
feat: add user registration form
fix: handle invalid email format
refactor: extract authentication service
test: add login form tests
```

---

## 10. Atomic Commits

A commit should represent one logical change.

Good:

```text
feat: add login form
test: add login form tests
fix: handle invalid email format
```

Avoid unrelated changes in the same commit:

```text
feat: add login form, update README, fix API, change styles
```

However, commits do not need to be artificially split into very small changes. The goal is a **clear and meaningful history**, not a large number of commits.

---

## 11. Pull Request Rules

* One Pull Request = one task.
* PR must target the correct branch.
* PR title must contain the corresponding work item ID.
* PR should contain a clear description of the changes.
* PR should be reviewed before merging.
* Only tested changes should be merged into `main`.
* Squash merge is recommended when individual commits do not provide useful history.

---

## 12. Branch Protection

### `main`

Recommended GitHub branch protection:

* Pull Request required.
* At least two approval required.
* Force pushes blocked.
* Branch deletion blocked.
* Direct pushes blocked.

### `development`

Recommended protection:

* Pull Request required.
* Force pushes blocked.
* Branch deletion blocked.

---

## 13. Summary

```text
main
└── development
    ├── feature/*
    └── bugfix/*
```

### Standard task

```text
development
     ↓
feature / bugfix
     ↓
development
     ↓
main
```

### Production hotfix

```text
main
 ↓
hotfix
 ↓
main
 ↓
development
```

### Key Rules

```text
No direct commits to main
No force pushes
No branch deletions
One branch = one task
One Pull Request = one task
Feature/bugfix branches start from development
Hotfix branches start from main
Work item ID must match between branch and PR
PRs go through review
Only tested changes go to main
```
