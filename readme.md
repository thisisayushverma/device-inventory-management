Hey @Ayush, try to complete this assignment by the end of this weekend -

Project: Device Inventory Management API ( Only Backend) 
Features - 
1. Add device ( Like Laptop, Mobile, Headphones etc ) - done
2. View all devices 
3. View device by ID - done
4. Update device details - done
5. Delete device - done
6. Search devices -  done
7. Filter by type/status 

Tech Stack - 
1. Node.js
2. Express
3. MongoDB
4. Mongoose
5. Postman ( API Testing)
6. Visual Studio Code
7. Git  


# Device Inventory API Documentation

## Base URL

```txt
http://localhost:5000/api
```

---

# Device Endpoints

## 1. Get All Devices

### Request

```http
GET /devices
```

### Optional Query Parameters

| Parameter | Description                |
| --------- | -------------------------- |
| search    | Search by model or company |
| status    | Filter by device status    |
| typeId    | Filter by device type      |
| page      | Page number                |
| limit     | Number of records per page |

### Examples

```http
GET /devices
```

```http
GET /devices?search=iphone
```

```http
GET /devices?status=Available
```

```http
GET /devices?search=apple&status=Available
```

```http
GET /devices?page=1&limit=10
```

---

## 2. Get Device By ID

### Request

```http
GET /devices/:id
```

### Example

```http
GET /devices/6a1bc56ab780b2de178f19ea
```

---

## 3. Create Device

### Request

```http
POST /devices
```

### Body

```json
{
  "model": "iPhone 15 Pro",
  "company": "Apple",
  "price": 119999,
  "typeId": "6a1ad19e02ab1f60540cb007",
  "imageUrl": "https://example.com/image.jpg",
  "status": "Available",
  "description": "Premium iPhone with titanium body."
}
```

### Required Fields

* model
* company
* price
* typeId

### Allowed Status Values

```txt
Available
Assigned
Damaged
Lost
```

---

## 4. Update Device

### Request

```http
PUT /devices/:id
```

### Example

```http
PUT /devices/6a1bc56ab780b2de178f19ea
```

### Body

```json
{
  "status": "Assigned"
}
```

You can update one or more fields.

---

## 5. Delete Device

### Request

```http
DELETE /devices/:id
```

### Example

```http
DELETE /devices/6a1bc56ab780b2de178f19ea
```

---

# Type Endpoints

## 1. Get All Types

### Request

```http
GET /types
```

### Example Response

```json
[
  {
    "_id": "6a1ad19e02ab1f60540cb007",
    "name": "Mobile"
  },
  {
    "_id": "6a1ad19e02ab1f60540cb008",
    "name": "Laptop"
  }
]
```

---

## 2. Create Type

### Request

```http
POST /types
```

### Body

```json
{
  "name": "Mobile"
}
```

### Examples

```json
{
  "name": "Laptop"
}
```

```json
{
  "name": "Tablet"
}
```

```json
{
  "name": "Monitor"
}
```

---

# Status Codes

| Code | Meaning               |
| ---- | --------------------- |
| 200  | Success               |
| 201  | Resource Created      |
| 204  | Resource Deleted      |
| 400  | Bad Request           |
| 404  | Resource Not Found    |
| 500  | Internal Server Error |

---

# Sample Workflow

### Step 1: Create a Type

```http
POST /types
```

```json
{
  "name": "Mobile"
}
```

---

### Step 2: Copy the Type ID

```json
{
  "_id": "6a1ad19e02ab1f60540cb007",
  "name": "Mobile"
}
```

---

### Step 3: Create a Device

```http
POST /devices
```

```json
{
  "model": "iPhone 15 Pro",
  "company": "Apple",
  "price": 119999,
  "typeId": "6a1ad19e02ab1f60540cb007",
  "status": "Available"
}
```

---

### Step 4: Search Devices

```http
GET /devices?search=apple
```

---

### Step 5: Filter Devices

```http
GET /devices?status=Available
```

```http
GET /devices?typeId=6a1ad19e02ab1f60540cb007
```

---

### Step 6: Update Device

```http
PUT /devices/:id
```

---

### Step 7: Delete Device

```http
DELETE /devices/:id
```
