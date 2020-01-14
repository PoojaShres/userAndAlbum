import React from "react";
import { connect } from "react-redux";

const Album = props => {
  return (
    <div>
      <h3>Users</h3>
      <ul>
        {props.users.map(user => (
          <li key={user.id}>{user.id + ".   " + user.name}</li>
        ))}
      </ul>
      <h3>ALBUMS</h3>
      <ul>
        {props.albums.map(user => (
          <li key={user.id}>{user.userId + ".   " + user.title}</li>
        ))}
      </ul>
      <h3>ALBUMS AND USERS</h3>
      <ul>
             {props.userAlbums.map(user => (
          <li key={user.id}>{user.userId + " "+ user.name + "=>   " }
          <li>{user.title}</li></li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    users: state.movieReducer.users,
    albums: state.movieReducer.albums,
    userAlbums: state.movieReducer.users.map(user=> {
      const mergeUserAndAlbum = state.movieReducer.albums.find(album=> album.userId=== user.id)
      return{...user, ...mergeUserAndAlbum}
    })
 
}}

export default connect(mapStateToProps)(Album);
