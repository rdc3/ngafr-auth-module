# ngafr-authentication Module:
    Add Email/Password or Social logins based authentication to your Angular applications using a directive


## USAGE
### Download NPM packages
```cmd
    npm i ngafr-authentication  --save
```
### Follow the steps from the below README to use ngafr-authentication library in your component
[ReadMe](https://github.com/rdc3/ngafr-authentication/blob/master/projects/ngafr-authentication/README.md)
### Demo
[Github Pages - Demo](https://rdc3.github.io/ngafr-authentication)


## Library Development
### Download Source code
Run `git clone https://github.com/rdc3/ngafr-authentication`

### Working with the TestApp
* Create a firebase app. [Reference](https://firebase.google.com/docs/web/setup)
* Modify the [firebase config file](https://github.com/rdc3/ngafr-authentication/blob/master/projects/ngafr-testapp/src/environments/firebase.ts) file and update the details to connect with your firebase app.
* Update the authProviders in [app.module.ts](https://github.com/rdc3/ngafr-authentication/blob/master/projects/ngafr-testapp/src/app/app.module.ts) with the required auth providers for the login functionality


### Building the modules in watch mode
* If you need to develop the library, then you can build the library in the watch mode in separate terminal window with the below commands
    ```cmd
    npm run build:auth-watch
    ```
* Then start the testApp
    ```cmd
    npm run start
    ```
* Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

### Error TS2344: Type ‘T[K]’ does not satisfy the constraint
* When trying to run ng serve command, you may got the error:
    ```
        ERROR in node_modules/@angular/fire/angularfire2.d.ts:37:49 - error TS2344: Type 'T[K]' does not satisfy the constraint '(...args: any) => any'.
        Type 'T[{ [K in keyof T]: T[K] extends Function ? K : never; }[keyof T]]' is not assignable to type '(...args: any) => any'.
            Type 'T[T[keyof T] extends Function ? keyof T : never]' is not assignable to type '(...args: any) => any'.
            Type 'T[keyof T]' is not assignable to type '(...args: any) => any'.
                Type 'T[string] | T[number] | T[symbol]' is not assignable to type '(...args: any) => any'.
                Type 'T[string]' is not assignable to type '(...args: any) => any'.

        ...
        ...
    ```
* It is because of the TypeScript type checking in the definitions file of the AngularFire library.
* To avoid this error, just add an option in tsconfig.json file:
    ```
        {
            //...
            compilerOptions: {
                "skipLibCheck": true,
                //...
            }
        }
    ```
