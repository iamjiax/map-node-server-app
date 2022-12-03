import likesModel from './likes-model.js';

export const createLike = (like) => likesModel.create(like);
export const deleteLike = (like) => likesModel.deleteOne(like)
export const findLike = (like) => likesModel.findOne(like);
export const findPlaceLikesCount = (xid) => likesModel.countDocuments({"place.xid": xid});
export const findLikesByUser = (uid) => likesModel.find({"user._id": uid});
export const findAllLikes = () => likesModel.find();