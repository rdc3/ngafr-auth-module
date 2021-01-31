# NgafrAuthentication

This library is used to add the firebase authentication (Email / Password or Social logins) using the directive `ngafrAuth` in the html template of Angular project.

## Dependencies
    * [angular-fire-ui](https://www.npmjs.com/package/angular-fire-ui)

## Install
### ngafr-authentication package installation
```cmd
    npm i ngafr-authentication  --save
```
### Installation with dependencies (recommended)
```cmd
    npm i ngafr-authentication firebase firebaseui @angular/fire firebaseui-angular tsickle --save
```

## Usage
* Update AppModule 
    ```ts
    const firebaseConfig = {
        apiKey: '*******',
        authDomain: '*******',
        databaseURL: '*******',
        projectId: '',
        storageBucket: '',
        messagingSenderId: '',
        appId: '',
        measurementId: ''
    };
    // Only choose the required Auth providers & omit the rest from this list
    const authProviders: FirebaseAuthProviders ={
        googleAuthProvider: true,
        emailAuthProvider: false,
        githubAuthProvider: false,
        facebookAuthProvider: false,
        AnonymousAuthProvider: false,
        phoneAuthProvider: false,
        twitterAuthProvider: false,
    };
    imports: [
        ...,
        NgafrAuthenticationModule
            .forRoot(firebaseConfig, authProviders),
        ...
    ]
    ```
* Use in a template
    Basic usage
    ```html
    <div ngafrAuth></div>
    ```
    or 
    ```html
    <ng-container 
        ngafrAuth
        (userLoggedInEvent)="loggedInEvent($event)"
        (userEvent)="userEvent($event)"
        hideDefaultLogOutButton = "true"
        #ngafrAuth="ngafrAuth">
    </ng-container>
    ```
* Adding custom Logout button
    ```html
    <button [disabled]="!loggedIn" (click)="ngafrAuth.logout()">Logout</button>
    ```
* Use in a component TS
    ```ts
    export class AuthDemoComponent {
        public loggedIn = false;
        public userName = 'Guest';
        constructor() { }
        loggedInEvent($event) {
            this.loggedIn = $event.isLoggedIn;
        }
        userEvent($event) {
            this.userName = 'Guest';
            if ($event && $event.user && $event.user.displayName)
                this.userName = $event.user.displayName;
        }
    }
    ```

* Error TS2344: Type ‘T[K]’ does not satisfy the constraint
    When trying to run ng serve command, you may got the error:
    `ERROR in node_modules/@angular/fire/angularfire2.d.ts:37:49 - error TS2344: Type 'T[K]' does not satisfy the constraint '(...args: any) => any'.
    Type 'T[{ [K in keyof T]: T[K] extends Function ? K : never; }[keyof T]]' is not assignable to type '(...args: any) => any'.
        Type 'T[T[keyof T] extends Function ? keyof T : never]' is not assignable to type '(...args: any) => any'.
        Type 'T[keyof T]' is not assignable to type '(...args: any) => any'.
            Type 'T[string] | T[number] | T[symbol]' is not assignable to type '(...args: any) => any'.
            Type 'T[string]' is not assignable to type '(...args: any) => any'.

    ...
    ...`
    It is because of the TypeScript type checking in the definitions file of the AngularFire library.
    To avoid this error, just add an option in tsconfig.json file:
    `
    {
        //...
        compilerOptions: {
            "skipLibCheck": true,
            //...
        }
    }
    `
