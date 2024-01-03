import { Injectable } from '@nestjs/common';
import { hApiFootball } from 'src/api-config/headers';
import { getRequest } from 'src/api-config/requests';
import { url } from 'src/api-config/urls';
import { EndpointResponse } from './types/endpointResponse.type';
import { Match } from './types/match.type';

@Injectable()
export class MatchCalendarService {
  async getCalendar(skip: number, limit: number, leagueId: number | null): Promise<EndpointResponse[]> {
    const request = await getRequest(url.apiFootball.Matches, hApiFootball, {
        season: '2023',
        team: '128',
        league: leagueId
    })
    const allMatches: Match[] = request.response;
    const paginatedMatches = allMatches.slice(skip, skip + limit);

    const response: EndpointResponse[] = paginatedMatches.map((match: Match) => {
        return {
            status: match.fixture.status.long,
            league: match.league,
            round: match.league.round,
            stadium: match.fixture.venue,
            date: match.fixture.timestamp,
            homeTeam: match.teams.home,
            awayTeam: match.teams.away,
            refereeName: match.fixture.referee,
            goals: {
                home: match.goals.home,
                away: match.goals.away
            },
        };
    });

  return response;
  }
}