# API Test Plan — Cloud Issue Tracker

## 1. Purpose

This test plan defines how to verify the Issues REST API for listing, creating, and updating issues.

## 2. Test Cases

| ID    | Test                     | Request                                                  | Expected Result                                                    |
| ----- | ------------------------ | -------------------------------------------------------- | ------------------------------------------------------------------ |
| TC-01 | List issues              | GET /api/issues                                          | 200 OK; returns a JSON array.                                      |
| TC-02 | Empty issue list         | GET /api/issues when no issues exist                     | 200 OK; returns [].                                                |
| TC-03 | Create valid issue       | POST /api/issues with valid JSON                         | 201 Created; returns the new issue with an ID and status Open.     |
| TC-04 | Missing title            | POST /api/issues without title                           | 400 Bad Request.                                                   |
| TC-05 | Short title              | POST /api/issues with a title under 3 characters         | 400 Bad Request.                                                   |
| TC-06 | Invalid priority         | POST /api/issues with priority "Urgent"                  | 400 Bad Request.                                                   |
| TC-07 | Invalid JSON             | POST /api/issues with malformed JSON                     | 400 Bad Request.                                                   |
| TC-08 | Unsupported content type | POST /api/issues with a non-JSON content type            | 415 Unsupported Media Type.                                        |
| TC-09 | Resolve an issue         | PATCH /api/issues/{id}/status with {"status":"Resolved"} | 200 OK; status becomes Resolved.                                   |
| TC-10 | Invalid status           | PATCH /api/issues/{id}/status with {"status":"Closed"}   | 400 Bad Request.                                                   |
| TC-11 | Unknown issue            | PATCH /api/issues/UNKNOWN/status                         | 404 Not Found.                                                     |
| TC-12 | Reopen an issue          | PATCH /api/issues/{id}/status with {"status":"Open"}     | 200 OK; status becomes Open.                                       |
| TC-13 | Unexpected server error  | Trigger a controlled internal failure                    | 500 Internal Server Error; response does not expose a stack trace. |

## 3. Test Execution

For each test, record the request, actual HTTP status code, response body, and whether the result passed or failed.

## 4. Acceptance Criteria

* Valid requests return the expected status codes and response bodies.
* Invalid input is rejected with a useful JSON error response.
* Unknown issue IDs return 404.
* Issue status changes are reflected in subsequent GET requests.
* Unexpected errors do not expose internal stack traces.
