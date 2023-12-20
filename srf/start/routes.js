'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.get('posts', 'PostsController.index')
Route.post('posts', 'PostsController.store')
Route.get('posts/:id', 'PostsController.show')
Route.put('posts/:id', 'PostsController.update')
Route.delete('posts/:id', 'PostsController.destroy')

