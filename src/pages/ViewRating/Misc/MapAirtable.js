let UniqueSchools = require("./UniqueSchools");

// console.log("Unique schools", UniqueSchools);
let schoolWithReviews = UniqueSchools.map((obj)=>{
    return {
        id: obj.id,
        schoolName: obj.schoolName,
        reviews: [],
    }
});
var Airtable = require('airtable');

Airtable.configure({
    endpointUrl: 'https://api.airtable.com',
    apiKey: ''
});

var base = Airtable.base('appZCPnjVfO8SjICu');

base('SchoolRatings').select({
    // Selecting the first 3 records in Grid view:
    view: "Grid view"
}).eachPage(function page(records, fetchNextPage) {
    // This function (`page`) will get called for each page of records.
    console.log("Page length", records.length);
    records.forEach(function(record) {
        let schoolId = record.get("School Name");
        let uniqueSchoolID = schoolId.replace(/\s+/g, "").replace(/([.,-])/g, "").toUpperCase();
        Object.keys(UniqueSchools).map((obj)=>{
            if(UniqueSchools[obj].id === uniqueSchoolID){
                schoolWithReviews[obj]["reviews"].push(record.fields);
            }
        })
        console.log('Retrieved a record');
    });

    // To fetch the next page of records, call `fetchNextPage`.
    // If there are more records, `page` will get called again.
    // If there are no more records, `done` will get called.
    fetchNextPage();
}, function done(err) {
    console.log("School with reviews");
    schoolWithReviews.map((obj)=>{
        console.log(obj);
    })
    if (err) { console.error(err); return; }
});
