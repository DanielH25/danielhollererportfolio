import React from 'react';
import { BsGithub } from 'react-icons/bs'
import { SiGitlab } from 'react-icons/si'

export default function Icons() {

    return (
        <>
            <div className='icons-container'>
                <i className='icon'><a href="https://github.com/DanielH25" target='_blank' rel='noreferrer'><BsGithub /></a></i>
                <i className='icon'><a href="https://gitlab.com/DanielH260654" target='_blank' rel='noreferrer'><SiGitlab /></a></i>
            </div>
        </>
    );
};