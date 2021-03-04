import { useSelector, useDispatch } from 'react-redux';

import { verifyUser } from '../redux/auth/actions';

const Post = () => {
    const dispatch = useDispatch();
    const userToken = useSelector((state) => state.auth.userToken);

    const handleChange = () => {
        const token = 'cuonglv2602';
        dispatch(verifyUser(token));
    };

    const showData = () => {
        console.log({ userToken });
    };

    return (
        <div>
            <button onClick={handleChange}>click</button>
            <button onClick={showData}>show</button>
        </div>
    );
};

export default Post;
