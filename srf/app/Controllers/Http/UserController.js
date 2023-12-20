'use strict'

class UserController {
    async index ({ response }) {
        response.json({
            greeting: 'welcome'
        })
    }

    async store ({ request, response, params: { id } }) {
        const body = request.post()

        response.json({
            message: 'User created successfully.',
            data:body
        })
    }

    async show ({ reponse, params: { id } }) {
        response.json({
            message: 'User retrieved successfully.',
            id
        })
    }

    async update ({ reponse, params: { id } }) {
        const body = request.post()
        
        response.json({
            message: 'User updated successfully.',
            body
        })

    }
}

module.exports = UserController
