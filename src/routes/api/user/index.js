let uid = 'test';

export const get = () => {
    return {
        body: {
            uid: uid
        },
    };
};

export async function post ( {request} ) {
   const data = await request.json();
   uid = data;
    console.log('post 2', data)
    return {
        body: {
            uid,
        },
    };
};