# `POST` `/v1/tasks`

### [&laquo; Home](../README.md)

### Description

> Create Task Endpoint. Requset with body dto and get Response as JSON Data that has been inputed before.

---

- ## Request
  - Body
  ```jsonc
    {
      "title": "string", // max 255 character
      "description": "string", //
      "status": "string", // ex: pending | done
      "date": date(YYYY-MM-DD) // ex: 2022-04-31
    }
  ```

---

- ## Response
  - Status `201`
  ```jsonc
    {
      "title": "string", // max 255 character
      "description": "string", //
      "status": "string", // ex: pending | done
      "date": date(YYYY-MM-DD) // ex: 2022-04-31
    }
  ```
