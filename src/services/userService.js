import * as httpRequest from '~/utils/httpRequest';

export const getSuggested = async (page = "1", per_page) => {
    try {
        const res = await httpRequest.get('users/suggested', {
            params: {
                page,
                per_page,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error);
    }
};
