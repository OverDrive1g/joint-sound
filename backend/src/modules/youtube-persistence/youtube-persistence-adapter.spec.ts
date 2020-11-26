require('dotenv').config();
import { YoutubePersistenceAdapterService } from './youtube-persistence-adapter.service';

describe('YoutubePersistenceAdapterService', () => {
  let youtubePersistenceAdapterService: YoutubePersistenceAdapterService;

  beforeEach(() => {
    console.log('YT_KEY', process.env.YT_API_KEY);
    youtubePersistenceAdapterService = new YoutubePersistenceAdapterService(
      process.env.YT_API_KEY,
    );
  });

  describe('loadInfo', () => {
    it('1', async () => {
      //
      let info = await youtubePersistenceAdapterService.loadInfo('NLYWOj8MveM');
      debugger;
    });
  });
});
