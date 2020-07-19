const functions = require('firebase-functions');
const admin = require('firebase-admin');
const express = require('express');

const app = express();
const cors = require('cors');
app.use(cors({origin:true}));

//initialize firestore
var serviceAccount = require("./ummahacksKey.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://ummahacks-spans.firebaseio.com"
});
const db = admin.firestore();
 
//routes
app.get("/hello-world", (req, res)=>{
    return res.status(200).send("Hello World!!");
});

//post method to add a school
app.post("/api/addschool", (req, res)=>{
    (async ()=>{
        try {        
               await db.collection("Schools").doc(req.body.id).set({
                    schoolName: req.body.schoolName,
                    schoolLocation: req.body.schoolLocationObj ? req.body.schoolLocationObj : "",
                    schoolDocumentID: req.body.id,
                });
                return res.status(200).send("School added successfully!");
        } catch(error){
            console.log(error);
            return res.status(500).send(error);
        }
    })();
});
//post method to add a review for a school
app.post("/api/review", (req, res)=>{
    (   
        async ()=>{
            try {
                await db.collection("SchoolReviews").doc(req.body.id).set({
                    schoolName: req.body.schoolName,
                    hasPrayerSpace: req.body.hasPrayerSpace ? req.body.hasPrayerSpace : "",
                    prayerSpaceRating: req.body.prayerSpaceRating ? req.body.prayerSpaceRating : "",
                });
                return res.status(200).send("Review sent successfully!");
            } catch(error){
                console.log(error);
                return res.status(500).send("There was an error sending review. Try again later!");
            }
        }
    )();
});

exports.app = functions.https.onRequest(app);














// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
