# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.

### Syntax

- Single quotes are used around the names of buttons. The word “button” should be avoided whenever possible. Leave out the word “Add” in button names.
    - Example: To create a patient contact, click ‘New Patient’ on the patient main grid.
- When listing examples, use e.g., (because i.e. means “that is,” and e.g. means “for example")
- Entity names are capitalized when introducing the entity, and lower-case any other time they appear on the documentation
- Entity names are in plural on the sidebar and header of each page. When labeling an action to do with 
- When linking to a different entity’s documentation page, only link to each entity once on a page.
    - Before linking, consider whether you think the user would find more information about the entity you are linking helpful
- When listing fields on a form, field names are in a bullet-point list and italicized.
- Use "enter" rather than "populate (e.g. "enter the ptient's date of birth")
- prepopulated is one word. so is subgrid. so is clearinghouse.
- if it's not a full sentence, it doesn't need to start with a capital letter (*Payment Amount* - the total amount paid.) lowercase t