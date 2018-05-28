import ApiError from '../error';
import model from '../database/db-models';

let User = model.User;

export default {

    "GET /api/users": async (ctx, next) => {
        let users = await User.findAll();
        if (users) {
            ctx.rest({users: users});
        } else {
            throw new ApiError('users:not_found', 'user not found by id.');
        }
    }

};
