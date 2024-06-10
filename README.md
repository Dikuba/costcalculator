<<<<<<< HEAD
# Understanding_Github
Reading up on github

Git and Github are very popular tools used nowadays for version control.
Version control refers to a system that records changes (versions) to a file or set of files over the time. In other words, these versions will help track the changes in  codes/projects and, if necessary, undo those changes as well.
Git vs Github
What is the difference?
Git is an open-source, version control tool created in 2005 by developers working on the Linux operating system;  It is used to manage versions of your code or files locally, that is, Git is installed and maintained on your local computer system.
GitHub is a company founded in 2008. It provides a cloud-based hosting service that lets you store and manage Git repositories. There are many other alternatives to GitHub, such as GitLab, BitBucket..
Why we need git or githubCollaboration on projects
Why git or github?
GitHub makes it easier to collaborate on projects using git.Multiple developers can work on a single project and see each others’ edits in real-time in the cloud:
This reduces the risk of duplicative or conflicting work, and can help decrease production time. With Git, developers can:
build code, push it to Github to share with collaborators, 
track changes, and innovate solutions to problems that might arise during the development process.
While using Git and GIthub, there are some keywords you will often come across:
Repositories
Branches
Commits
Pull requests
A Repository is like a directory that contains all the files and folders of a specific project. It generally contains a licence and a README file about the project. We can create local repositories with git or online repositories in GitHub. A GitHub repository can also be used to store ideas or any resources that you want to share with your team or the world.
A branch is used to work with different versions of a repository. That is, a branch can contain a whole version of a project. Each developer can work on a specific branch of the project at any time. By default, a repository has a main (master) branch and any other branch is a copy of the main branch at a specific point in time. Branches are generally created by developers or team members to work on separate features of the project before merging it with the main branch
A commit is like a change you do to the project. Each commit (change) has a description (commit message) explaining why a change was made, an ID to identify the commit, information about the Author (who made the change) and the date (when)Pull Requests. With a pull request you are proposing that your changes should be merged (pulled in) with the main branch (master). As soon as you have a commit, you can open a pull request To create a repository in GitHub, just click on Create repository.
The master here represents the main branch of a project.
Tag is a reference (standard) or an object (annotated).
HEAD is a place where your working directory is now.

Git Commands


Git configuration 

<git config --global user.name “Your Name”> : This command sets the name that will be attached to your commits and tags. 
<git config --global user.email “you@example. Com”> : This command sets the e-mail address that will be attached to your commits and tags.
<git config --global color.ui auto> : This command enables some colorization of Git output.


Starting a project

git init [project name] : It creates a new local repository in the current directory. If [project name] is provided, Git will create a new directory named [project name] and will initialize a repository inside it. 
git clone : Command downloads a project with the entire history from the remote repository.


Day-to-day work 

git status : Command displays the status of your working directory. Options include new, staged, and modified files. It will retrieve branch name, current commit identifier, and changes pending commit. 
git add [file] : Command adds a file to the staging area. Use. in place of the full file path to add all changed files from the current directory down into the directory tree. 
git diff [file] : Command shows changes between working directory and staging area. 
git diff --staged [file] : Command shows any changes between the staging area and the repository. 
git checkout -- [file] : Command discard changes in working directory. This operation is unrecoverable. 
git reset ...] : Command reverts some paths in the index (or the whole index) to their state in HEAD. 
git commit : Command creates a new commit from changes added to the staging area. The commit must have a message.
git rm [file] : Command removes file from working directory and staging area.


Storing your work

git stash : Command puts current changes in your working directory into stash for later use. 
git stash pop: Command applies stored stash content into working directory, and clear stash. 
git stash drop : This deletes a specific stash from all your previous stashes.


Git branching model 

git branch [-a] : Used to list all local branches in the repository. Adding -a: to show all branches (with remote).
git branch [branch_name] : Used to create a new branch, referencing the current HEAD. 
git rebase [branch_name] : Used to apply commits of the current working branch and apply them to the HEAD of [branch] to make the history of your branch more linear. 
git checkout [-b] [branch_name] : Used to switch working directory to the specified branch. With -b: Git will create the specified branch if it does not exist. git merge [branch_name] Join specified [branch_name] branch into your current branch (the one you are on currently). git branch -d [branch_ name] Remove selected branch, if it is already merged into any other. -D instead of -d forces deletion.


Inspect history

git log [-n count] : Used to list commit history of current branch. -n count limits list to last n commits. 
git log --oneline --graph --decorate : Provides an overview with reference labels and history graph. One commit per line. 
git log ref . : Used to list commits that are present on the current branch and not merged into ref. A ref can be a branch name or a tag name. 
git log .ref : Used to list commits that are present on ref and not merged into current branch. 
git reflog : Used to list operations (e.g. checkouts or commits) made on local repositories.


Tagging commits 

git tag : Used to list all tags. 
git tag [name] [commit sha] : Used to create a tag reference named name for current commit. Add commit sha to tag a specific commit instead of current one. 
git tag -a [name] [commit sha] : Used to create a tag object named name for current commit. 
git tag -d [name] Remove a tag from the local repository.


Reverting changes 

git reset [--hard] [target reference] : It switches the current branch to the target reference, leaving a difference as an uncommitted change. When --hard is used, all changes are discarded. It's easy to lose uncommitted changes with --hard. 
git revert [commit sha] : used to create a new commit, reverting changes from the specific commit. It generates an inversion of changes.


Synchronizing repositories 

git fetch [remote] : used to fetch changes from the remote, but not update tracking branches. 
git fetch --prune [remote] : Used to delete remote Refs that were removed from the remote repository. 
git pull [remote] : Used to fetch changes from the remote and merge the current branch with its upstream. 
git push [--tags] [remote] : Used to push local changes to the remote. Use --tags to push tags. 
git push -u [remote] [branch] : Used to push local branches to remote repositories. Set its copy as an upstream.

Ignoring files

To ignore files, create a .gitignore file in your repository with a line for each pattern. File ignoring will work for the current and subdirectories where the .gitignore file is placed. In this example, all files are ignored in the logs directory (excluding the .gitkeep file), whole tmp directory and all files *.swp
=======
# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
>>>>>>> 14c2d4e (Initialize project using Create React App)
