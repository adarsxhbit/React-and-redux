import faker from 'faker';
import React from 'react'
import ReactDOM from 'react-dom'
import CommentDetail  from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import './style/App.css'

const App = () => {
    return (
        <div className='ui container comments'>
            <ApprovalCard>
                <CommentDetail author = "Adarsh" time="05:45AM"  comment="Nice Website" photo={faker.image.image()}/>            
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author = "Sagar" time="06:45AM"  comment="Helping" photo={faker.image.image()}/> 
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author = "Raj" time="07:45AM"  comment="Loved it" photo={faker.image.image()}/> 
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail author = "Nirmal" time="08:45AM"  comment="Nice Blog" photo={faker.image.image()}/>    
            </ApprovalCard>
        </div>
    );
}

ReactDOM.render(
    <App/>,
    document.querySelector('#root')

)