import { Either, left, right } from '@sweet-monads/either';
import * as request from 'request-promise';
import {
  LoadVideoInfoFromYtPort,
  LoadVideoInfoFromYtError,
  VideoInfo,
} from '../../domain/ports/out/load-video-info-from-yt.port';

export class YoutubePersistenceAdapterService
  implements LoadVideoInfoFromYtPort {
  private YT_URL = 'https://youtube.googleapis.com/youtube/v3';

  constructor(private readonly youtube_api_key: string) {}

  async loadInfo(
    videoId: string,
  ): Promise<Either<LoadVideoInfoFromYtError, VideoInfo>> {
    try {
      const rawResponse = await request.get(`${this.YT_URL}/videos`, {
        qs: {
          part: ['snippet', 'contentDetails', 'statistics'].join(','),
          id: videoId,
          key: this.youtube_api_key,
        },
        headers: {
          Accept: 'application/json',
        },
      });
      const response = JSON.parse(rawResponse);
      let rawDuration = response.items[0].contentDetatils.duration;
      const videoInfo: VideoInfo = {
        duration: 1,
        viewCount: response.items[0].statistices.viewCount,
      };
      return right(videoInfo);
    } catch (e) {
      return left(
        new LoadVideoInfoFromYtError('Error on getting info from YT'),
      );
    }
    return right({
      duration: 120,
      viewCount: 5000,
    });
  }
}
