Task 1:
at 'functions/src/percetile.ts'.
function that calculates the 10th, 50th and 90th percentile of the scores from a dataset.

Task 2:
at 'functions/src/index.ts'.
function that could pull 100k documents from firebase's firestore.

Task 3:
To successfully retrieve score percentiles on daily basis, the best approach would be to run aggregation functions when new values are added to the database. This way, we would retrieve percentile values directly from the database and avoid making large amounts of documents reads (expensive).
When talking about large datasets (100K documents in this case), aggregation frequency might be set to different intervals (e.g., hourly, weekly) reducing costs.
