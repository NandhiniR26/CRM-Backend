//import express
const express = require("express");
const userRouter = require("./routes/userRoutes");
const requestLogger = require("./utils/logger");
const unknownEndpoint = require("./utils/error");
// const morgan = require('morgan');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const customerRouter = require("./routes/customerRoutes");
const communicationHistoryRouter = require("./routes/communicationHistoryRoutes");
const offersAndCouponsRouter = require("./routes/offersAndCouponsRoutes");

//create an express app
const app = express();

// app.use(morgan('dev'));


//middleware
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

app.use(cookieParser());

app.use(express.json());

app.use(requestLogger);

app.use('/api/v1/users', userRouter);
app.use('/api/v1/customers',customerRouter);
app.use('/api/v1/communicationHistory',communicationHistoryRouter);
app.use('/api/v1/offersAndCoupons',offersAndCouponsRouter);
app.use(unknownEndpoint);

module.exports=app;