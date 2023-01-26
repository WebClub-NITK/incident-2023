<h1 align="center"> Incident 2023 </h1>

## Table of Contents 📁

1. [Tech Stack](https://github.com/WebClub-NITK/incident-2023/blob/main/readme.md#tech-stack)
2. [Sections](https://github.com/WebClub-NITK/incident-2023/blob/main/readme.md#sections)
2. [Important Points](https://github.com/WebClub-NITK/incident-2023/blob/main/readme.md#important-points)
4. [Contributing](https://github.com/WebClub-NITK/incident-2023/blob/main/readme.md#contributing)
5. [Installation Guide](https://github.com/WebClub-NITK/incident-2023/blob/main/readme.md#installation-guide)
6. [Sample Git Workflow](https://github.com/WebClub-NITK/incident-2023/blob/main/readme.md#sample-git-workflow)
   <br>

## Tech Stack 🧰

<li>Frameworks</li>

- [ReactJS](https://reactjs.org/)
- [Tailwind CSS](https://tailwindcss.com/)

<li>Libraries/Tools</li>

- [ViteJS](https://vitejs.dev/)
- [React Icons](https://react-icons.github.io/react-icons")
- [Framer](https://www.framer.com/)
- [React Lottie](https://www.npmjs.com/package/react-lottie)
- [Meraki UI](https://merakiui.com/components/)

<br/>

## Sections ☑️

- Hero Section
- Events
- Competitions
- Sponsors
- About Us
- FAQs

## Important Points ✨

### Code changes

Three main things have to be changed to customize it your way (please open an issue if you find more such instances):

1. Personal Information

- [/src/constants/index.js](https://github.com/WebClub-NITK/incident-2023/blob/main/src/constants/index.js) contains all the information one needs to change. Each website section is written as a JavaScript object and is pretty intuitive to change.

- Icons
  - Whenever you want to use an icon, you'll have to make sure that the icon is imported.
  - Head to [https://react-icons.github.io/react-icons/search](https://react-icons.github.io/react-icons/search) and search for the desired icon. (Eg: SiReact for ReactJS)
  - Note the package it belongs to (Eg: 'Si' here)
  - Import the icon into [`/src/constants/index.js`](https://github.com/WebClub-NITK/incident-2023/blob/main/src/constants/index.js) (Eg: `import { ... SiReact, } from "react-icons/si";` here)

2. Assets

- Add any assets (images) to the [`assets`](https://github.com/WebClub-NITK/incident-2023/tree/main/src/assets) folder.
- Import the asset and export it using the[`/src/assets/index.js`](https://github.com/WebClub-NITK/incident-2023/blob/main/src/assets/index.js) file.


## Contributing 🏆

We welcome contributions in the form of pull requests, issues and documentation. Feel free to help us in any way! ❤️

- Please read and abide by our [Code of Conduct](https://github.com/WebClub-NITK/incident-2023/blob/main/CODE_OF_CONDUCT.md);
our community aspires to be a respectful place both during online and in-person interactions.
- Please follow the [installation guide](https://github.com/WebClub-NITK/incident-2023/blob/main/readme.md#installation-guide) and the [sample git workflow](https://github.com/WebClub-NITK/incident-2023/blob/main/readme.md#sample-git-workflow) to contribute.

## Installation Guide 🧑‍💻

### Using Git and Github

- [Fork](https://docs.github.com/en/get-started/quickstart/fork-a-repo) the repo
- [Clone](https://docs.github.com/en/get-started/quickstart/contributing-to-projects#cloning-a-fork) the forked repository
- Enter the new `portfolio` directory with `cd portfolio`
- Set the upstream remote to the original repository url so that git knows where to fetch updates from in future: `git remote add upstream https://github.com/WebClub-NITK/incident-2023.git`

### Install required packages

- `npm install`

### Run server

- `npm run dev`

<br/>

## Sample Git Workflow

- Follow the [installation guide](https://github.com/WebClub-NITK/incident-2023/blob/main/readme.md#installation-guide) to install the software
- Create a new feature branch with `git checkout -b <name-of-your-feature-branch>`
- Make changes and commit them in the feature branch.
- Once done developing, switch back to the main branch with `git checkout main` ; pull the latest version of the repo with `git pull https://github.com/WebClub-NITK/incident-2023.git main`
- Switch back to the feature branch with `git checkout <name-of-your-feature-branch>`. Apply the new changes on top of the latest version of the repo with `git rebase main`
- [Resolve merge conflicts](https://help.github.com/articles/resolving-a-merge-conflict-from-the-command-line/) (if any)
- Push your feature branch upto your remote repo with `git push origin <name-of-your-feature-branch>`
- [Submit a Pull Request](https://docs.github.com/en/get-started/quickstart/contributing-to-projects#making-a-pull-request) to the main branch.
- After any questions or changes have been resolved, your contribution would be merged in!

#### If you found this repo helpful in anyway, considering giving it a star! 🌟


