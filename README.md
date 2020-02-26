# ExpenseFront

When you start working on task first of all move it in the project from "To Do" to "In Progress". Then on Intellij Idea open the project, move to branch "development" if you are not already there
[git checkout development]
do a Pull request (it can file if there are not committed files) after that create the branch for your issue
[git checkout -b feature_issuename_issuenumber]
an example of how a branch should be called: feature_apiservice_4
meanwhile you work on the issue make commits, is better to commit every important step.
When you have done push your branch to github.
On github in <>Code you will see your branch (if not choose from the dropdown) push the green bottom on the right "pull request" and then make sure that the pull reqest will be from your branch to development:
development <- feature_apiservice_4
assign it to me and then you work is done. 
Move your issue from "In Progress" to "Done"

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
