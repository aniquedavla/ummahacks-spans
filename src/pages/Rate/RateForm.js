import React, { useEffect } from 'react';
import ReactGA from "react-ga";

export default function RateForm(){
    useEffect(()=>{
        ReactGA.initialize("UA-84778445-2");
        ReactGA.set(window.location.pathname + window.location.search);
      });
    return(
        <>
        <iframe className="airtable-embed airtable-dynamic-height" src="https://airtable.com/embed/shrIszaUXHVIz6U6V?backgroundColor=gray" frameborder="0" onmousewheel="" width="100%" height="2126"></iframe>
        </>
    );
}