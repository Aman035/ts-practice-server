## SERVER

#### Project Goal

To build an Express server with TS

#### Steps To Run

##### 1. Install Dependencies

```
npm i
```

##### 2. Start development server

```
npm run dev
```

##### 3. Start production server

```
npm run start
```

#### Notes For Dev

### V1

- Express setup with a login route.

### V2

**Approach 1**

- Mostly, this approach will be used where we utilize JavaScript libraries with the help of Type Definition Files.
- Implemented login/logout functionality and protected routes.
- When using JavaScript libraries with TypeScript, we primarily rely on Type Definition files. However, issues with Type Definition files can result in unnecessary errors or issues.
- For example, the Express Type Definition file may output `req.body` as type `'any'`, which leads to no type warnings or errors in the TypeScript project.
- One option is to extend or modify the libraries to address these issues. We will be using this approach in most cases.
- For example:

```typescript
interface CustomRequest extends Request {
  body: { [key: string]: string | undefined }
}
```

### V3

**Approach 2**

- Completely twist the library with the help of decorators.
- This approach is more time-consuming and advanced. It should be chosen when twisting the libraries allows us to achieve extended functionalities that justify the time spent.
- In this project, decorators were used to define routes, middlewares, and validators.
