let uid = 'test';

export const get = () => {
    return {
        body: {
            uid
        },
    };
};

export async function post ( {request} ) {
   const data = await request.json();
   uid = data;
    return {
        body: {
            uid,
        },
    };
};