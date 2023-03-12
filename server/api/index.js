import {Router} from "express";
import {reply, getById} from './utils.js';
import {menuCategories, dishes} from './data.js';

export const router = Router();

router.get("/menu", (req, res) => {

    const { id, menuId } = req.query;
    let result = dishes;

    if (id) {
        const category = getById(menuCategories)(id);
        if (category) {
            result = category.menu.map(getById(result));
        }
    }

    if (!id && menuId) {
        result = getById(result)(menuId);
    }
    reply(res, result);
});

router.get("/", (req, res) => {
    res.send('Hi!')
});