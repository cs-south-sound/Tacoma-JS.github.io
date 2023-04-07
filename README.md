[Tacoma-JS.github.io](http://tacoma-js.github.io/)
===================

THIS REPO ARCHIVED 7-APRIL 2023

> This is the repository that holds the Tacoma-JS website hosted by github.io, served from the *master* branch.  Current development is previewed on a release candidate branch named *rc_v major.minor.patch*, which is then merged into the *master* after a code and content review.  Release using the [semver](http://semver.org/) numbering system. We will have several release candidates that use varied technologies on separate branches.

### Release Canditate Branches

* rc_v0.0.2  [bootstrap](http://getbootstrap.com/) with jquery, plus [showdown](https://github.com/showdownjs/showdown)
* rc_v0.0.3  [w2ui](http://w2ui.com/web/home) with jquery and [gunjs](https://github.com/amark/gun), plus [showdown](https://github.com/showdownjs/showdown)

### Features
* Job listing for semi-local javascript work
* Links for those larger employers that may not show up in the jobs feed; include on the jobs page
* Links for job lists that do not have a public feed api.
* On the jobs page show a public record database of the largest employers in the county
* Topics for reading: Introductory, Intermediate, Advanced, Best Practices.  These should be pulled in as markdown from already completed sources.
* Feed the next two meetups information to our front page
* Include the google custom search engine Javascript-search for the site.
* Link the Tacoma nodeschool page
* Link to our meetup page
* Link to our github pages
* Test specs to cover the app code

### Contributing

To aid in collaboration on this project and to minimize heartburn please consider following these guidelines.

1.  Review the project status on our github network [graphs](https://github.com/Tacoma-JS/Tacoma-JS.github.io/network).

2.  Review the available project [releases](https://github.com/Tacoma-JS/Tacoma-JS.github.io/releases).

3.  Look at the project [issues](https://github.com/Tacoma-JS/Tacoma-JS.github.io/issues) to see if there is already an issue or feature similar to your request.  *Only* work on open issues.  If there is not an open issue for your suggestion, then open a new issue before coding and make note of the issue number to reference in the following steps.

4.  Following the github [workflow](https://guides.github.com/introduction/flow/):

  a.  On the command line in your development environment change to your coding project folder, and on the command line with the [git](https://git-scm.com/) command [clone](https://git-scm.com/docs/git-clone) from the github default branch to create a new working directory with all the project files from the default branch.

   ```
   $ git clone https://github.com/Tacoma-JS/Tacoma-JS.github.io.git
   ### change into the new directory
   $ cd Tacoma-JS.github.io/

   ### see all the remote branches
   $ git branch -r

   ### see the local branch that should be the same as the github default branch
   $ git branch
   ```

  b.  If you want to work on other than the default branch, then [checkout](https://git-scm.com/docs/git-checkout) the remote branch that you want.

  ```
  $ git checkout -b <branch> --track <remote>/<branch>

  ### for example
  $ git checkout -b rc_v0.1.0 --track origin/rc_v0.1.0
  ```
  c. In your favorite development environment make some tested improvements to your code, then [add](https://git-scm.com/docs/git-add) and [commit](https://git-scm.com/docs/git-commit) those changes.

  ```
  $ git status
  $ git add .
  $ git commit -m "#6 Add contribution guidelines"
  ```
    * note that the #6 references the issue that the commit solves; and on github there will be a link automatically created back to that issue.  This technique also focuses your attention on why the work is being done, which will help acheive documentable increments of success.

  d. Once you have reached a reasonable time point that you want your code backed up to github and are okay with the open source community seeing your work, then [push](https://git-scm.com/docs/git-push) to the remote repository.

  ```
  $ git push
  ```

  e. When work on this branch is satisfactory and ready to be reviewed for merging into the *master* submit a [pull request](https://help.github.com/articles/creating-a-pull-request/) to trigger a code and content review by the project core team.

5. Since github does not intend to be a CDN (and blocks that usage), for development troubleshooting and testing purposes use [rawgit](https://rawgit.com/) to serve links to your web browser for other than the *master* branch.  For example:

  ```
  https://raw.githubusercontent.com/Tacoma-JS/Tacoma-JS.github.io/develop/index.html
  # becomes
  https://rawgit.com/Tacoma-JS/Tacoma-JS.github.io/develop/index.html
  ```

6. Avoid merge conflicts.
  - Working on the same file as someone else will usually cause merge conflicts that need to be resolved.  Try to avoid working on exactly the same file.
