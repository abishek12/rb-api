import Express from 'express';

const appRoutes = Express.Router();

appRoutes.get("/", (req, res) => {
    return res.redirect("https://www.rachanabachan.com");
});

import authRoutes from '../authentication/view/AuthView.js';
appRoutes.use('/auth', authRoutes);

import userRoutes from '../users/view/UserView.js';
appRoutes.use('/users', userRoutes);

import teamRoutes from '../teams/view/TeamView.js';
appRoutes.use('/team', teamRoutes);

import contactRoutes from '../contact/view/ContactView.js';
appRoutes.use('/contact', contactRoutes);

export default appRoutes;