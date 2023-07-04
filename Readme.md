## SERVER

#### Project Goal

To build an express server with TS

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

Express setup with login route

### V2

Login / Logout and protected routes.
When using JS libraries with TS, one mainly relies on Type Definitions file. If there is any issue with TD files that can lead to unnecessary errors or issues.
Eg - express TD file outputs req.body as Type 'any' which results in no type warnings or errors in TS project.
One option is we can twist libraries a bit or extend on top of them ( 99% we will be using this. ).
Eg

```
interface CustomRequest extends Request {
body : {[key: string] : string | undefined }
}
```
