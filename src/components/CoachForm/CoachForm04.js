import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import { AST_PropAccess } from 'terser';

const CoachForm = ({setFormState, formState, history, accounts, setAccounts, progress, setProgress}) => {
    
    const ADD_POST = gql`
        mutation createPost(
            $price: Int!
            $position: String!
            $industryName: String!
            $description: String!
            $tagString: String
            $coachEmail: String!
        ) {
            createPost(
                price: $price
                position: $position
                industryName: $industryName
                description: $description
                tagString: $tagString
                coachEmail: $coachEmail
            ) {
                id
                coachEmail
            }
        }
    `;
    const [addPost, error] = useMutation(ADD_POST);

    function submitHandler () {
        setProgress(5)

        addPost({ formState })
        .then(results => {
            console.log(results)
            setTimeout(() => {

                history.push("/addcoach/05")
            }, 3000);
        })
        .catch(err => {
            console.log(err)
            console.log(error)
        })
    }
    
    function backHandler () {
        setProgress(3)
        history.push("/addcoach/03")
    }
     
    return(
        <div>
            <div className="review-form-container">
                <div>
                    <h3>Company</h3>
                    <h4>{formState.company}</h4>
                </div>
                <div>
                    <h3>Position</h3>
                    <h4>{formState.position}</h4>
                </div>
                <div>
                    <h3>Description</h3>
                    <h4>{formState.description}</h4>
                </div>
                <div>
                    <h3>Location</h3>
                    <h4>{`${formState.city}, ${formState.state}`}</h4>
                </div>
                <div>
                    <h3>Price</h3>
                    <h4>{formState.price}</h4>
                </div>
                <div>
                    <h3>LinkedIn</h3>
                    <h4>{accounts.linkedin_url}</h4>
                </div>
                <div>
                    <h3>GitHub</h3>
                    <h4>{accounts.github_url}</h4>
                </div>
                <div>
                    <h3>Website</h3>
                    <h4>{accounts.website_url}</h4>
                </div>
                <div>
                    <h3>Portfolio</h3>
                    <h4>{accounts.portfolio_url}</h4>
                </div>
                <div>
                    <h3>Twitter</h3>
                    <h4>{accounts.twitter_url}</h4>
                </div>
            </div>
            <div>
                <button onClick={backHandler} >Back</button>
                <br/>
                <button onClick={submitHandler} >Publish</button>
            </div>

        </div>
    )
}

export default CoachForm;