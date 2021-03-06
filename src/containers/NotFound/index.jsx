/* eslint-disable arrow-body-style */
import React from 'react';

import NotFoundStyled from './index.style';

const NotFoundContainer = () => {
    return (
        <NotFoundStyled>
            <div id="notfound">
                <div className="notfound">
                    <div className="notfound-404">
                        <h3>Oops! Page not found</h3>
                        <h1>
                            <span>4</span>
                            <span>0</span>
                            <span>4</span>
                        </h1>
                    </div>
                    <h2>Không tìm thấy trang web bạn yêu cầu</h2>
                </div>
            </div>
        </NotFoundStyled>
    );
};

export default NotFoundContainer;
