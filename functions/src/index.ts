/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import { onRequest } from 'firebase-functions/v2/https';
import * as logger from 'firebase-functions/logger';
import * as admin from 'firebase-admin';

admin.initializeApp({
    projectId: 'demo-functions',
    databaseURL: 'http://localhost:8080',
});

const db = admin.firestore();

export const helloWorld = onRequest((request, response) => {
    logger.info('Hello logs!', { structuredData: true });
    response.send('Hello from Firebase!');
});

/*
Task 2.
*/
export const fetchLargeCollection = onRequest(async (request, response) => {
    const batchSize = 500;
    try {
        const collectionRef = db.collection('teams');

        let querySnapshot = await collectionRef.limit(batchSize).get();
        let lastDoc: admin.firestore.QueryDocumentSnapshot | null = null;

        while (!querySnapshot.empty) {
            // Process the documents in the current batch
            querySnapshot.forEach((doc) => {
                console.log('Document data:', doc.data());
            });

            // Fetch the next batch, starting after the last document from the previous batch
            lastDoc = querySnapshot.docs[querySnapshot.size - 1];
            querySnapshot = await collectionRef.startAfter(lastDoc).limit(batchSize).get();
        }

        response.status(200).send('Fetching complete.');
    } catch (error) {
        console.error('Error fetching documents:', error);
        response.status(500).send('An error occurred.');
    }
});
