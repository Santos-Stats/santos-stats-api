require('dotenv').config()

export const hFootstats = 
    {
        Accept: 'application/json',
        'Accept-Language': 'pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7',
        Authorization: `Bearer ${process.env.API_FOOTSTATS}`,
        Connection: 'keep-alive',
        'Content-Type': 'application/json',
        Origin: 'https://www.footstats.com.br',
    }

export const hApiFootball =
    {
        'X-RapidAPI-Key': process.env.KEY_API_FOOTBALL,
        'X-RapidAPI-Host': process.env.HOST_API_FOOTBALL
    }