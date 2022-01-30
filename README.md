# Content
* [start up the application](Start-up-the-application) 
* Dockerfile

## Available Scripts

In the project directory, you can run:

##  Start up the application
To run the application, ensure `NPM` is installed on your device.\
Run up the terminal and go the directory for this project and run the command:  
```bash
npm start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

# Dockerfile 
If you prefer using docker, we have a docker file ready for you.

open the terminal and go to the directory for this project.\
Run: 
```Bash
docker build -t "name-your-docker-container" .
```

once the docker container is created you can run the following command to spin up the container:\
```Bash
docker run -it --rm -v ${PWD}:/app -v /app/node_modules -p 3000:3000 -e CHOKIDAR_USEPOLLING=true 'name-your-docker-container'
```
Now open browser and go to 

http://localhost:3000/
