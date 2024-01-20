import Express  from "express";
import morgan from "morgan";
import 'dotenv/config';

const app = Express();

// USE OF MIDDLEWARE
app.use(Express.json());
app.use(morgan('tiny'));

// CONFIGURATION FROM DOTENV
const port = process.env.PORT || 3000;

// ROUTE HANDLING
import appRoutes from "./components/routes/AppRoutes.js";
app.use('/', appRoutes);

app.listen(port, ()=> {
    console.log(`Server is loading at ${port}`);
});