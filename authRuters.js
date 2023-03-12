const Router = require('express');
const router = new Router();
const controller = require('./authController');
const { check } = require('express-validator');
const authMiddleware = require('./middleware/authMiddleware');
const roleMiddleware = require('./middleware/roleMiddleware');

router.post('/registration', [
    check('username', "The name cannot be empty").notEmpty(),
    check('password', "The password length need to be more then 4 and short then 10 simbols").isLength({ min: 4, max: 10 }),
], controller.registration);
router.post('/login', controller.login);
router.get('/users', roleMiddleware(['ADMIN']), controller.getUsers);

module.exports = router;