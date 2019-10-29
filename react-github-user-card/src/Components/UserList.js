import React from 'react';
import UserCard from './UserCard';
import FollowersCards from './FollowersCards';

class UserList extends React.Component {
    render() {
        return (
            <div className='userlist'>
                    <UserCard data={this.props.data}/>
                    <h3>Followers</h3>
                    <div className='followerslist'>
                        {this.props.followers.map(user => {
                        return <FollowersCards img={user.avatar_url} login={user.login} url={user.html_url} />
                        })}
                    </div>
            </div>
        )
    }
}

export default UserList;