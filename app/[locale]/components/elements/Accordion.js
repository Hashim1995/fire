import React, { useState } from 'react';

const Accordion = () => {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false, 
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };
    return (
        <>


            <ul className="accordion-box wow fadeInRight">
                {/*Block*/}
                <li className={isActive.key == 1 ? "accordion block active-block" : "accordion block"} onClick={() => handleToggle(1)}>
                    <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"}>How to get free immigration?
                        <div className="icon fa fa-angle-right" />
                    </div>
                    <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                        <div className="content">
                            <div className="text">Sed rhoncus facilisis purus, at accumsan purus sagittis vitae. Nullam acelit at eros imperdiet. Pellentesque sit.</div>
                        </div>
                    </div>
                </li>
                {/*Block*/}
                <li className={isActive.key == 2 ? "accordion block active-block" : "accordion block"} onClick={() => handleToggle(2)}>
                    <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"}>Which country is good for residents?
                        <div className="icon fa fa-angle-right" />
                    </div>
                    <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                        <div className="content">
                            <div className="text">Sed rhoncus facilisis purus, at accumsan purus sagittis vitae. Nullam acelit at eros imperdiet. Pellentesque sit.</div>
                        </div>
                    </div>
                </li>
                {/*Block*/}
                <li className={isActive.key == 3 ? "accordion block active-block" : "accordion block"} onClick={() => handleToggle(3)}>
                    <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"}>Canada study visa requirements?
                        <div className="icon fa fa-angle-right" />
                    </div>
                    <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                        <div className="content">
                            <div className="text">Sed rhoncus facilisis purus, at accumsan purus sagittis vitae. Nullam acelit at eros imperdiet. Pellentesque sit.</div>
                        </div>
                    </div>
                </li>
                {/*Block*/}
                {/* <li className={isActive.key == 4 ? "accordion block active-block" : "accordion block"} onClick={() => handleToggle(4)}>
                    <div className={isActive.key == 4 ? "acc-btn active" : "acc-btn"}>How can i find my solutions?
                        <div className="icon fa fa-angle-right" />
                    </div>
                    <div className={isActive.key == 4 ? "acc-content current" : "acc-content"}>
                        <div className="content">
                            <div className="text">Sed rhoncus facilisis purus, at accumsan purus sagittis vitae. Nullam acelit at eros imperdiet. Pellentesque sit.</div>
                        </div>
                    </div>
                </li> */}
            </ul>
        </>
    );
};

export default Accordion;