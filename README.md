# HotDogDilemma - Frontend
HotDogDilemma is a web application to decide whether a hot dog is a sandwich or not.
This is the frontend part of the application. 

## Setup
0. Setup the backend part of the application. The backend part can be found [here](https://github.com/h4ni0/HotDogDilemma-backend).
1. Clone the repository
2. Install the dependencies
```bash
npm install
```
3. Create an `.env` file by copying the `.env.example` file and fill in the required values (eg. BACKEND_URL).   
```bash
cp .env.example .env
```

### Either
4. Start development server
```bash
npm run dev
```

### Or
4. Build the project
```bash
npm run build
```

After the build is complete, the project will start running on the port specified in the `.env` file.  
If you want to start the project without re-building, you can use
```bash
npm run start
```
then 
```bash
npm run preview
``` 
to run the project.

## Technologies
- React
- Tailwind CSS
