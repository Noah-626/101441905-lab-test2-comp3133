export interface Mission {
    flight_number: number;
    mission_name: string;
    launch_year: string;
    details: string;
    rocket: {
      rocket_name: string;
      rocket_type: string;
    };
    links: {
      mission_patch: string;
      mission_patch_small: string;
      article_link: string;
      video_link: string;
      wikipedia: string;
    };
  }
  