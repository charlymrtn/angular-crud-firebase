// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyC-7SclXE3pnQusPG2eNEMEOub90Q84bPc",
    authDomain: "app-angular-crud-firebase.firebaseapp.com",
    databaseURL: "https://app-angular-crud-firebase.firebaseio.com",
    projectId: "app-angular-crud-firebase",
    storageBucket: "app-angular-crud-firebase.appspot.com",
    messagingSenderId: "344996929732"
  }
};
