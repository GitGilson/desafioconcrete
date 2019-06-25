import React from "react";


const User = ({ usuario }) => (

<div className="repoListContainer">
   <div>
   Avatar:<img src="{{usuario.avatar_url}}"/>
   </div>
   <div>
  <lu>
   <li>Followers:{usuario.followers}</li>
   <li>Following:{usuario.following}</li>
   <li>Email:{usuario.email}</li>
   <li>Bio:{usuario.bio}</li>
   </lu>
   </div>
</div>


);




export default User;