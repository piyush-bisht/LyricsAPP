import React from "react";
import Tracks from "../tracks/Tracks"
import Search from "../layouts/search";
const Index=()=>{

    return(
        <React.Fragment>
            <Search/>
            <Tracks/>
        </React.Fragment>
    )
}
export default Index;