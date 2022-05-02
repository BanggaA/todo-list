# `GET` `/v1/tasks/:taskId`

### [&laquo; Home](../README.md)

### Description :

> Get a Task by Id Endpoint.

---

- ## Response
  - Status `200`
  ```jsonc
    {
      "id": number,
      "title": "string",
      "description": "string",
      "status": "string",
      "date": Date,
      "createdAt": Date,
      "updatedAt": Date
    }
  ```
