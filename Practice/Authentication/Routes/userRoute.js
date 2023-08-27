const { getUserById, putUserById, patchUserById, deleteUserById, postUser, getUser } = require('../Controller/userCtrl');
const { authenticate } = require('../Middleware/authenticate');

const router=require('express').Router();
router.use(authenticate);
router.get('/:userId',getUserById);
router.put('/:userId',putUserById);
router.patch("/:userId",patchUserById);
router.delete("/:userId",deleteUserById);
router.post("/",postUser);
router.get("/",getUser);

module.exports=router;