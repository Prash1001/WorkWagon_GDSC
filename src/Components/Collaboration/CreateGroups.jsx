import { IconButton } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import React from "react";
function CreateGroups(){
    return(
<div className="createGroups-container">
    <input placeholder="Enter Group Name" className="search-box"/>
    <IconButton>
        <CheckCircleIcon/>
    </IconButton>
</div>
    );
}
export default CreateGroups;