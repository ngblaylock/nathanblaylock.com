# Snippets

This repo contains two snippet files, one is a `local.code-snippet` file which is nathanblaylock.com specific, and a `nathanblaylock.code-snippets` file which is intended to be shared with the PACKAGE.

There are some tricky things you can do to auto-install the snippets, but I decided to go with an opt-in snippets file.

> TODO: 
> I need to fix the following statement. `postinstall` does not run when installing or upgrading a package, just when you run `npm install`.

With `npm install` you can add a `postinstall` script that simply copies the `nathanblaylock.code-snippet` file into the repositories own `.vscode` directory. That way it stays up to date, is separate from their code snippets, and stays up to date on every `npm install`.