# Contributing to NativeBase

We'd love for you to contribute to our source code and to make NativeBase even better than it is
today! Here are some guidelines we'd like you to follow:

- [Code of Conduct](#coc)
- [Ways to Contribute](#wtc)
- [Questions and Problems](#question)
- [Issues and Bugs](#issue)
- [Feature Requests](#feature)
- [Issue Submission Guidelines](#submit)
- [Setting Up Development Environment ](#dev-env)
- [Pull Request Submission Guidelines](#submit-pr)
- [Improving Documentation](#docs)

## <a name="coc"></a> Code of Conduct

Help us keep NativeBase open and inclusive. Please read and follow our [Code of Conduct](CODE_OF_CONDUCT.md).

## <a name="wtc"></a> Ways to Contribute

If you are eager to start contributing code right away, you can go through [NativeBase Bugs](https://github.com/GeekyAnts/NativeBase/issues?q=is%3Aopen+is%3Aissue+label%3Abug) that contain bugs.

There are other ways you can contribute without writing a single line of code. Here are a few things you can do to help out:

1. **Replying and handling open issues.** We get a lot of issues every day, and some of them may lack necessary information. You can help out by guiding people through the process of filling out the issue template, asking for clarifying information, or pointing them to existing issues that match their description of the problem.
2. **Reviewing pull requests for the docs.** Reviewing [documentation updates](https://github.com/nativebase/website/pulls) can be as simple as checking for spelling and grammar. If you encounter situations that can be explained better in the docs, click **Edit** at the bottom left of most docs pages to get started with your own contribution.
3. **Help people write test plans.** Some pull requests sent to the main repository may lack a proper test plan. These help reviewers understand how the change was tested, and can speed up the time it takes for a contribution to be accepted.

Each of these tasks is highly impactful, and maintainers will greatly appreciate your help.

## <a name="requests"></a> Questions, Bugs, Features

### <a name="question"></a> Got a Question or Problem?

Do not open issues for general support questions as we want to keep GitHub issues for bug reports
and feature requests. You've got much better chances of getting your question answered on dedicated
support platforms, the best being [Stack Overflow](http://stackoverflow.com/questions/tagged/native-base).

Stack Overflow is a much better place to ask questions since:

- there are thousands of people willing to help on Stack Overflow
- questions and answers stay available for public viewing so your question / answer might help
  someone else
- Stack Overflow's voting system assures that the best answers are prominently visible.

To save your and our time, we will systematically close all issues that are requests for general
support and redirect people to the section you are reading right now.

### <a name="issue"></a> Found an Issue or Bug?

If you find a bug in the source code, you can help us by submitting an issue to our
[GitHub Repository](https://github.com/GeekyAnts/NativeBase/issues). Even better, you can submit a Pull Request with a fix.

**Please see the [Submission Guidelines](#submit) below.**

### <a name="feature"></a> Missing a Feature?

You can request a new feature by submitting an issue to our [GitHub Repository](https://github.com/GeekyAnts/NativeBase/issues).

If you would like to implement a new feature then consider what kind of change it is:

- **Major Changes** that you wish to contribute to the project should be discussed first in an
  [GitHub issue](https://github.com/GeekyAnts/NativeBase/issues) that clearly outlines the changes and benefits of the feature.
- **Small Changes** can directly be crafted and submitted to the [GitHub Repository](https://github.com/GeekyAnts/NativeBase)
  as a Pull Request. See the section about [Contributing Code](#submit-pr).

## <a name="submit"></a> Issue Submission Guidelines

Before you submit your issue search the archive, maybe your question was already answered.

If your issue appears to be a bug, and hasn't been reported, open a new issue. Help us to maximize
the effort we can spend fixing issues and adding new features, by not reporting duplicate issues.

The "[new issue](https://github.com/GeekyAnts/NativeBase/issues/new)" form contains a number of prompts that you should fill out to
make it easier to understand and categorize the issue.

In general, providing the following information will increase the chances of your issue being dealt
with quickly:

- **Issue Description** - if an error is being thrown a non-minified stack trace helps
- **Motivation for or Use Case** - explain why this is a bug for you
- **NativeBase Version(s)** - is it a regression?
- **Browsers and Operating System** - is this a problem with all browsers or only specific ones?
- **Reproduce the Error** - provide a live example (using [expo snack](https://snack.expo.io/) or an unambiguous set of steps.
- **Related Issues** - has a similar issue been reported before?
- **Suggest a Fix** - if you can't fix the bug yourself, perhaps you can point to what might be
  causing the problem (line of code or commit)

## <a name="dev-env"></a> Setting Up your Development Environment

- Fork this repository.

- Clone your fork of NativeBase:

  ```git
  git clone git@github.com:${YOUR_USERNAME}/NativeBase.git
  ```

- Navigate to NativeBase

  ```
  cd NativeBase/
  ```

- Add main repo remote:

  ```git
  git remote add nativebase git@github.com:GeekyAnts/NativeBase.git
  ```

- Install dependencies:

  ```bash
  yarn
  ```

- Move over to the TestBed Example App and install the dependencies :

  ```bash
  cd example
  yarn
  ```

- Navigate back to your app:

  ```bash
  cd ..
  ```

- Start the Example App:

  ```bash
  yarn example start
  ```

  - To start app directly on Web
    ```bash
    yarn example web
    ```
  - To start app directly on IOS
    ```bash
    yarn example ios
    ```
  - To start app directly on Android
    ```bash
    yarn example android
    ```

and start making the changes.

## <a name="submit-pr"></a> Contributing Code

Code-level contributions to NativeBase come in the form of [pull requests](https://help.github.com/en/articles/about-pull-requests). These are done by forking the repo and making changes locally. Directly in the repo, there is the [`Storybook Testbed` app](/example) that you can run on your device (or simulators) and use to test the changes you're making to NativeBase source.

The process of proposing a change to NativeBase can be summarized as follows:

1. Fork the NativeBase repository and create your branch from `master`.
2. Make the desired changes to NativeBase source. Use the `Storybook Testbed` app to test them out.
3. If you've added code that should be tested, add tests.
4. If you've changed APIs, update the documentation, which is available [here](https://github.com/GeekyAnts/nativebase-docs).
5. Ensure the test suite passes, either locally or on CI once you opened a pull request.
6. Make sure your code lints. To keep project away from disputes we make use of **ESLint**, which is really a handy linting tool that enforces strict coding styles and makes sure your files are free from dead code. Each module of NativeBase has bundled ESLint as a dev dependency and checks your code everytime you commit.
7. Push the changes to your fork.
8. Create a pull request to the NativeBase repository.
9. Review and address comments on your pull request.

If all goes well, your pull request will be merged. If it is not merged, maintainers will do their best to explain the reason why.

## <a name="docs"></a> Helping with Documentation

The NativeBase documentation is hosted as part of the NativeBase website repository at https://github.com/GeekyAnts/nativebase-docs. The website itself is located at <https://alpha.nativebase.io/> and it is built using [Docusaurus V2](https://v2.docusaurus.io/). If there's anything you'd like to change in the docs, you can get started by clicking on the "Edit" button located on the bottom left of most pages on the website.
