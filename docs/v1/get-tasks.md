# `GET` `/v1/tasks`

### [&laquo; Home](../README.md)

### Description :

> Get All Task Endpoint and have a pagination with it. Request with page and size in Request Query and Get JSON Data Respone with Result, Size, and Page Variable.

---

- ## Request
  - Query
  ```
  page  : number
  size  : number // min 5
  ```

---

- ## Response
  - Status `200`
  ```jsonc
    {
      "page": number,
      "size": number,
      "count": number,
      "result": [],
    }
  ```
