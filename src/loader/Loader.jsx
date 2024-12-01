import React from 'react';

const Loader = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <p className="text-6xl font-bold  animate-pulse">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gradient-start to-gradient-end">
                    Q
                </span>
                uanTify
            </p>
        </div>
    );
};

export default Loader;
