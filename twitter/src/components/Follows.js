// import React from "react";
// import { Avatar, Button } from "@mui/material";
// import VerifiedIcon from "@mui/icons-material/Verified";
// import "./Follows.css";
// function Follows({ avatar, disname, tag, link }) {
//   return (
//     <div className="follow">
//       <div className="follow1">
//         <Avatar src={avatar} alt="" />
//         <div className="follow_text">
//           <div className="follow_head">
//             <h5>{disname}</h5>
//             <VerifiedIcon className="icon" />
//           </div>
//         </div>
//         <div>
//           <h5 className="tt">@{tag}</h5>
//         </div>

//         <Button href={link} className="btn">
//           Follow
//         </Button>
//       </div>
//     </div>
//   );
// }

// export default Follows;
import React from "react";
import { Avatar, Button } from "@mui/material";
import VerifiedIcon from "@mui/icons-material/Verified";
import "../components/Follows.css";
function Follows({ avatar, disname, tag, link }) {
  return (
    <div className="follow">
      <div className="follow1">
        <Avatar src={avatar} alt="" />
        <div className="follow_text">
          <div className="follow_head">
            <h5>{disname}</h5>
            <VerifiedIcon className="icon" />
          </div>
          <div className="tt">
            <h5>@{tag}</h5>
          </div>
        </div>
        <Button href={link} className="btni">
          Follow
        </Button>
      </div>
    </div>
  );
}

export default Follows;
