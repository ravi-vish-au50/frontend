import React from 'react'
import "./Profile.css";
export default function ProfilePic() {
  return (
    <div className='profile'>
      {/* profile fram */}
      <div className="profile-frame">
        <div className="profile-pic">
            <img src="https://images.unsplash.com/photo-1681892012507-fad70e921802?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60" alt="" />
        </div>
        <div className="profile-data">
            <h1>Ravi Vishwakarma</h1>
            <div className="profile-info"style={{ display: "flex" }}>
                <p>40 posts</p>
                <p>40 followers</p>
                <p>40 following</p>
            </div>
        </div>
      </div>
      <hr style={{
          width: "90%",

          opacity: "0.8",
          margin: "25px auto",
        }}/>
      <div className="gallery">
        <img src="https://images.unsplash.com/photo-1681892012507-fad70e921802?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60" alt="" />
        <img src="https://images.unsplash.com/photo-1681892012507-fad70e921802?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60" alt="" />
        <img src="https://images.unsplash.com/photo-1681892012507-fad70e921802?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60" alt="" />
        <img src="https://images.unsplash.com/photo-1681892012507-fad70e921802?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60" alt="" />
        <img src="https://images.unsplash.com/photo-1681892012507-fad70e921802?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60" alt="" />
        <img src="https://images.unsplash.com/photo-1681892012507-fad70e921802?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=600&q=60" alt="" />
      </div>
    </div>
  )
}
