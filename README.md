# BASE URl

https://restapi-task-manager.herokuapp.com

## END POINTS

**GET TASKS**

- GET /api/tasks

- Returns a list of tasks

- Response Example

```javascript
{
  "data": [
    {
      "id": 1,
      "task": "First Task Update",
      "isCompleted": true,
      "createdAt": "2022-01-28T06:24:19.000Z",
      "updatedAt": "2022-01-28T06:32:23.000Z"
    },
    {
      "id": 2,
      "task": "First Production Task",
      "isCompleted": true,
      "createdAt": "2022-01-28T06:59:31.000Z",
      "updatedAt": "2022-01-28T06:59:31.000Z"
    }
  ]
}
```

**CREATE TASK**

- POST /api/tasks

- Request Body

```javascript
{
    "task" : "Second Production Task",
    "isCompleted" : true
}
```

Required fields : **task**,**isCompleted**

- **isCompleted will accept either true or false only**

- Response Example

```javascript
{
    "data": {
        "id": 3,
        "task": "Second Production Task",
        "isCompleted": true,
        "updatedAt": "2022-01-28T07:34:15.649Z",
        "createdAt": "2022-01-28T07:34:15.649Z"
    }
}
```

**GET SINGLE TASK**

- GET /auth/tasks/:taskId

  **taskId is path parameter**

- Response Example

```javascript
{
    "data": {
        "id": 3,
        "task": "Second Production Task",
        "isCompleted": true,
        "updatedAt": "2022-01-28T07:34:15.649Z",
        "createdAt": "2022-01-28T07:34:15.649Z"
    }
}
```

- If taskId is not found,Response will be

```javascript
{
    "statusCode":{statusCode}
    "message": "No Task with id {taskId}"
}
```

**UPDATE TASK**

PATCH /api/tasks/:taskId

- Request Body

```javascript
{
    "task" : "Second Production Task",
}
```

Required fields : **task**, returns updated Task

- Response Example

```javascript
{
    "data": {
        "id": 3,
        "task": "Second Production Task",
        "isCompleted": true,
        "updatedAt": "2022-01-28T07:34:15.649Z",
        "createdAt": "2022-01-28T07:34:15.649Z"
    }
}
```

- If taskId is not found,Response will be

```javascript
{
    "statusCode":{statusCode}
    "message": "No Task with id {taskId}"
}
```

**UPDATE TASK COMPLETION STATUS**

PATCH /api/tasks/:taskId/complete

- Request Body

```javascript
{
    "isCompleted" : true,
}
```

Required fields : **isCompleted**, returns updated Task

- Response Example

```javascript
{
    "data": {
        "id": 3,
        "task": "Second Production Task",
        "isCompleted": true,
        "updatedAt": "2022-01-28T07:34:15.649Z",
        "createdAt": "2022-01-28T07:34:15.649Z"
    }
}
```

- If taskId is not found,Response will be

```javascript
{
    "statusCode":{statusCode}
    "message": "No Task with id {taskId}"
}
```

**DELETE TASK**

DELETE /api/tasks/:taskId

- Returns deleted task.

- Response Example

```javascript
{
    "message": "Successfully deleted",
    "data": {
        "id": 1,
        "task": "First Task Update",
        "isCompleted": true,
        "createdAt": "2022-01-28T06:24:19.000Z",
        "updatedAt": "2022-01-28T06:32:23.000Z"
    }
}
```

- If taskId is not found,Response will be

```javascript
{
    "statusCode":{statusCode}
    "message": "No Task with id {taskId}"
}
```
