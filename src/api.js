const express = require('express');

const app = express();

/**
 * @module API
 *
 */

/**
 *
 * Index route
 * @name index
 * @path {GET}
 */

app.get('/', (req, res) => res.send('Welcome'));

/**
 * Users route
 * @name users
 * @path {POST} /users
 */
app.post('/users', (req, res) => res.send('Welcome'));

/**
 * Products route
 * @name products
 * @path {DELETE} /products
 */
app.delete('/product', (req, res) => res.send('Welcome'));

/**
 * Sign-in route
 * @name signin
 * @path {POST} /signin
 */
app.post('/signin', (req, res) => res.send('Welcome'));

