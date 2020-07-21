const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');

const app = express();
const cors = require('cors');
app.use(cors({ origin: true }));

//initialize firestore
var serviceAccount = require('./ummahacksKey.json');
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://ummahacks-spans.firebaseio.com',
});
const db = admin.firestore();

//routes
app.get('/', (req, res) => {
  return res.status(200).send('Hello World!!');
});

//post method to add a school
app.post('/api/addschool', (req, res) => {
  (async () => {
    try {
      await db
        .collection('SchoolsMetadata')
        .doc(req.body.id)
        .set({
          schoolName: req.body.schoolName,
          city: req.body.city
            ? req.body.city
            : '',
          schoolID: req.body.id,
          state: req.body.state
        });
      return res.status(200).send('School added successfully!');
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  })();
});

//post method to add a review for a school
app.post('/api/school/:id/review', (req, res) => {
  (async () => {
    try {
      await db
        .collection('SchoolReviews')
        .doc(req.params.id)
        .set({
          schoolName: req.body.schoolName,
          hasPrayerSpace: req.body.hasPrayerSpace
            ? req.body.hasPrayerSpace
            : '',
          prayerSpaceRating: req.body.prayerSpaceRating
            ? req.body.prayerSpaceRating
            : '',
        });
      return res.status(200).send('Review sent successfully!');
    } catch (error) {
      console.log(error);
      return res
        .status(500)
        .send('There was an error sending review. Try again later!');
    }
  })();
});

// Read a specific school based on ID
app.get('/api/schools/:id', (req, res) => {
  (async () => {
    try {
      const document = db.collection('SchoolReviewSummary').doc(req.params.id);
      let school = await document.get();
      let response = school.data();
      return res.status(200).send(response);
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  })();
});

// Get all schools
app.get('/api/schools/', (req, res) => {
  async () => {
    try {
      let query = db.collection('SchoolsMetadata');
      let response = [];
      await query.get().then((querySnapshot) => {
        let docs = querySnapshot.docs;
        for (let doc of docs) {
          const selectedItem = {
            id: doc.id,
            schoolName: doc.data().schoolName,
          };
          response.push(selectedItem);
        }
        return response;
      });
      return response;
    } catch (error) {
      console.log(error);
      return res.status(500).send(error);
    }
  };
});

// Export the api to Firebase cloud functions
exports.app = functions.https.onRequest(app);
