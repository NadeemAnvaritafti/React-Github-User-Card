import React from 'react';

class UserCard extends React.Component {
    render() {
        return (
            <div className='usercard followerscard'>
                <img className='followersimg' src={this.props.img} />
                <div className='info'>
                    <p>Github: {this.props.login}</p>
                    <p>URL: <a href={this.props.url}>{this.props.url}</a></p>
                </div>
            </div>
        )
    }
}

export default UserCard;