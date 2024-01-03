import { EndpointResponse } from './types/endpointResponse.type';
import { MatchCalendarService } from './match-calendar.service';
import { Resolver, Query, Args } from '@nestjs/graphql';

@Resolver()
export class MatchCalendarResolver {
    constructor(private readonly matchCalendarService: MatchCalendarService) {}

    @Query(() => [EndpointResponse])
    async matchCalendar(
        @Args('skip', { nullable: true }) skip: number, 
        @Args('limit', { nullable: true }) limit: number,
        @Args('league', { nullable: true }) league: number,
        @Args('season', { nullable: true }) season: number): Promise<EndpointResponse[]> {
        const response = await this.matchCalendarService.getCalendar(skip, limit, league, season);
        return response
    }
}
