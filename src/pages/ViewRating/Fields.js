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
    ratingFields
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
      label: "Muslim staff presence",
      id: "Rate Muslim staff presence on campus"
    }

  ];