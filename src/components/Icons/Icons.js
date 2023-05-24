import React from 'react';
import { BsGithub } from 'react-icons/bs';
import { SiGitlab } from 'react-icons/si'; //ImProfile
import { ImProfile } from 'react-icons/im';

export default function Icons({ CV }) {

    return (
        <>
            <div className='icons-container'>
                <i className='icon'><a href="https://github.com/DanielH25" target='_blank' rel='noreferrer'><BsGithub /></a></i>
                <i className='icon'><a href="https://gitlab.com/DanielH260654" target='_blank' rel='noreferrer'><SiGitlab /></a></i>
                <i className='icon'><a href={CV} download="CV-DanielHollerer" rel='noopener noreferrer' target='_blank'><ImProfile /></a></i>
            </div>
        </>
    );
};