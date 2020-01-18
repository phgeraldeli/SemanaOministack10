const Dev = require('../models/Dev');
const parseStringAsArray = require("../utils/parseStringAsArray");

module.exports = {
    async index(request, response) {
        const { latitude, longitude, techs } = request.query;

        if(techs == null || techs == "") {
            const devs = await Dev.find({
                location: {
                    $near: {
                        $geometry: {
                            type: 'Point',
                            coordinates: [longitude, latitude],
                        },
                        $maxDistance: 10000
                    },
                },
            })
    
            return response.json(devs);
        }



        const techsArray = parseStringAsArray(techs);
    
        const devs = await Dev.find({
            techs: {
                $in: techsArray,
            },
            location: {
                $near: {
                    $geometry: {
                        type: 'Point',
                        coordinates: [longitude, latitude],
                    },
                    $maxDistance: 10000
                },
            },
        })

        return response.json(devs);
    }
}