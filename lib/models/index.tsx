
export const config = {
    version: '/api/v1',
    url: process.env.NEXT_PUBLIC_API_URL ?? process.env.SERVER_API_URL ?? process.env.NEXT_PUBLIC_DEV_API_URL ?? process.env.DEV_API_URL,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    },
};

/* eslint-disable @typescript-eslint/no-explicit-any */
export const fetchAPI = async (url: string, method: string, payload?: any) => {
    try {
        const response = await fetch(`${config.url}${config.version}${url}`, {
            method,
            headers: {
                ...config.headers,
                'Authorization': `Bearer ${process.env.NEXT_PUBLIC_API_EMAIL_TOKEN}`,
            },
            body: payload ? JSON.stringify(payload) : undefined,
        });

        if (!response.ok) {
            const err = await response.json();
            throw new Error(`${err.message} ERR${err.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        return error;
    }
};
/* eslint-enable @typescript-eslint/no-explicit-any */