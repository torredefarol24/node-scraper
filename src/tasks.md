BONUS: scraping via otomoto mobile app.
Initial url https://www.otomoto.pl/ciezarowe/uzytkowe/mercedes-benz/ od-2014/q-actros? search%5Bfilter_enum_damaged%5D=0&search%5Border%5D=created_at %3Adesc

1. Add getNextPageUrl function to iterate over pages
2. Add addItems function that fetches item urls + item ids (unique ids that the portal uses) from list page
3. Add getTotalAdsCount function - shows how many total ads exist for the provided initial url
4. Add scrapeTruckItem function - that scrapes the actual ads and parses into the format: item id, title, price, registration date, production date, mileage, power
5. Scrape all pages, all ads

Questions/thoughts:

1. Ideas for error catching/solving, retry strategies?
   if it was an EXPRESS.js app
   Then use middleware for handling errors // sample code for errorHandling

Approach 1
Implement PUBSUB events

Approach 2
When any task fails, insert the job into a queue.
Implement a cron job to check that queue for failed tasks, and upon completion pop the task from the queue

2. Accessing more ads from this link than the limit allows (max 50 pages)?

3. Experience with CI/CD tools?
   Implement Github Actions for automated code deployment

4. Other considerations?

   Unit tests
   DOCKER
   feature branching
