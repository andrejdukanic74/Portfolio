import React from "react";
import MapItem from "@components/RoadMap/MapItem";


export const Experience = (props) => {

    const { passdata } = props;

    const LeviHistory = passdata.LeviHistory;
    const LeviSite = passdata.LeviSite;
    const VegaHistory = passdata.VegaHistory;
    const VegaSite = passdata.VegaSite;
    const BraineeringHistory = passdata.BraineeringHistory;
    const BraineeringSite = passdata.BraineeringSite;



    return (
        <div className="flex flex-col md:max-w-[100%] mx-auto w-full relative md:ml-12">
            <div className="absolute left-4  border border-orange-50 p-[3px] w-3 md:w-4 rounded-md h-full md:h-[97%] shadow-lg">
                <div className="absolute bg-white w-1 md:w-2 rounded-md h-full md:h-[99%]"></div>
            </div>
            <MapItem passdata={LeviSite} />
            <MapItem passdata={VegaSite} />
            <MapItem passdata={BraineeringSite} />
        </div>

    );
};


