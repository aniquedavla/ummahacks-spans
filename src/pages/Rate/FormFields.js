const formFields = [
    {
        label: "Select a school",
        description: "If you can't find the school here, enter the name in the field below",
        id: "school-select", 
        type: "autocomplete",
        dataURL: "https://services1.arcgis.com/Hp6G80Pky0om7QvQ/arcgis/rest/services/Colleges_and_Universities_Campuses/FeatureServer/0/query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=*&returnGeometry=false&returnCentroid=false&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=false&quantizationParameters=&sqlFormat=none&f=pjson&token=",
        required: true,
    },
    {
        label: "School name",
        description: "No acronyms please :)",
        id: "school-name", 
        type: "text",
        required: false,
        gridWidth: {
            md: 12
        }

    },
    //Prayer Space
    {
        label: "Has prayer space/meditation room?",
        id: "hasPrayerSpace", 
        type: "checkbox",
        dependentFieldId: "prayerSpaceRating"
    },
    {
        label: "Rate prayer space",
        description: "often referred to as meditation space",
        id: "prayerSpaceRating", 
        type: "rating",
        showWhenValueInField: {
            fieldID: "hasPrayerSpace",
        },
    },
    //Wudu Area
    {
        label: "Has wudu area?",
        id: "hasWuduArea", 
        type: "checkbox",
    },
    {
        label: "Rate wudu area",
        id: "wuduAreaRating", 
        type: "rating",
        showWhenValueInField: {
            fieldID: "hasWuduArea",
        },
    },
    //halal food
    {
        label: "Has on-campus halal food options?",
        id: "hasOnCampusHalalFood", 
        type: "checkbox",
    },
    {
        label: "Rate on-campus halal food options",
        id: "onCampusHalalFoodRating", 
        type: "rating",
        showWhenValueInField: {
            fieldID: "hasOnCampusHalalFood",
        },
    },
    //clubs and orgs
    {
        label: "Select all Muslim/cultural student organizations present on this campus",
        id: "relevantStudentOrgs",
        type: "multi-select",
        menus: [
            "Muslim Student Association(MSA)", 
            "Students for Justice in Palestine(SJP)",
            "Pakistani Student Association(PSA)", 
            "Afghan Student Association", 
            "Arab Student Association",
            "Persian Student Association",
            "Somalian Student Association"
        ]  
    },
    {
        label: "Add a student organization that we missed",
        id: "missedStudentOrg",
        type: "text"

    },
    //traditional clothing
    {
        label: "How comfortable are students wearing traditional/cultural/Islamic clothing?",
        id: "traditionalClothingComfortRating",
        type: "rating"
    },
    {
        label: "Rate Muslim presence on this campus",
        id: "muslimPresenceRating",
        type: "rating"

    },
    {
        label: "Rate Muslim student leadership on campus",
        id: "muslimLeadershipRating",
        type: "rating"

    },
    {
        label: "Rate Muslim staff presence on campus",
        id: "muslimStaffPresenceRating",
        type: "rating"

    },
    {
        label: "Rate the student dorms for Muslim friendliness",
        id: "dormsFriendlinessRating",
        type: "rating"
    },
    //hate crimes
    {
        label: "Have you or someone you know encountered hate crimes?",
        id: "hateCrimes",
        type: "select",
        menus: [
            {
                label: "never",
                value: "never"
            },
            {
                label: "a few times",
                value: "few"
            },
            {
                label: "many times",
                value: "many"
            }
        ],
    },
    {
        label: "Comments",
        id: "comment",
        type: "text",
        rows: 4,
    },
];

export {
    formFields,
}

