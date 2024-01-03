export const url = 
{
    footStats: {
        Calendar: "https://footstatsapiapp.azurewebsites.net/campeonatos/850/calendario",
    },

    espn: {
        Calendar: "https://www.espn.com.br/futebol/time/calendario/_/id/2674/santos"
    },

    apiFootball: {
/*
    Vem as informações gerais das partidas, podendo colocar como parametro a season e o time, com isso dentro do JSON podemos capturar isso como importante:
    {
        fixtures: {
            id, referee, date
            venue:{
                id, name, city
            }
            status:{
                long
            }
        }
        league:{
            id, name, logo, season, round
        } 
        teams: {
            home: {
                id, name, logo, winner
            }
            away: { 
                id, name, logo, winner
            }
        }
        goals: {
            home, away
        }
        score: {
            halftime, fulltime, extratime, penalty
        }
    }
*/
        Matches: "https://api-football-v1.p.rapidapi.com/v3/fixtures",
/*
    team: { 
        id, name, logo
    }
    statistics[16]: { 
        type, value
    }
*/
        FixtureStaticsById: "https://api-football-v1.p.rapidapi.com/v3/fixtures/statistics",
/*

*/
        PlayersStaticsByFixtureId: "https://api-football-v1.p.rapidapi.com/v3/fixtures/players"
    }


}