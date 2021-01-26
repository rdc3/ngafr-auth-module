# Authentication Module:
    Add Email/Password or Social logins based authentication to your Angular applications using a directive


## USAGE
### ngafr-authentication
[ReadMe](https://github.com/rdc3/ngafr-authentication/blob/main/README.md)


## Development - Application
### Download Source code
Run `git clone https://github.com/rdc3/ngafr-authentication`

### Download NPM packages
```cmd
npm i
```

### Build Authentication module
```cmd
npm run build:auth
```

### Start the App
* Create a firebase app. [Reference](https://firebase.google.com/docs/web/setup)
* Modify the [firebase config file](https://github.com/rdc3/ngafr-authentication/blob/master/projects/ngafr-testapp/src/environments/firebase.ts) file
* Update the authProviders in [app.module.ts](https://github.com/rdc3/ngafr-authentication/blob/master/projects/ngafr-testapp/src/app/app.module.ts) with the required auth providers during the login
    ```cmd
    npm run start
    ```
* Run `npm run start` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Development - Libraries
### Building the modules in watch mode
* If you need to develop the library, then you can build the library in the watch mode in separate terminal window with the below commands
    ```cmd
    npm run build:auth-watch
    ```
* Then start the testApp
    ```cmd
    npm run start
    ```
