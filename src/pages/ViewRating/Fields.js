import sajadah from "./images/sajadah.png";
import hijab from "./images/hijab.png";
import wudu from "./images/wudu.png";
import halal from "./images/halal.png";
import beard from "./images/beard.png";
import cel from "./images/muslimcel.png";
import lead from "./images/leadership.png";
import mlead from "./images/woma.png";

export {
    amenityFields,
    ratingFields,
    schoolSearchFields
};
const amenityFields = [
    {
      label:"Prayer Space",
      id:"Has prayer space",
      img: sajadah
    },
    {
      label:"Wudu Area",
      id:"Has washing facility(wudu area)",
      img: wudu
    },
    {
      label: "On-campus halal food",
      id: "Has On-campus halal food options",
      img: halal
    }
  ];
  const ratingFields = [
    {
      label: "Dorms",
      id: "Rate the student dorms for muslim friendliness",
    },
    {
      label: "Muslim presence",
      id: "Rate Muslim presence on this campus"
    },
    {
      label: "Muslim staff presence",
      id: "Rate Muslim staff presence on campus"
    },
    {
      label: "Muslim student leadership",
      id: "Rate Muslim student leadership on campus"
    },
    {
      label: "On-campus halal food options",
      id: "Rate on-campus halal food options"
    },
    {
      label: "Comfort wearing traditional/cultural/Islamic clothing",
      id: "How comfortable are students wearing traditional/cultural/Islamic clothing?"
    },
    {
      label: "Beard friendliness",
      id: "Rate beard friendliness"
    },
    {
      label: "Hijab friendliness",
      id: "Rate hijab friendliness"
    },
  ];
const schoolSearchFields = [
  {
    //label: "Search a school",
    id: "search-school",
    type: "autocomplete",
    gridWidth: {
      xs: 8,
      md: 8
    }, 
    placeholder: "Search a school", // if place holder then label is disabled
    dataURL: "https://services1.arcgis.com/Hp6G80Pky0om7QvQ/arcgis/rest/services/Colleges_and_Universities_Campuses/FeatureServer/0/query?where=1%3D1&objectIds=&time=&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&resultType=none&distance=0.0&units=esriSRUnit_Meter&returnGeodetic=false&outFields=*&returnGeometry=false&returnCentroid=false&featureEncoding=esriDefault&multipatchOption=xyFootprint&maxAllowableOffset=&geometryPrecision=&outSR=&datumTransformation=&applyVCSProjection=false&returnIdsOnly=false&returnUniqueIdsOnly=false&returnCountOnly=false&returnExtentOnly=false&returnQueryGeometry=false&returnDistinctValues=false&cacheHint=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&having=&resultOffset=&resultRecordCount=&returnZ=false&returnM=false&returnExceededLimitFeatures=false&quantizationParameters=&sqlFormat=none&f=pjson&token=",
    type: "autocomplete"
  },
  
];