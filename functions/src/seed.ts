import * as admin from 'firebase-admin';

const serviceAccount = require('../../admin.json'); // Replace with the path to your Firebase service account key

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'http://localhost:8080', // Firestore emulator URL
});

const db = admin.firestore();

async function seedData() {
    const batchSize = 500;
    const totalTeams = 3000;
    const collectionRef = db.collection('teams');

    for (let i = 0; i < totalTeams; i += batchSize) {
        const batch = db.batch();

        for (let j = i; j < i + batchSize; j++) {
            const team = {
                teamName: `Team ${j + 1}`,
                score: Math.random() * 10,
            };

            const docRef = collectionRef.doc();
            batch.set(docRef, team);
        }

        await batch.commit();
        console.log(`Inserted ${i + batchSize} teams`);
    }

    console.log('Seeding complete.');
}

seedData()
    .then(() => {
        console.log('Seed process finished.');
        process.exit();
    })
    .catch((error) => {
        console.error('Error seeding data:', error);
        process.exit(1);
    });
