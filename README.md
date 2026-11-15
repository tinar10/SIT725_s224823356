
# SIT725 – Applied Software Engineering

**Task 2.2P – Express Web Servers**

![Node.js](https://img.shields.io/badge/Node.js-Express-green)
![JavaScript](https://img.shields.io/badge/JavaScript-HTML-yellow)


---

This task demonstrates in building a simple web
server using **Node.js** and **Express.js**.


### 2.2P Tasks

- Create a web server using Node.js and Express.
- Serve HTML and JavaScript files from a `public` folder.
- Understand HTTP GET method
- Create a REST API to add two numbers.
- Test API endpoints using a browser.

---

| Technology | Function |
|------------|---------|
| Node.js | Server-side JavaScript runtime |
| Express.js | Web server and API framework |
| HTML | Web page structure |
| JavaScript | Client-side functionality |
| VS Code | Development environment |
| GitHub | Version control |

---

## Project Structure

```text
SIT725_s224823356/
├── 1.1P/                 # Previous task
├── 2.2P/
│   ├── public/
│   │   ├── js/
│   │   │   └── scripts.js
│   │   └── index.html
│   └── server.js
├── package.json
├── package-lock.json
├── .gitignore
└── README.md
```

---

## How To

### 1. Clone the Repository

```bash
git clone https://github.com/tinar10/SIT725_s224823356.git
```

### 2. Open the Project

```bash
cd SIT725_s224823356
```

### 3. Install Dependencies

```bash
npm init -y
npm install
```

### 4. Start the Server

```bash
node 2.2P/server.js
```
terminal output:

```text
Server running at http://localhost:3000
```

### 5. Open the Application

Visit: http://localhost:3000

---

## API Endpoints

### GET – Hello Message

**Endpoint:**

`GET /hello`

**URL:**

http://localhost:3000/hello

**Response:**

```text
Hello SIT725 2.2P!
```

### GET – Add Two Numbers

**Endpoint:**

`GET /add`

**Example:**

http://localhost:3000/add?n1=10&n2=2

**Response:**

```text
Result: 12
```

The server receives two numbers through URL query
parameters, calculates their sum, and returns the result.


## Testing

| Test | Expected Result |
|------|-----------------|
| Express Server | Runs on port 3000 |
| HTML Page | Displays web content |
| JavaScript Button | Changes displayed text |
| GET /hello | Returns greeting |
| GET /add | Returns Result: 12 |

---