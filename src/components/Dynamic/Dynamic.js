import React, { useState } from 'react';
import NavBar from '../NavBar/Navbar';
import SecondChart from '../Charts/SecondChart';
import ThirdChart from '../Charts/ThirdChart';



const Dynamic = ({showComponent}) => {
    return ( 
        <div>
            <NavBar />
            {showComponent === true ? (
                <>
                    <SecondChart />
                    <ThirdChart />              
                </>
            ): null}
            
        </div>
    );
}
 
export default Dynamic;
