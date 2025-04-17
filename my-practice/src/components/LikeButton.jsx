import { useState } from "react";

const LikeButton = () => {
    let [isLiked, setIsLiked] = useState(false);
    let [likes, setLikes] = useState(0);
      let toggle = () => {
       setIsLiked(!isLiked);
       setLikes(likes+1);
    };        
    let styles ={color : "red"}      
        
    
  return (

    <div>
        <p>
            Likes = {likes}</p>
        <p onClick={toggle}>
            {
                isLiked ?( <i className="fa-solid fa-heart" style={styles}></i>)  :(
                    <i className="fa-regular fa-heart"></i>
                )
            }
            </p>
        </div>
  );
}

export default LikeButton