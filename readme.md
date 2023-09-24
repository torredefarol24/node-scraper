# Scraping Demo

## Installation

Steps to follow:

\*\* Please ensure typescript is installed globally before continuing.

1.  Install Packages

        $ yarn install

2.  Build from source

        $ yarn build

---

## Tests

Steps to follow:

---

## Start

1.Scrape from the initial Scraping URL, edit the file

    src/app.ts

Uncomment line 10

    app.scrape();

Run

    yarn start

---

2.Scrape all pages and ads, edit the file

    src/app.ts

Uncomment line 13

    app.scrapeAll();

Run

    yarn start

---

## Thoughts / Ideas

1. Error Handling / Retry Strategies

   - Idea 1
     - Push failed function into Queue or memory DB (Redis)
     - Run a cron job that checks whether Queue is empty
     - If Queue isn't empty, execute that function
     - Upon getting a successful callback, remove from the queue
   - Idea 2
     - Implement PUBSUB so that during failure events
     - The function that failed, gets called again
     - Set maximum retryCount to avoid infinite loop
   - Idea 3
     - If this was an express.js app then
     - Use middleware for handling errors

2. CI/CD

   - Implement Github Actions for automated code deployment to the server. It's free and quick to use.

3. Accessing more ads from this link

   - How about HTTP API calls to its backend?

4. Others
   - Dockerize the application
   - Write unit tests
   - Follow branching conventions, pull requests

---
