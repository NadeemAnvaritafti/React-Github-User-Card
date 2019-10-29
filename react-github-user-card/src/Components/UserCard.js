import React from 'react';

class UserCard extends React.Component {
    render() {
        return (
            <div className='usercard'>
                <div className='polaroid'>
                    <img src={this.props.data.avatar_url} />
                    <h4>{this.props.data.name}</h4>
                </div>
                <div className='info'>    
                    <p>From: {this.props.data.location}</p>
                    <p>Followers: {this.props.data.followers}</p>
                    <p>URL: <a href={this.props.data.html_url}>{this.props.data.html_url}</a></p>
                </div>
            </div>
        )
    }
}

export default UserCard;