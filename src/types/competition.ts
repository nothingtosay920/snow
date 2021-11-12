export interface TournamentList {
  code: string,
  message: string,
  data: {
    tournament_list: TournamentListItem[]
  }
} 

type TournamentListItem = {
  tournamentID: string,
  name: string,
  list_image_url: string,
  image_thumb: string,
  start_date: string,
  end_date: string,
  organizer: string,
  address: string
}