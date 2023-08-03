Task 1:
at 'functions/src/percetile.ts'.
function that calculates the 10th, 50th and 90th percentile of the scores from a dataset.

Task 2:
at 'functions/src/index.ts'.
function that could pull 100k documents from firebase's firestore.

Task 3:
For efficient frequent retrieval of score percentiles, it is recommended to employ a caching mechanism for storing pre-calculated percentile values. This strategy aims to minimize the need for frequent document reads.
Another approach would be to run aggregation functions when new values are added to the database. This way, we would retrieve percentile values directly from the database and avoid making large amounts of documents reads.
When talking about large datasets (100K documents in this case), aggregation or cache frequency might be set to different intervals (e.g., hourly, weekly).
