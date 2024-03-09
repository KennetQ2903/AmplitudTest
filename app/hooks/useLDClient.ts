import {useEffect, useState} from 'react';

// Import the LaunchDarkly client.
import LDClient from 'launchdarkly-react-native-client-sdk';

export const useLDClient = () => {
  const [ldClient, setLdClient] = useState<LDClient>();

  useEffect(() => {
    async function initLD() {
      try {
        if (!ldClient) {
          return;
        }
        // Create a new instance of the LDClient and configure it with your mobile-specific SDK key and user.
        const client = new LDClient();

        const config = {
          mobileKey: 'mob-a5272e8e-ccd7-4d86-9635-49b740cdcfff',
        };

        const user = {
          key: 'example-user-key',
          kind: 'user',
        };

        await client.configure(config, user);
        console.log('client launch darkly', client);
        // store client in state
        setLdClient(client);
      } catch (err) {
        console.error(err);
      }
    }

    initLD();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    ldClient,
  };
};
