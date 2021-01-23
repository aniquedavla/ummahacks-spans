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
    {
        label: "Has prayer space/meditation room?",
        id: "hasPrayerSpace", 
        type: "checkbox",
    },
    {
        label: "Rate prayer space",
        description: "often referred to as meditation space",
        id: "prayerSpaceRating", 
        type: "rating",
        showWhenValueInField: {
            fieldID: "hasPrayerSpace",
            value: true
        },
    },
];

export {
    formFields,
}

