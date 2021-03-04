const sleep = (waitTime = 500) => {
    // eslint-disable-next-line no-undef
    return new Promise((resolve) => setTimeout(resolve, waitTime));
};

export default sleep;
