const { User, Thought } = require('../models');

module.exports = {
    //get all users
    getUsers(req, res){
        Thought.find().then((thoughts) => res.json(thoughts))
            .catch((err) => res.status(500).json(err));
    },
    //get single user
    getSingleUser(req, res){
        User.findOne({ _id: req.params.userId }).select('-__v')
            .then((user) =>
            !user
                ? res.status(404).json({ message: 'No user with that ID' })
                : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },
    //create new user
    createNewUser(req, res){
        User.create(req.body)
            .then((user) => res.json(user))
            .catch((err) => {
                console.log(err);
                return res.status(500).json(err);
            });
    },
    updateUserById(req, res){
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $set: req.body },
            { runValidators: true, new: true }
          )
            .then((user) =>
              !user
                ? res.status(404).json({ message: 'No user with this id!' })
                : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },
    deleteUserById(req, res){
        User.findOneAndDelete({ _id: req.params.courseId })
            .then((course) =>
                !user
                    ? res.status(404).json({ message: 'No user with that ID' })
                    : Thought.deleteMany({ _id: { $in: user.thoughts } })
            )
            .then(() => res.json({ message: 'User and thoughts deleted!' }))
            .catch((err) => res.status(500).json(err));
    },
    addNewFriend(req, res){
        console.log('You are adding a friend.');
        console.log(req.body);
        Student.findOneAndUpdate(
            { _id: req.params.userId },
            { $addToSet: { friends: req.body } },
            { runValidators: true, new: true }
        )
            .then((user) =>
                !user
                    ? res
                        .status(404)
                        .json({ message: 'No user found with that ID.' })
                    : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },
    removeFriend(req, res){
        User.findOneAndUpdate(
            { _id: req.params.userId },
            { $pull: { friend: { userId: req.params.userId } } },
            { runValidators: true, new: true }
          )
            .then((user) =>
              !user
                ? res
                    .status(404)
                    .json({ message: 'No user found with that ID.' })
                : res.json(user)
            )
            .catch((err) => res.status(500).json(err));
    },
};