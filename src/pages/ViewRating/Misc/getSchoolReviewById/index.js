const schoolWithReviews = require("./SchoolsWithReviews");

function getReviewForSchoolByID(schoolID){
    let schoolByID = Object.keys(schoolWithReviews).filter((key)=>{
        return schoolWithReviews[key].id === schoolID;
    })
    schoolByID = schoolByID[0];
    if(schoolByID != null){
        let school = schoolWithReviews[schoolByID];
        console.log(JSON.stringify(school));
    } else {
        return "No school by that ID found";
    }
}
getReviewForSchoolByID("ADELPHIUNIVERSITY");